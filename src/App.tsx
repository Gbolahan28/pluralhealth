import React from "react";
import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { ActionBar } from "./components/ActionBar";
import { PaginationControls } from "./components/PaginationControl";
import { AppointmentsTable } from "./components/AppointmentsTable";


function App() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f9fafb" }}>
      <Header />
      <ActionBar />
      <AppointmentsTable/>
      <PaginationControls count={10} />
    </Box>
  );
}

export default App;
