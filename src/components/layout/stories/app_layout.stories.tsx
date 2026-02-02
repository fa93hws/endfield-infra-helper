import type { Meta, StoryObj } from '@storybook/react';
import AppLayout from '../app_layout';

const meta = {
  title: 'Components/AppLayout',
  component: AppLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'My App',
    navItems: [
      {
        label: 'Home',
      },
    ],
    children: <h1>Hello World</h1>,
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'Endfield Infra Helper',
    navItems: [
      {
        label: 'Home',
      },
      {
        label: 'Infrastructure',
      },
      {
        label: 'Monitoring',
      },
    ],
    children: (
      <div>
        <h1>Welcome to Endfield</h1>
        <p>Infrastructure management made easy.</p>
      </div>
    ),
  },
};
