import React, { useState, useMemo } from 'react';
import './appbar.css';
import { NavLink, Outlet } from 'react-router-dom';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
  Switch,
  useMediaQuery,
} from '@mui/material';
import {
  Dashboard,
  Layers,
  BarChart,
  Group,
  People,
  Campaign,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import sunIcon from '../assets/sun.png';
import moonIcon from '../assets/moon.png';

const drawerWidth = 280;

const menuItems = [
  { text: 'Overview', icon: <Dashboard />, path: '/' },
  { text: 'Projects', icon: <Layers />, path: '/projects' },
  { text: 'Sales', icon: <BarChart />, path: '/sales' },
  { text: 'Team', icon: <Group />, path: '/team' },
  { text: 'Users', icon: <People />, path: '/users' },
  { text: 'Clients', icon: <People />, path: '/clients' },
  { text: 'Marketing', icon: <Campaign />, path: '/marketing' },
];

export default function AppBarWithSidebar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: { main: '#3f51b5' },
          secondary: { main: '#f50057' },
          background: {
            default: darkMode ? '#121212' : '#f5f7fa',
            paper: darkMode ? '#1e1e1e' : '#ffffff',
          },
        },
        shape: { borderRadius: 12 },
        typography: { 
          fontFamily: "'Inter', sans-serif", 
          h6: { fontWeight: 600 },
          body1: {
            color: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'
          }
        },
        components: {
          MuiDrawer: {
            styleOverrides: {
              paper: {
                width: drawerWidth,
                borderRight: 'none',
                boxShadow: '2px 0 15px rgba(0,0,0,0.05)',
                backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
              },
            },
          },
          MuiListItemButton: {
            styleOverrides: {
              root: {
                borderRadius: 10,
                margin: '4px 8px',
                '&.active': {
                  backgroundColor: darkMode
                    ? 'rgba(63,81,181,0.3)'
                    : 'rgba(63,81,181,0.1)',
                },
                '&.active:hover': {
                  backgroundColor: darkMode
                    ? 'rgba(63,81,181,0.4)'
                    : 'rgba(63,81,181,0.15)',
                },
                '&:hover': {
                  backgroundColor: darkMode
                    ? 'rgba(255, 255, 255, 0.08)'
                    : 'rgba(0, 0, 0, 0.04)',
                },
              },
            },
          },
        },
      }),
    [darkMode]
  );

  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const handleDrawerToggle = () => setMobileOpen((open) => !open);
  const toggleDarkMode = () => setDarkMode((m) => !m);

  const drawer = (
    <Box className="sidebar">
      <Toolbar className="sidebar-header" sx={{ backgroundColor: theme.palette.primary.main }}>
        <Typography variant="h6" noWrap sx={{ color: '#fff' }}>
          My Dashboard
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map(({ text, icon, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={NavLink}
              to={path}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <ListItemIcon className="list-icon" sx={{ color: 'inherit' }}>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"
          className="appbar"
          sx={{
            zIndex: theme.zIndex.drawer + 1,
            bgcolor: darkMode ? 'rgba(26,26,26,0.8)' : 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: `1px solid ${
              darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'
            }`,
            boxShadow: 'none',
          }}
        >
          <Toolbar className="toolbar">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {!isMdUp && (
                <IconButton
                  color="inherit"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ color: 'text.primary' }}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <Typography variant="h6" noWrap sx={{ color: 'text.primary' }}>
                Dashboard
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <img 
                src={sunIcon} 
                alt="Light mode" 
                className={`theme-icon ${!darkMode ? 'active' : ''}`} 
                style={{ width: 20, height: 20, opacity: darkMode ? 0.5 : 1 }}
              />
              <Switch 
                checked={darkMode} 
                onChange={toggleDarkMode} 
                color="primary" 
                sx={{
                  '& .MuiSwitch-switchBase': {
                    '&.Mui-checked': {
                      color: theme.palette.primary.main,
                      '& + .MuiSwitch-track': {
                        backgroundColor: theme.palette.primary.main,
                      },
                    },
                  },
                }}
              />
              <img 
                src={moonIcon} 
                alt="Dark mode" 
                className={`theme-icon ${darkMode ? 'active' : ''}`} 
                style={{ width: 20, height: 20, opacity: darkMode ? 1 : 0.5 }}
              />
            </Box>
          </Toolbar>
        </AppBar>

        <Box
          component="nav"
          sx={{
            width: { md: drawerWidth },
            flexShrink: { md: 0 },
          }}
        >
          <Drawer
            variant={isMdUp ? 'permanent' : 'temporary'}
            open={isMdUp ? true : mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', md: 'block' },
              '& .MuiDrawer-paper': { 
                boxSizing: 'border-box', 
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: 'background.default',
            minHeight: '100vh',
            ml: { md: `${drawerWidth}px` },
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            p: 3,
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}