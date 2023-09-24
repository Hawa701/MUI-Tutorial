import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Stack, createTheme } from "@mui/material/";
import Add from "./components/Add";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

function App() {
  // const [mode, setMode] = useState("dark");

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: { mode },
  //   },
  // });

  return (
    // <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"Background.default"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
    // </ThemeProvider>
  );
}

export default App;
