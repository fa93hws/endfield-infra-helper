import AppLayout from '@ui/layout/app_layout';
import { images } from '@data/items/images';

export default function Page() {
  return (
    <AppLayout current="home">
      <h1>Hello World</h1>
      <img src={images.buckflowerSeed} alt="Buckflower Seed" />
    </AppLayout>
  );
}
