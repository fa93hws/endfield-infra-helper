#!/usr/bin/env tsx
import { genItems } from './generate_items.js';
import { genReceipts } from './generate_receipts.js';

async function main() {
  console.log('=== Generating Items ===');
  genItems();
  console.log('');

  console.log('=== Generating Receipts ===');
  genReceipts();
  console.log('');

  console.log('✅ All files generated successfully!');
}

main();
