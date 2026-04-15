import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Logo from "../images/logo.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../utility/fonts";

function Navbar() {
  const pages = ["Home", "Projects", "About", "Contact"];

  return (
    <div>
      <AppBar
        position="static"
        sx={{ height: 75, backgroundColor: "transparent", marginTop: 3 }}
      >
        <Stack flexDirection="row" justifyContent="space-between">
          <Box sx={{ marginLeft: 10 }}>
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
        </Stack>
      </AppBar>
    </div>
  );
}

export default Navbar;
