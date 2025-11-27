import React from "react";
import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { ActionBar } from "./components/ActionBar";
import { PaginationControls } from "./components/PaginationControl";
import { AppointmentsTableFlex } from "./components/AppointmentsTableFlex";


function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f9fafb",
        width: "100vw",
        overflowX: "hidden",
        overflowY: "auto",
        p: 0,
        m: 0,
      }}
    >
      <Header />
      <ActionBar />
      <AppointmentsTableFlex />
      <PaginationControls count={10} />
    </Box>
  );
}

export default App;