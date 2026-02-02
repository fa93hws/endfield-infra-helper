import AppLayout from '@ui/layout/app_layout';
import { allReceipts } from '@data/receipts';
import { sortReceiptsByOutput } from '@data/receipts/sort';
import { Receipt } from '@data/receipts/type';
import { Typography, Stack } from '@mui/material';
import RecipeGroup from './recipe_group';

export default function Page() {
  const sortedReceipts = sortReceiptsByOutput(allReceipts);

  // Group receipts by output item
  const groupedReceipts = sortedReceipts.reduce(
    (acc, receipt) => {
      const outputKey = receipt.outputs[0].item;
      if (!acc[outputKey]) {
        acc[outputKey] = [];
      }
      acc[outputKey].push(receipt);
      return acc;
    },
    {} as Record<string, Receipt[]>,
  );

  return (
    <AppLayout current="receipts">
      <Typography variant="h4" gutterBottom>
        配方
      </Typography>

      <Stack spacing={1}>
        {Object.entries(groupedReceipts).map(([outputKey, recipes]) => (
          <RecipeGroup key={outputKey} recipes={recipes} />
        ))}
      </Stack>
    </AppLayout>
  );
}
