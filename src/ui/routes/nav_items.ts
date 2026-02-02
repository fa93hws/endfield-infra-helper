export type RouteKind = 'items' | 'receipts' | 'calculator';

export const routes: Record<RouteKind, string> = {
  items: '/',
  receipts: '/receipts',
  calculator: '/calculator',
};

export const navItems: Record<RouteKind, string> = {
  items: '首页',
  receipts: '配方',
  calculator: '计算器',
};
