import { Stack, Paper, Typography } from '@mui/material';
import RecipeSelectionCard from './recipe_selection_card';
import { IntermediateProduct } from './calculator_utils';
import { AicProductKey } from '@data/items/aic';
import { Receipt } from '@data/receipts/type';

interface ProductionChainSectionProps {
  intermediateProducts: Map<AicProductKey, IntermediateProduct>;
  onRecipeChange: (item: AicProductKey, recipe: Receipt) => void;
}

export default function ProductionChainSection({
  intermediateProducts,
  onRecipeChange,
}: ProductionChainSectionProps) {
  const products = Array.from(intermediateProducts.entries()).sort((a, b) =>
    a[0].localeCompare(b[0]),
  );

  if (products.length === 0) {
    return (
      <Paper variant="outlined" sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          生产链
        </Typography>
        <Typography variant="body2" color="text.secondary">
          请先添加目标产品
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper variant="outlined" sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        生产链 ({products.length} 种中间产品)
      </Typography>
      <Stack spacing={2}>
        {products.map(([item, product]) => (
          <RecipeSelectionCard
            key={item}
            item={item}
            quantity={product.quantity}
            alternativeRecipes={product.alternativeRecipes}
            chosenRecipe={product.chosenRecipe}
            onRecipeChange={(recipe) => onRecipeChange(item, recipe)}
          />
        ))}
      </Stack>
    </Paper>
  );
}
