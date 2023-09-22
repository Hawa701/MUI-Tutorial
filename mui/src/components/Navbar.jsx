import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  InputBase,
  Box,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Nightlife, Email, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledSearch = styled("div")((theme) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "5px",
  width: "40%",
}));

const StyledIcons = styled(Box)((theme) => ({
  display: "flex",
  alignItems: "center",
  gap: 20,
}));

const Navbar = () => {
  const [open, setOpen] = useState("false");

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Interact
        </Typography>
        <Nightlife sx={{ display: { xs: "block", sm: "none" } }} />

        <StyledSearch>
          <InputBase placeholder="Search here..." />
        </StyledSearch>

        <StyledIcons>
          <Badge
            badgeContent={4}
            color="error"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Email />
          </Badge>
          <Badge
            badgeContent={4}
            color="error"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Notifications />
          </Badge>
          <Avatar
            onClick={(e) => {
              setOpen(true);
            }}
          >
            H
          </Avatar>
        </StyledIcons>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => {
          setOpen(false);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
