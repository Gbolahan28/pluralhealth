import React, { useState } from "react";
import {
  Box,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { AddPatientModal } from "../modals/AddPatientModal";
import { CreateAppointmentModal } from "../modals/CreateAppointmentModal";

export const ActionBar = () => {
  const [clinic, setClinic] = React.useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);

  return (
    <Box
      sx={{
        bgcolor: "#f8f9ff",
        borderBottom: "1px solid #e0e0ff",
        pt: 6,
        px: 3,
        pb: 0,
      }}
    >
      <Box sx={{ maxWidth: 800, mx: "auto", mb: 5 }}>
        <OutlinedInput
          fullWidth
          placeholder="Find patient"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#9ca3af", fontSize: 22 }} />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton size="small">
                <FingerprintIcon sx={{ color: "#9ca3af", fontSize: 22 }} />
              </IconButton>
              <IconButton size="small">
                <FilterListIcon sx={{ color: "#9ca3af", fontSize: 22 }} />
              </IconButton>
            </InputAdornment>
          }
          sx={{
            height: 40,
            borderRadius: "10px",
            fontFamily: "Satoshi, sans-serif",
            fontSize: "15px",
            fontWeight: 500,
            bgcolor: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #e5e7eb",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#4a5bff",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#4a5bff",
              borderWidth: 2,
            },
            "& input::placeholder": {
              color: "#9ca3af",
              opacity: 1,
            },
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Button
          variant="contained"
          endIcon={
            <Box
              sx={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                bgcolor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AddIcon sx={{ fontSize: 14, color: "#0b0c7d" }} />
            </Box>
          }
          onClick={() => setModalOpen(true)}
          sx={{
            height: 48,
            px: 3,
            borderRadius: 3,
            bgcolor: "#0b0c7d",
            color: "white",
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 600,
            fontSize: "15px",
            textTransform: "none",
            minWidth: 200,
            boxShadow: "none",
            "&:hover": {
              bgcolor: "#090a5c",
              boxShadow: "none",
            },
          }}
        >
          Add new patient
        </Button>

        <AddPatientModal open={modalOpen} onClose={() => setModalOpen(false)} />

        <Button
          variant="contained"
          endIcon={
            <Box
              sx={{
                width: 20,
                height: 20,
                borderRadius: "4px",
                bgcolor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AddIcon sx={{ fontSize: 14, color: "#0b0c7d" }} />
            </Box>
          }
          onClick={() => setCreateOpen(true)}
          sx={{
            height: 48,
            px: 3,
            borderRadius: 3,
            bgcolor: "#0b0c7d",
            color: "white",
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 600,
            fontSize: "15px",
            textTransform: "none",
            minWidth: 220,
            boxShadow: "none",
            "&:hover": {
              bgcolor: "#090a5c",
              boxShadow: "none",
            },
          }}
        >
          Create appointment
        </Button>
      </Box>

      <CreateAppointmentModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography
            sx={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 700,
              fontSize: "18px",
              color: "#051438",
            }}
          >
            Appointments
          </Typography>

          <Select
            value={clinic}
            onChange={(e) => setClinic(e.target.value)}
            IconComponent={KeyboardArrowDownIcon}
            sx={{
              height: 36,
              minWidth: 130,
              fontFamily: "Satoshi, sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              color: "#051438",
              bgcolor: "transparent",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .MuiSelect-icon": {
                color: "#051438",
              },
            }}
          >
            <MenuItem value="all">All clinics</MenuItem>
            <MenuItem value="dental">Accident and Emergency</MenuItem>
            <MenuItem value="general">Neurology</MenuItem>
            <MenuItem value="general">Cardiology</MenuItem>
            <MenuItem value="general">Gastroenterology</MenuItem>
            <MenuItem value="general">Renal</MenuItem>
          </Select>

          <Button
            startIcon={<SwapVertIcon sx={{ fontSize: 18, color: "#0b0c7d" }} />}
            sx={{
              height: 36,
              px: 2,
              fontFamily: "Satoshi, sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              color: "#051438",
              textTransform: "none",
              bgcolor: "transparent",
              "&:hover": {
                bgcolor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            Sort by
          </Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            sx={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: "16px",
              fontWeight: 500,
              color: "#677597",
            }}
          >
            1 – 20 <span style={{ fontWeight: 500, color: "#051438" }}>of</span>{" "}
            197
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              size="small"
              sx={{
                width: 32,
                height: 32,
                border: "1px solid #e5e7eb",
                borderRadius: 1,
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <ChevronLeftIcon sx={{ fontSize: 18, color: "#051438" }} />
            </IconButton>

            <IconButton
              size="small"
              sx={{
                width: 32,
                height: 32,
                bgcolor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: 1,
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <ChevronRightIcon sx={{ fontSize: 18, color: "#051438" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
