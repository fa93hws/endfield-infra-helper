import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Receipt } from '@receipts';
import { usePageContext } from 'vike-react/usePageContext';
import { navigate } from 'vike/client/router';
import {
  aggregateIntermediateProducts,
  aggregateNaturalResources,
  buildProductionTree,
  buildRecipeMap,
  type IntermediateProduct,
  type ProductionNode,
} from './calculator_utils';

export interface DesiredOutput {
  id: string; // Unique ID for React keys
  item: string;
  quantity: number; // Target quantity per minute
}

export interface CalculatorState {
  desiredOutputs: DesiredOutput[];
  recipeChoices: Map<string, Receipt>;
  productionTrees: ProductionNode[];
  naturalResources: Map<string, number>;
  intermediateProducts: Map<string, IntermediateProduct>;
}

// Parse URL outputs parameter: "item1:qty1,item2:qty2" -> DesiredOutput[]
function parseOutputsFromURL(urlParam: string): DesiredOutput[] {
  if (!urlParam) return [];

  return urlParam.split(',').map((part, index) => {
    const [item, qtyStr] = part.split(':');
    const quantity = Number.parseFloat(qtyStr) || 30;
    return {
      id: `${Date.now()}-${index}`,
      item,
      quantity,
    };
  });
}

// Serialize DesiredOutput[] to URL format: "item1:qty1,item2:qty2"
function serializeOutputsToURL(outputs: DesiredOutput[]): string {
  return outputs.map((output) => `${output.item}:${output.quantity}`).join(',');
}

export function useCalculator() {
  const pageContext = usePageContext();
  const urlOutputsParam = (pageContext.urlParsed.search.outputs as string) || '';

  // Initialize state from URL
  const [desiredOutputs, setDesiredOutputs] = useState<DesiredOutput[]>(() =>
    parseOutputsFromURL(urlOutputsParam),
  );
  const [recipeChoices, setRecipeChoices] = useState<Map<string, Receipt>>(new Map());

  // Update URL when desiredOutputs change
  useEffect(() => {
    const serialized = serializeOutputsToURL(desiredOutputs);
    const searchParams = new URLSearchParams();

    if (serialized) {
      searchParams.set('outputs', serialized);
    }

    navigate(`/calculator?${searchParams.toString()}`, {
      keepScrollPosition: true,
    });
  }, [desiredOutputs]);

  // Memoize the recipe map since it doesn't change
  const recipeMap = useMemo(() => buildRecipeMap(), []);

  // Recalculate production trees whenever desired outputs or recipe choices change
  const productionTrees = useMemo(() => {
    return desiredOutputs.map((output) =>
      buildProductionTree(output.item, output.quantity, recipeChoices, recipeMap),
    );
  }, [desiredOutputs, recipeChoices, recipeMap]);

  // Aggregate natural resources from all trees
  const naturalResources = useMemo(() => {
    return aggregateNaturalResources(productionTrees);
  }, [productionTrees]);

  // Aggregate intermediate products for display
  const intermediateProducts = useMemo(() => {
    return aggregateIntermediateProducts(productionTrees, recipeChoices, recipeMap);
  }, [productionTrees, recipeChoices, recipeMap]);

  // Add a new desired output
  const addDesiredOutput = useCallback(
    (item: string, quantity?: number) => {
      let finalQuantity = quantity;

      // If quantity not provided, get it from the recipe
      if (finalQuantity == null) {
        const recipes = recipeMap.get(item);
        if (recipes && recipes.length > 0) {
          const outputItem = recipes[0].outputs.find((o) => o.item === item);
          finalQuantity = outputItem?.perMin ?? 30; // Fallback to 30 if not found
        } else {
          finalQuantity = 30; // Default fallback
        }
      }

      const newOutput: DesiredOutput = {
        id: `${Date.now()}-${Math.random()}`,
        item,
        quantity: finalQuantity,
      };
      setDesiredOutputs((prev) => [...prev, newOutput]);
    },
    [recipeMap],
  );

  // Remove a desired output by ID
  const removeDesiredOutput = useCallback((id: string) => {
    setDesiredOutputs((prev) => prev.filter((output) => output.id !== id));
  }, []);

  // Update the quantity of a desired output
  const updateQuantity = useCallback((id: string, quantity: number) => {
    setDesiredOutputs((prev) =>
      prev.map((output) => (output.id === id ? { ...output, quantity } : output)),
    );
  }, []);

  // Update the item of a desired output
  const updateItem = useCallback(
    (id: string, item: string) => {
      setDesiredOutputs((prev) =>
        prev.map((output) => {
          if (output.id !== id) return output;

          // Get the default recipe for this item
          const recipes = recipeMap.get(item);
          let newQuantity = output.quantity; // Keep existing quantity as fallback

          if (recipes && recipes.length > 0) {
            // Find the output quantity for this item in the first recipe
            const outputItem = recipes[0].outputs.find((o) => o.item === item);
            if (outputItem) {
              newQuantity = outputItem.perMin;
            }
          }

          return { ...output, item, quantity: newQuantity };
        }),
      );
    },
    [recipeMap],
  );

  // Select a specific recipe for an item
  const selectRecipe = useCallback((item: string, recipe: Receipt) => {
    setRecipeChoices((prev) => {
      const newChoices = new Map(prev);
      newChoices.set(item, recipe);
      return newChoices;
    });
  }, []);

  // Get available recipes for an item
  const getAvailableRecipes = useCallback(
    (item: string): Receipt[] => {
      return recipeMap.get(item) ?? [];
    },
    [recipeMap],
  );

  return {
    // State
    desiredOutputs,
    recipeChoices,
    productionTrees,
    naturalResources,
    intermediateProducts,
    recipeMap,

    // Actions
    addDesiredOutput,
    removeDesiredOutput,
    updateQuantity,
    updateItem,
    selectRecipe,
    getAvailableRecipes,
  };
}
