import { ItemCategory, items } from './generated/items';
import { receipts } from './generated/receipts';

export { items, type Item, ItemCategory } from './generated/items';
export { receipts, type Receipt, type ReceiptItem } from './generated/receipts';
export * as helper from './helper';

// Export images object (image paths from items)
export const images: Record<string, string> = Object.fromEntries(
  Object.entries(items).map(([key, item]) => [key, item.imagePath]),
);

// Helper to filter items by category
function filterItemsByCategory(categories: ItemCategory[]): Record<string, string> {
  return Object.fromEntries(
    Object.entries(items)
      .filter(([, item]) => categories.includes(item.category as ItemCategory))
      .map(([key, item]) => [key, item.label]),
  );
}

// AIC Products (manufactured items)
export const allProduces = filterItemsByCategory([
  ItemCategory.ore_refined,
  ItemCategory.ore_powder,
  ItemCategory.plant_powder,
  ItemCategory.bottle,
  ItemCategory.battery,
  ItemCategory.part,
  ItemCategory.component,
  ItemCategory.medicine,
  ItemCategory.solution,
  ItemCategory.bottled_solution,
]);

// Natural Items (resources)
export const naturalItems = filterItemsByCategory([
  ItemCategory.natural_ore,
  ItemCategory.natural_plant,
  ItemCategory.plant_seed,
  ItemCategory.other,
]);

// Natural item sub-categories
export const ores = filterItemsByCategory([ItemCategory.natural_ore]);
export const plants = filterItemsByCategory([ItemCategory.natural_plant]);

// All receipts
export const allReceipts = receipts;
