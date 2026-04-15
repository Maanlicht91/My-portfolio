import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ProfilePic from "../images/me.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../utility/fonts";

import ProjectFrame from "../images/project-frame.png";
import GsLogo from "../images/gs.jpg";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";

import { projects } from "../utility/myProjects";

function Projects() {
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
            Projects
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
            - Some of the things I’ve built -
          </Typography>
        </ThemeProvider>
      </Stack>

      <Grid
        container
        spacing={1}
        rowSpacing={1}
        sx={{ color: "white", marginLeft: 30, marginTop: 10 }}
      >
        {projects &&
          projects.map((project) => (
            <Grid size={4} key={project.id}>
              <Card
                sx={{
                  backgroundImage: `url(${ProjectFrame})`,
                  backgroundSize: "400px",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "transparent",
                  height: 600,
                }}
              >
                <CardContent>
                  <Typography
                    color="#d7b262"
                    sx={{
                      fontFamily: "Macondo, sans-serif",
                      fontSize: 20,
                      textAlign: "center",
                      textTransform: "uppercase",
                      marginTop: 2,
                      marginBottom: 2,
                      width: "360px",
                    }}
                  >
                    {project.title}
                  </Typography>
                  <CardMedia
                    component="img"
                    image={GsLogo}
                    height={200}
                    sx={{ width: "360px" }}
                  />
                  <Typography
                    color="white"
                    sx={{
                      fontFamily: "Iceberg, sans-serif",
                      fontSize: 18,
                      marginTop: 2,
                      width: 350,
                      textAlign: "center",
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Typography
                    color="#c96c6c"
                    sx={{
                      fontFamily: "Iceberg, sans-serif",
                      fontSize: 18,
                      marginTop: 2,
                      width: 350,
                      textAlign: "center",
                    }}
                  >
                    {project.tool}
                  </Typography>
                </CardContent>
                <CardActions>
                  <a href={project.link} target="_blank">
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#5c5858",
                        color: "#d7b262",
                        fontWeight: "bold",
                        fontFamily: "Iceberg, sans-serif",
                        width: "200px",
                        margin: 11,
                      }}
                    >
                      Github
                    </Button>
                  </a>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default Projects;
