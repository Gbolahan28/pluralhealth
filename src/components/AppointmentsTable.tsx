import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { PatientRow } from "./PatientRow";
import { appointments } from "../data/appointments";

export const AppointmentsTable = () => {
  return (
    <Box sx={{ px: 3 }}>
      {/* Top bar: Title + filters */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Appointments
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Select defaultValue="all" size="small">
            <MenuItem value="all">All clinics</MenuItem>
          </Select>
          <Select defaultValue="date" size="small">
            <MenuItem value="date">Sort by</MenuItem>
          </Select>
          <Typography variant="body2" color="text.secondary">
            1 – 20 of 197
          </Typography>
        </Box>
      </Box>

      {/* Table */}
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ border: "1px solid #e0e0e0" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>#</strong>
              </TableCell>
              <TableCell>
                <strong>Patient Information</strong>
              </TableCell>
              <TableCell>
                <strong>Clinic</strong>
              </TableCell>
              <TableCell>
                <strong>Wallet bal. (₦)</strong>
              </TableCell>
              <TableCell>
                <strong>Time / Date</strong>
              </TableCell>
              <TableCell>
                <strong>Status</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((apt) => (
              <PatientRow key={apt.id} apt={apt} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
