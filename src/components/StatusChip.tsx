import React from "react";
import { Chip } from "@mui/material";

type StatusChipProps = {
  label: string;
  color:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
};

export const StatusChip = ({ label, color }: StatusChipProps) => {
  return <Chip label={label} color={color} size="small" />;
};
