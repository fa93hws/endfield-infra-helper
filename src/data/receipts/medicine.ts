import type { Receipt } from './type';

export const plantReceipts: Receipt[] = [
  { inputs: [{ item: 'sandleaf', perMin: 30 }], outputs: [{ item: 'sandleafPowder', perMin: 30 }] },
  // buckflower
  {
    inputs: [{ item: 'buckflower', perMin: 30 }],
    outputs: [{ item: 'buckflowerPowder', perMin: 30 }],
  },
  {
    inputs: [
      { item: 'buckflowerPowder', perMin: 60 },
      { item: 'sandleafPowder', perMin: 30 },
    ],
    outputs: [{ item: 'groundBuckflowerPowder', perMin: 30 }],
  },
  // citrome
  {
    inputs: [{ item: 'citrome', perMin: 30 }],
    outputs: [{ item: 'citromePowder', perMin: 30 }],
  },
  {
    inputs: [
      { item: 'citromePowder', perMin: 60 },
      { item: 'sandleafPowder', perMin: 30 },
    ],
    outputs: [{ item: 'groundCitromePowder', perMin: 30 }],
  },
  // zhenya
  {
    inputs: [{ item: 'yazhen', perMin: 30 }],
    outputs: [{ item: 'yazhenPowder', perMin: 30 }],
  },
];

export const solutionReceipts: Receipt[] = [
  {
    inputs: [
      { item: 'yazhenPowder', perMin: 30 },
      { item: 'cleanWater', perMin: 30 },
    ],
    outputs: [{ item: 'yazhenSolution', perMin: 30 }],
  },
];

export const bottledSolutionReceipts: Receipt[] = [
  {
    inputs: [
      { item: 'yazhenSolution', perMin: 30 },
      { item: 'ferriumBottle', perMin: 30 },
    ],
    outputs: [{ item: 'ferriumBottleYazhenSolution', perMin: 30 }],
  },
];

export const medicineReceipts: Receipt[] = [
  {
    inputs: [
      { item: 'buckflowerPowder', perMin: 30 },
      { item: 'amethystPowder', perMin: 30 },
    ],
    outputs: [{ item: 'buckCapsuleC', perMin: 6 }],
  },
  {
    inputs: [
      { item: 'buckflowerPowder', perMin: 60 },
      { item: 'ferriumBottle', perMin: 60 },
    ],
    outputs: [{ item: 'buckCapsuleB', perMin: 6 }],
  },
  {
    inputs: [
      { item: 'groundBuckflowerPowder', perMin: 60 },
      { item: 'steelBottle', perMin: 60 },
    ],
    outputs: [{ item: 'buckCapsuleA', perMin: 6 }],
  },
  {
    inputs: [
      { item: 'citromePowder', perMin: 30 },
      { item: 'amethystPowder', perMin: 30 },
    ],
    outputs: [{ item: 'CannedCitromeC', perMin: 6 }],
  },
  {
    inputs: [
      { item: 'citromePowder', perMin: 60 },
      { item: 'ferriumBottle', perMin: 60 },
    ],
    outputs: [{ item: 'CannedCitromeB', perMin: 6 }],
  },
  {
    inputs: [
      { item: 'groundCitromePowder', perMin: 60 },
      { item: 'steelBottle', perMin: 60 },
    ],
    outputs: [{ item: 'CannedCitromeA', perMin: 6 }],
  },
  {
    inputs: [
      { item: 'ferriumBottleYazhenSolution', perMin: 60 },
      { item: 'ferriumPart', perMin: 30 },
    ],
    outputs: [{ item: 'yazhenSprayB', perMin: 6 }],
  },
];
