export interface NavItem {
  label: string;
  onClick?: () => void;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
  },
];
