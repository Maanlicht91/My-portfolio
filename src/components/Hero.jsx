import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ProfilePic from "../images/me.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../utility/fonts";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <section id="Home">
      <Stack
        flexDirection="row"
        justifyContent="space-around"
        sx={{ width: "100%" }}
      >
        <Box sx={{ marginTop: 25, marginLeft: 10, width: 550 }}>
          <ThemeProvider theme={theme}>
            <Typography
              color="white"
              sx={{ fontFamily: "Ephesis, sans-serif", fontSize: 30 }}
            >
              Aynur Demir
            </Typography>
            <Typography
              color="#d7b262"
              sx={{
                fontFamily: "Macondo, sans-serif",
                fontSize: 40,
                marginTop: 2,
              }}
            >
              Your go-to Full Stack Developer for Web Applications
            </Typography>
            <Typography
              color="white"
              sx={{
                fontFamily: "Iceberg, sans-serif",
                fontSize: 18,
                lineHeight: 2,
                marginTop: 2,
              }}
            >
              I build scalable and efficient web applications using Node.js,
              Express, and MongoDB. From designing robust APIs to creating clean
              user interfaces, I focus on performance, structure, and real-world
              solutions.
            </Typography>
            <hr />
            <Typography
              color="#c4c4c4"
              sx={{
                fontFamily: "Iceberg, sans-serif",
                fontSize: 18,
                lineHeight: 2,
                marginTop: 2,
                fontStyle: "italic",
                fontWeight: 100,
              }}
            >
              - Currently improving my skills in building scalable backend
              systems and modern React applications.
            </Typography>
            <Stack
              flexDirection="row"
              gap="1rem"
              alignContent="center"
              sx={{ marginTop: 2 }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#d7b262",
                  color: "black",
                  fontFamily: "Segoe UI, sans-serif",
                  fontWeight: "bold",
                  height: 45,
                }}
                onClick={() => setIsContactOpen(!isContactOpen)}
              >
                Contact Me
              </Button>
              <Box
                sx={{
                  color: "white",
                  display: "flex",
                  opacity: isContactOpen ? "100%" : "0",
                  gap: "0.1rem",
                  transition: isContactOpen
                    ? "opacity 1s ease-in"
                    : "opacity 1s ease-out",
                  height: 45,
                }}
              >
                <ArrowForwardIosIcon
                  sx={{ fontSize: 30, padding: "0.8rem 10px" }}
                />
                <IconButton>
                  <a href="https://github.com/Maanlicht91" target="_blank">
                    <GitHubIcon
                      sx={{
                        fontSize: 40,
                        color: "white",
                        ":hover": {
                          color: "#d7b262",
                          boxShadow: "0px 2px #d7b262",
                        },
                        boxShadow: "0px 2px 15px lightgray",
                        transition: "ease-in-out 0.5s",
                      }}
                    />
                  </a>
                </IconButton>
                <IconButton>
                  <a
                    href="https://www.linkedin.com/in/aynur-demir-a2a819134/"
                    target="_blank"
                  >
                    <LinkedInIcon
                      sx={{
                        fontSize: 43,
                        color: "white",
                        ":hover": {
                          color: "#d7b262",
                          boxShadow: "0px 2px #d7b262",
                        },
                        boxShadow: "0px 2px 15px lightgray",
                        transition: "ease-in-out 0.5s",
                      }}
                    />
                  </a>
                </IconButton>
                <IconButton>
                  <a href="https://x.com/MaanLiCht91" target="_blank">
                    <XIcon
                      sx={{
                        fontSize: 40,
                        color: "white",
                        ":hover": {
                          color: "#d7b262",
                          boxShadow: "0px 2px #d7b262",
                        },
                        boxShadow: "0px 2px 15px lightgray",
                        transition: "ease-in-out 0.5s",
                      }}
                    />
                  </a>
                </IconButton>
                <IconButton>
                  <a href="https://www.instagram.com/aynur91" target="_blank">
                    <InstagramIcon
                      sx={{
                        fontSize: 42,
                        color: "white",
                        ":hover": {
                          color: "#d7b262",
                          boxShadow: "0px 2px #d7b262",
                        },
                        boxShadow: "0px 2px 15px lightgray",
                        transition: "ease-in-out 0.5s",
                      }}
                    />
                  </a>
                </IconButton>
                <IconButton>
                  <a href="mailto:aynurdemir1991@hotmail.com" target="_blank">
                    <EmailIcon
                      sx={{
                        fontSize: 42,
                        color: "white",
                        ":hover": {
                          color: "#d7b262",
                          boxShadow: "0px 2px #d7b262",
                        },
                        boxShadow: "0px 2px 15px lightgray",
                        transition: "ease-in-out 0.5s",
                      }}
                    />
                  </a>
                </IconButton>
              </Box>
            </Stack>
          </ThemeProvider>
        </Box>
        <Box sx={{ marginTop: 1, marginLeft: 5 }}>
          <img src={ProfilePic} className="hero-picture" />
        </Box>
      </Stack>
    </section>
  );
}

export default Hero;
