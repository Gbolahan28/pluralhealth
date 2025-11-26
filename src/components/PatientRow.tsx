import React from "react";
import {
  TableCell,
  TableRow,
  Avatar,
  Box,
  Typography,
  Chip,
} from "@mui/material";
import { StatusChip } from "./StatusChip";
import { Appointment } from "../data/appointments"; 

type PatientRowProps = {
  apt: Appointment;
};

export const PatientRow = ({ apt }: PatientRowProps) => {
  return (
    <TableRow hover>
      <TableCell>{apt.id}</TableCell>
      <TableCell>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar src={apt.photo} alt={apt.name} />
          <Box>
            <Typography fontWeight="medium">{apt.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {apt.hosId} • {apt.genderAge}
              {apt.isNew && (
                <Chip label="New" size="small" color="primary" sx={{ ml: 1 }} />
              )}
            </Typography>
          </Box>
        </Box>
      </TableCell>
      <TableCell>
        <Chip label={apt.clinic} variant="outlined" size="small" />
      </TableCell>
      <TableCell>{apt.walletBal}</TableCell>
      <TableCell>{apt.timeDate}</TableCell>
      <TableCell>
        <StatusChip label={apt.status} color={apt.statusColor} />
      </TableCell>
    </TableRow>
  );
};
