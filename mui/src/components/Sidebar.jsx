import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  AccountBox,
  Article,
  Group,
  HomeRounded,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";

const responsiveStyle = {
  display: { sm: "none", md: "block" },
};

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          {/* Homepage */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <HomeRounded />
              </ListItemIcon>
              <ListItemText sx={responsiveStyle} primary="Homepage" />
            </ListItemButton>
          </ListItem>
          {/* Pages */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText sx={responsiveStyle} primary="Pages" />
            </ListItemButton>
          </ListItem>
          {/* Groups */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText sx={responsiveStyle} primary="Groups" />
            </ListItemButton>
          </ListItem>
          {/* Marketplace */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText sx={responsiveStyle} primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          {/* Friends */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText sx={responsiveStyle} primary="Friends" />
            </ListItemButton>
          </ListItem>
          {/* Setting */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText sx={responsiveStyle} primary="Setting" />
            </ListItemButton>
          </ListItem>
          {/* Profile */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText sx={responsiveStyle} primary="Profile" />
            </ListItemButton>
          </ListItem>
          {/* Switch */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
