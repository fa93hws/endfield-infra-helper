import AppLayout from '@ui/layout/app_layout';
import { allReceipts } from '@data/receipts';
import { sortReceiptsByOutput } from '@data/receipts/sort';
import { images } from '@data/items/images';
import { aicProducts } from '@data/items/aic';
import { naturalItems } from '@data/items/natural';
import { Receipt } from '@data/receipts/type';
import {
  Box,
  Typography,
  Stack,
  Avatar,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Page() {
  const allItems = { ...naturalItems, ...aicProducts };
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
        {Object.entries(groupedReceipts).map(([outputKey, recipes]) => {
          const firstRecipe = recipes[0];
          const remainingRecipes = recipes.slice(1);
          const hasMore = remainingRecipes.length > 0;

          return (
            <Paper key={outputKey} variant="outlined">
              {/* Always show the first recipe */}
              <Box sx={{ p: 2 }}>
                <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
                  {/* Inputs */}
                  <Stack direction="row" spacing={1} alignItems="center">
                    {firstRecipe.inputs.map((input, i) => (
                      <Stack key={i} direction="row" spacing={1} alignItems="center">
                        <Avatar
                          src={images[input.item]}
                          alt={allItems[input.item]}
                          variant="square"
                          sx={{ width: 32, height: 32 }}
                        />
                        <Box>
                          <Typography variant="body2" noWrap>
                            {allItems[input.item]}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {input.perMin}/min
                          </Typography>
                        </Box>
                        {i < firstRecipe.inputs.length - 1 && (
                          <Typography variant="body2" color="text.secondary">
                            +
                          </Typography>
                        )}
                      </Stack>
                    ))}
                  </Stack>

                  {/* Arrow */}
                  <ArrowForwardIcon color="action" />

                  {/* Outputs */}
                  <Stack direction="row" spacing={1} alignItems="center">
                    {firstRecipe.outputs.map((output, i) => (
                      <Stack key={i} direction="row" spacing={1} alignItems="center">
                        <Avatar
                          src={images[output.item]}
                          alt={allItems[output.item]}
                          variant="square"
                          sx={{ width: 32, height: 32 }}
                        />
                        <Box>
                          <Typography variant="body2" noWrap>
                            {allItems[output.item]}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {output.perMin}/min
                          </Typography>
                        </Box>
                        {i < firstRecipe.outputs.length - 1 && (
                          <Typography variant="body2" color="text.secondary">
                            +
                          </Typography>
                        )}
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Box>

              {/* Show remaining recipes in accordion if there are more */}
              {hasMore && (
                <Accordion
                  defaultExpanded={false}
                  sx={{ boxShadow: 'none', '&:before': { display: 'none' } }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="body2" color="text.secondary">
                      其他配方({remainingRecipes.length})
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack spacing={1}>
                      {remainingRecipes.map((recipe, idx) => (
                        <Paper key={idx} variant="outlined" sx={{ p: 2 }}>
                          <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
                            {/* Inputs */}
                            <Stack direction="row" spacing={1} alignItems="center">
                              {recipe.inputs.map((input, i) => (
                                <Stack key={i} direction="row" spacing={1} alignItems="center">
                                  <Avatar
                                    src={images[input.item]}
                                    alt={allItems[input.item]}
                                    variant="square"
                                    sx={{ width: 32, height: 32 }}
                                  />
                                  <Box>
                                    <Typography variant="body2" noWrap>
                                      {allItems[input.item]}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                      {input.perMin}/min
                                    </Typography>
                                  </Box>
                                  {i < recipe.inputs.length - 1 && (
                                    <Typography variant="body2" color="text.secondary">
                                      +
                                    </Typography>
                                  )}
                                </Stack>
                              ))}
                            </Stack>

                            {/* Arrow */}
                            <ArrowForwardIcon color="action" />

                            {/* Outputs */}
                            <Stack direction="row" spacing={1} alignItems="center">
                              {recipe.outputs.map((output, i) => (
                                <Stack key={i} direction="row" spacing={1} alignItems="center">
                                  <Avatar
                                    src={images[output.item]}
                                    alt={allItems[output.item]}
                                    variant="square"
                                    sx={{ width: 32, height: 32 }}
                                  />
                                  <Box>
                                    <Typography variant="body2" noWrap>
                                      {allItems[output.item]}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                      {output.perMin}/min
                                    </Typography>
                                  </Box>
                                  {i < recipe.outputs.length - 1 && (
                                    <Typography variant="body2" color="text.secondary">
                                      +
                                    </Typography>
                                  )}
                                </Stack>
                              ))}
                            </Stack>
                          </Stack>
                        </Paper>
                      ))}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              )}
            </Paper>
          );
        })}
      </Stack>
    </AppLayout>
  );
}
