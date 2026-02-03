import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import type { Receipt } from '@receipts/generated/receipts';
import { RecipeItem } from '@ui/recipe/recipe_item';

type RecipeGroupProps = {
  recipes: Receipt[];
  searchQuery: string;
};

export function RecipeGroup({ recipes, searchQuery }: RecipeGroupProps) {
  const [firstRecipe, ...remainingRecipes] = recipes;
  const hasMore = remainingRecipes.length > 0;

  return (
    <Paper variant="outlined">
      {/* Always show the first recipe */}
      <Box sx={{ p: 2 }}>
        <RecipeItem recipe={firstRecipe} searchQuery={searchQuery} />
      </Box>

      {/* Show remaining recipes in accordion if there are more */}
      {hasMore && (
        <Accordion defaultExpanded={false}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="body2" color="text.secondary">
              其他配方({remainingRecipes.length})
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={1}>
              {remainingRecipes.map((recipe, idx) => (
                <Paper key={idx} variant="outlined" sx={{ p: 2 }}>
                  <RecipeItem recipe={recipe} searchQuery={searchQuery} />
                </Paper>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
      )}
    </Paper>
  );
}
