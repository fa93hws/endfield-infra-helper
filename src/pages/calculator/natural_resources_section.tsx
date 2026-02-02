import { Stack, Paper, Typography } from '@mui/material';
import NaturalResourceItem from './natural_resource_item';
import { NaturalItemKey } from '@data/items/natural';

interface NaturalResourcesSectionProps {
  naturalResources: Map<NaturalItemKey, number>;
}

export default function NaturalResourcesSection({
  naturalResources,
}: NaturalResourcesSectionProps) {
  const resources = Array.from(naturalResources.entries()).sort((a, b) => a[0].localeCompare(b[0]));

  if (resources.length === 0) {
    return (
      <Paper variant="outlined" sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          所需自然资源
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
        所需自然资源 ({resources.length})
      </Typography>
      <Stack spacing={1.5}>
        {resources.map(([item, quantity]) => (
          <NaturalResourceItem key={item} item={item} quantity={quantity} />
        ))}
      </Stack>
    </Paper>
  );
}
