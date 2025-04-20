import React, { useState, useMemo, useEffect } from "react";
import "./appbar.css";
import { NavLink, Outlet } from "react-router-dom";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  Dashboard,
  Layers,
  BarChart,
  Group,
  People,
  Campaign,
  Menu as MenuIcon,
  WbSunny,
  DarkMode,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";

const drawerWidth = 280;

const menuItems = [
  { text: "Overview", icon: <Dashboard />, path: "/" },
  { text: "Projects", icon: <Layers />, path: "/projects" },
  { text: "Sales", icon: <BarChart />, path: "/sales" },
  { text: "Team", icon: <Group />, path: "/team" },
  { text: "Users", icon: <People />, path: "/users" },
  { text: "Clients", icon: <People />, path: "/clients" },
  { text: "Marketing", icon: <Campaign />, path: "/marketing" },
];

export default function AppBarWithSidebar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: "#3f51b5" },
          secondary: { main: "#f50057" },
          background: {
            default: darkMode ? "#121212" : "#f5f7fa",
            paper: darkMode ? "#1e1e1e" : "#ffffff",
          },
          text: { primary: darkMode ? "#ffffff" : "#000000" },
        },
        shape: { borderRadius: 12 },
        typography: {
          fontFamily: "'Inter', sans-serif",
          h6: { fontWeight: 600 },
          body1: {
            color: darkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)",
          },
        },
        components: {
          MuiDrawer: {
            styleOverrides: {
              paper: {
                width: drawerWidth,
                borderRight: "none",
                boxShadow: "2px 0 15px rgba(0,0,0,0.05)",
                backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
              },
            },
          },
          MuiListItemButton: {
            styleOverrides: {
              root: {
                borderRadius: 10,
                margin: "4px 8px",
                "&.active": {
                  backgroundColor: darkMode
                    ? "rgba(63,81,181,0.3)"
                    : "rgba(63,81,181,0.1)",
                },
                "&.active:hover": {
                  backgroundColor: darkMode
                    ? "rgba(63,81,181,0.4)"
                    : "rgba(63,81,181,0.15)",
                },
                "&:hover": {
                  backgroundColor: darkMode
                    ? "rgba(255, 255, 255, 0.08)"
                    : "rgba(0, 0, 0, 0.04)",
                },
              },
            },
          },
        },
      }),
    [darkMode]
  );

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box className="sidebar">
      <Toolbar
        className="sidebar-header"
        sx={{ backgroundColor: theme.palette.background.paper }}
      >
        <Typography variant="h6" noWrap sx={{ color: "text.primary" }}>
          My Dashboard
        </Typography>
      </Toolbar>
      <List>
        {menuItems.map(({ text, icon, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={NavLink}
              to={path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <ListItemIcon className="list-icon" sx={{ color: "inherit" }}>
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
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          className="appbar"
          sx={{
            zIndex: theme.zIndex.drawer + 1,
            bgcolor: theme.palette.background.paper,
            backdropFilter: "blur(10px)",
            boxShadow: "none",
            transition: "background-color 0.3s ease",
          }}
        >
          <Toolbar className="toolbar">
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {!isMdUp && (
                <IconButton
                  color="inherit"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ color: "text.primary" }}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <Typography variant="h6" noWrap sx={{ color: "text.primary" }}>
                Dashboard
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, ml: "auto" }}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <IconButton
                  onClick={() => setDarkMode(!darkMode)}
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    background: darkMode
                      ? "linear-gradient(145deg, #2e2e2e, #1c1c1c)"
                      : "linear-gradient(145deg, #fff, #e6e6e6)",
                    boxShadow: darkMode
                      ? "4px 4px 10px #141414, -4px -4px 10px #2a2a2a"
                      : "4px 4px 10px #d1d9e6, -4px -4px 10px #ffffff",
                    color: darkMode ? "#FFF59D" : "#FFB300",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  {darkMode ? <DarkMode /> : <WbSunny />}
                </IconButton>
              </motion.div>
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
            variant={isMdUp ? "permanent" : "temporary"}
            open={isMdUp ? true : mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", md: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
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
            bgcolor: "background.default",
            minHeight: "100vh",
            ml: { md: `${drawerWidth}px` },
            transition: theme.transitions.create("margin", {
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