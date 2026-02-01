import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@mui/material'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'contained', 'outlined'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'contained',
    color: 'secondary',
    children: 'Secondary Button',
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    children: 'Outlined Button',
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
    color: 'primary',
    children: 'Text Button',
  },
}

export const Large: Story = {
  args: {
    variant: 'contained',
    size: 'large',
    children: 'Large Button',
  },
}

export const Small: Story = {
  args: {
    variant: 'contained',
    size: 'small',
    children: 'Small Button',
  },
}
