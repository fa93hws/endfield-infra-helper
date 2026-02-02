import { useState, ReactNode } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { NavItem, NAV_ITEMS } from './nav_items';
import './global.css';

const drawerWidth = 240;

interface AppLayoutProps {
  children: ReactNode;
  title?: string;
  navItems?: NavItem[];
}

export default function AppLayout({
  children,
  title = 'My App',
  navItems = NAV_ITEMS,
}: AppLayoutProps) {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const drawer = (
    <Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton onClick={item.onClick}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
          ml: open ? `${drawerWidth}px` : 0,
          transition: 'width 0.3s, margin 0.3s',
        }}
      >
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Collapsible Drawer */}
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: 'margin 0.3s',
          marginLeft: open ? 0 : `-${drawerWidth}px`,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
