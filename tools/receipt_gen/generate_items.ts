import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ItemRow {
  category: string;
  id: string;
  englishName: string;
  chineseName: string;
}

// Convert snake_case to camelCase
function toCamelCase(str: string): string {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

// Parse CSV file
function parseItemsCSV(csvPath: string): ItemRow[] {
  const content = fs.readFileSync(csvPath, 'utf-8');
  const lines = content.trim().split('\n');

  // Skip header
  const dataLines = lines.slice(1);

  const items: ItemRow[] = [];

  for (const line of dataLines) {
    if (!line.trim()) continue;

    const [category, id, englishName, chineseName] = line.split(',');

    items.push({
      category,
      id,
      englishName,
      chineseName,
    });
  }

  return items;
}

// Generate TypeScript code
function generateItemsTS(items: ItemRow[]): string {
  const lines: string[] = [];

  // Add file header
  lines.push('// This file is auto-generated. Do not edit manually.');
  lines.push('// Generated from tools/receipt_gen/csv/items.csv');
  lines.push('');

  // Add interface
  lines.push('export interface Item {');
  lines.push('  label: string;');
  lines.push('  imagePath: string;');
  lines.push('}');
  lines.push('');

  // Start items object
  lines.push('export const items: Record<string, Item> = {');

  // Generate each item entry
  items.forEach((item, index) => {
    const camelCaseKey = toCamelCase(item.id);
    const imagePath = `/images/items/${item.id}.webp`;

    lines.push(`  ${camelCaseKey}: {`);
    lines.push(`    label: '${item.chineseName}',`);
    lines.push(`    imagePath: '${imagePath}',`);
    lines.push(`  }${index < items.length - 1 ? ',' : ''}`);
  });

  // Close items object
  lines.push('};');
  lines.push('');

  return lines.join('\n');
}

// Main function
export function genItems() {
  const csvPath = path.join(__dirname, 'csv', 'items.csv');
  const outputPath = path.join(__dirname, '../../src/generated/items.ts');

  console.log('Reading items from:', csvPath);

  // Parse CSV
  const items = parseItemsCSV(csvPath);
  console.log(`Parsed ${items.length} items`);

  // Generate TypeScript code
  const tsCode = generateItemsTS(items);

  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write output file
  fs.writeFileSync(outputPath, tsCode, 'utf-8');
  console.log('Generated:', outputPath);
  console.log('Done!');
}
