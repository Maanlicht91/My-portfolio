import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FitbitIcon from "@mui/icons-material/Fitbit";

import { backend, frontend, tools } from "../utility/myTechs";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../utility/fonts";
function About() {
  return (
    <div>
      <Stack sx={{ marginTop: 3 }}>
        <ThemeProvider theme={theme}>
          <Typography
            color="white"
            sx={{
              fontFamily: "Ephesis, sans-serif",
              fontSize: 50,
              textAlign: "center",
            }}
          >
            About me
          </Typography>

          <Typography
            color="#c4c4c4"
            sx={{
              fontFamily: "Iceberg, sans-serif",
              fontSize: 18,
              lineHeight: 2,

              fontStyle: "italic",
              fontWeight: 100,
              textAlign: "center",
            }}
          >
            - I am coding my dreams -
          </Typography>
        </ThemeProvider>
      </Stack>
      <Stack
        flexDirection="row"
        justifyContent="space-around"
        sx={{ width: "100%" }}
      >
        <Box sx={{ marginTop: 10, marginLeft: 10, width: 550 }}>
          <Typography
            color="white"
            sx={{
              fontFamily: "Delius, sans-serif",
              fontSize: 18,
              lineHeight: 2,
              marginTop: 2,
              marginBottom: 4,
            }}
          >
            Before transitioning into software development, I worked as an
            English teacher for 9 years. This experience helped me develop
            strong communication, problem-solving, and teaching skills, which I
            now apply when building and explaining technical solutions. About Me
            I am a backend-focused full stack developer who enjoys building
            scalable and well-structured web applications. I have experience
            working with <span className="spans">Node.js, Express,</span> and
            <span className="spans"> MongoDB, </span>
            creating <span className="spans">RESTful APIs,</span> implementing
            authentication systems, and designing clean backend architectures.
            On the frontend, I use <span className="spans">React</span> and
            <span className="spans"> Material UI</span> to build simple,
            user-friendly interfaces. Currently, I am focused on improving my
            backend skills and building real-world projects.
          </Typography>
        </Box>
        <Box sx={{ marginTop: 8, marginLeft: 10, width: 550 }}>
          <Stack>
            <Box sx={{ marginLeft: "-70px" }}>
              <Typography
                color="#d7b262"
                sx={{
                  fontFamily: "Macondo, sans-serif",
                  fontSize: 40,
                  marginTop: 2,
                }}
              >
                <FitbitIcon /> Backend Tech
              </Typography>

              {backend &&
                backend.map((tech) => (
                  <Tooltip title={tech.title} key={tech.id}>
                    <IconButton>
                      <img src={tech.icon} alt="techs" className="icons" />
                    </IconButton>
                  </Tooltip>
                ))}
            </Box>
            <Box sx={{ marginLeft: "20px" }}>
              <Typography
                color="#d7b262"
                sx={{
                  fontFamily: "Macondo, sans-serif",
                  fontSize: 40,
                  marginTop: 2,
                }}
              >
                <FitbitIcon /> Frontend Tech
              </Typography>

              {frontend &&
                frontend.map((tech) => (
                  <Tooltip title={tech.title} key={tech.id}>
                    <IconButton>
                      <img src={tech.icon} alt="techs" className="icons" />
                    </IconButton>
                  </Tooltip>
                ))}
            </Box>
            <Box sx={{ marginLeft: "110px" }}>
              <Typography
                color="#d7b262"
                sx={{
                  fontFamily: "Macondo, sans-serif",
                  fontSize: 40,
                  marginTop: 2,
                }}
              >
                <FitbitIcon /> Tools
              </Typography>

              {tools &&
                tools.map((tool) => (
                  <Tooltip title={tool.title} key={tool.id}>
                    <IconButton>
                      <img src={tool.icon} alt="techs" className="icons" />
                    </IconButton>
                  </Tooltip>
                ))}
            </Box>
          </Stack>
        </Box>
      </Stack>
    </div>
  );
}

export default About;
