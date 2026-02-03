import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material';
import { items } from '@receipts/generated/items';
import type { Receipt } from '@receipts/generated/receipts';
import { groupReceiptsByFirstOutput, sortReceiptsByOutput } from '@receipts/helper';
import { RecipeGroup } from './recipe_group';

type ReceiptSectionProps = {
  title: string;
  recipes: Receipt[];
  searchQuery: string;
};

export function ReceiptSection({ title, recipes, searchQuery }: ReceiptSectionProps) {
  const groupedReceipts = React.useMemo(
    () => groupReceiptsByFirstOutput(sortReceiptsByOutput(recipes, items)),
    [recipes],
  );

  return (
    <Accordion defaultExpanded={true} disableGutters>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={1}>
          {Object.entries(groupedReceipts).map(([outputKey, recipes]) => (
            <RecipeGroup key={outputKey} recipes={recipes} searchQuery={searchQuery} />
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
