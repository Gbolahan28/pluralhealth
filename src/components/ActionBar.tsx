// src/components/ActionBar.tsx
import React from "react";
import {
  Box,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const ActionBar = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f8f9ff",
        borderBottom: "1px solid #e0e0ff",
        py: 6,
        px: { xs: 3, sm: 5, md: 8, lg: 10 },
      }}
    >
      {/* ─────── Centered Search Bar ─────── */}
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

      {/* ─────── Buttons Row – Aligned with Header (Logo & Avatar) ─────── */}
      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          px: { xs: 3, sm: 5, md: 8, lg: 10 },
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
                width: 28,
                height: 28,
                borderRadius: "50%",
                bgcolor: "#0b0c7d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ml: 1.5,
              }}
            >
              <AddIcon sx={{ fontSize: 18, color: "white" }} />
            </Box>
          }
          sx={{
            height: 52,
            px: 4,
            borderRadius: 3,
            bgcolor: "#4a5bff",
            color: "white",
            fontWeight: 600,
            fontSize: "15px",
            textTransform: "none",
            boxShadow: "0 4px 16px rgba(74, 91, 255, 0.3)",
            "&:hover": {
              bgcolor: "#3b4cff",
            },
          }}
        >
          Add new patient
        </Button>

        <Button
          variant="contained"
          endIcon={
            <Box
              sx={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                bgcolor: "#0b0c7d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ml: 1.5,
              }}
            >
              <AddIcon sx={{ fontSize: 18, color: "white" }} />
            </Box>
          }
          sx={{
            height: 52,
            px: 4,
            borderRadius: 3,
            bgcolor: "#4a5bff",
            color: "white",
            fontWeight: 600,
            fontSize: "15px",
            textTransform: "none",
            boxShadow: "0 4px 16px rgba(74, 91, 255, 0.3)",
            "&:hover": {
              bgcolor: "#3b4cff",
            },
          }}
        >
          Create appointment
        </Button>
      </Box>

      {/* ─────── Bottom Section: Appointments Title + Filters + Pagination ─────── */}
      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          px: { xs: 3, sm: 5, md: 8, lg: 10 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left: Title + Dropdowns */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography
            sx={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              color: "#1f2937",
            }}
          >
            Appointments
          </Typography>

          <Select
            defaultValue="all"
            size="small"
            IconComponent={KeyboardArrowDownIcon}
            sx={{
              minWidth: 140,
              fontSize: "14px",
              fontWeight: 500,
              color: "#4a5bff",
              "& .MuiSelect-icon": { color: "#4a5bff" },
            }}
          >
            <MenuItem value="all">All clinics</MenuItem>
          </Select>

          <Select
            defaultValue="sort"
            size="small"
            startAdornment={
              <KeyboardArrowDownIcon sx={{ mr: 1, color: "#4a5bff" }} />
            }
            sx={{
              minWidth: 120,
              fontSize: "14px",
              fontWeight: 500,
              color: "#4a5bff",
            }}
          >
            <MenuItem value="sort">Sort by</MenuItem>
          </Select>
        </Box>

        {/* Right: Pagination Info */}
        <Typography
          sx={{
            fontFamily: "Satoshi, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            color: "#6b7280",
          }}
        >
          1 – 20 of 197
        </Typography>
      </Box>
    </Box>
  );
};
