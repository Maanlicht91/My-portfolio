import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Box";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../utility/fonts";

function Contact() {
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
            Get in Touch
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
            - Feel free to reach out if you want to collaborate or just say
            hello.-
          </Typography>
        </ThemeProvider>
      </Stack>
      <Stack
        flexDirection="row"
        justifyContent="space-around"
        alignContent="center"
      >
        <Stack sx={{ boxShadow: "0px 1px 10px 1px #313131", padding: 3 }}>
          <Box sx={{ marginTop: 2 }}>
            <img
              src="/contacts/github.jpg"
              style={{ width: 130, opacity: "50%" }}
            />
          </Box>
          <Box sx={{ marginTop: 2 }}>
            <img src="/contacts/github.jpg" style={{ width: 100 }} />
          </Box>
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Box
            sx={{
              marginTop: 5,
            }}
          >
            <Tooltip title="That's my dream 😊">
              <Typography
                color="#c96c6c"
                sx={{
                  fontFamily: "Iceberg, sans-serif",
                  fontSize: 18,
                  lineHeight: 2,
                  fontStyle: "italic",
                  fontWeight: 100,
                  textAlign: "center",
                  marginBottom: 6,
                  border: "1px solid #c96c6c",
                }}
              >
                I’m open to internship and junior opportunities.
              </Typography>
            </Tooltip>
            <TextField
              focused
              id="standard-basic"
              placeholder="Your name"
              variant="standard"
              sx={{
                "& .MuiInputBase-input": { color: "white" },
                "& .MuiInputLabel-root": { color: "green" },
                "& .MuiInput-root": {
                  "&::after": { borderBottom: "2px solid #d7b262" }, // Hover
                },
                width: "400px",
              }}
            />
          </Box>
          <Box>
            <TextField
              focused
              id="standard-basic"
              placeholder="Write me whatever you want"
              variant="outlined"
              multiline
              sx={{
                width: "400px",
                marginTop: 4,
                "& .MuiInputBase-input": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "grey" },
                  "&:hover fieldset": { borderColor: "black" },
                  "&.Mui-focused fieldset": { borderColor: "#d7b262" },
                },
              }}
              rows={6}
            />
          </Box>
          <Box>
            <Button sx={{ color: "#c96c6c" }}>
              <Typography
                sx={{
                  fontFamily: "Macondo, sans-serif",
                  fontSize: 20,
                  marginTop: 2,
                }}
              >
                Submit
              </Typography>
            </Button>
          </Box>
        </Stack>
        <Stack>
          <Box>
            <img src="/contacts/github.jpg" style={{ width: 100 }} />
          </Box>
        </Stack>
      </Stack>
    </div>
  );
}

export default Contact;
