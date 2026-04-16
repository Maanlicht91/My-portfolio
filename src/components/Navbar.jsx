import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Logo from "../images/logo.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../utility/fonts";

function Navbar() {
  const pages = ["Home", "Projects", "About", "Contact"];

  const [anchorElNav, setAnchorElNav] = useState(false);

  const handleOpenNavMenu = () => {
    setAnchorElNav(!anchorElNav);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(false);
  };

  return (
    <div style={{ marginBottom: 60 }}>
      <AppBar
        position="fixed"
        component="nav"
        sx={{
          height: 50,
          backgroundColor: "black",
          width: { xs: 390, md: "100%" },
          right: { xs: "auto", md: 0 },
        }}
      >
        <Stack flexDirection="row" justifyContent="space-between">
          <Box sx={{ marginLeft: 10, display: { xs: "none", md: "flex" } }}>
            <img src={Logo} className="logo-img" />
            <span className="logo-text">Aynur Demir</span>
          </Box>
          <Box sx={{ marginRight: 10 }}>
            {pages.map((page) => (
              <a href={`#${page}`}>
                <ThemeProvider theme={theme} key={page}>
                  <Button
                    key={page}
                    sx={{
                      display: {
                        xs: "none",
                        md: "inline-block",
                      },
                      fontFamily: "Macondo",
                      textTransform: "capitalize",
                      fontSize: 20,
                      color: "#fff",
                      ":hover": { color: "#d7b262" },
                    }}
                  >
                    {page}
                  </Button>
                </ThemeProvider>
              </a>
            ))}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 0 }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ p: 0 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "inline-block", md: "none" },
                width: { xs: 390, md: "auto" },
                mt: 1,
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{
                    backgroundColor: "black",
                    ":hover": { backgroundColor: "black" },
                  }}
                >
                  <ThemeProvider theme={theme} key={page}>
                    <a href={`#${page}`} style={{ textDecoration: "none" }}>
                      <Button
                        sx={{
                          textAlign: "center",
                          fontFamily: "Macondo",
                          textTransform: "capitalize",
                          fontSize: 20,
                          color: "#fff",
                          ":hover": {
                            color: "#d7b262",
                          },
                        }}
                      >
                        {page}
                      </Button>
                    </a>
                  </ThemeProvider>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Stack>
      </AppBar>
    </div>
  );
}

export default Navbar;
