// src/components/modals/AddPatientModal.tsx
import React, { useState } from "react";
import {
  Box,
  Modal,
  Typography,
  IconButton,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Switch,
  FormControlLabel,
  Tooltip,
  Avatar,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

interface AddPatientModalProps {
  open: boolean;
  onClose: () => void;
}

export const AddPatientModal = ({ open, onClose }: AddPatientModalProps) => {
  const [isNewPatient, setIsNewPatient] = useState(true);

  return (
    <Modal open={open} onClose={onClose} closeAfterTransition>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",

          // FIGMA PERFECT MODAL SIZING
          width: "92vw", // almost full width
          height: "90vh", // large modal height
          maxWidth: "1600px", // stops it from being too wide on large screens
          maxHeight: "95vh", // ensures no overflow beyond viewport

          overflowY: "auto",
          bgcolor: "#FAFBFF",
          borderRadius: "20px", // Figma rounded edges
          boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
          p: 5,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <Box>
            <Typography variant="h5" fontWeight={700} color="#1F2937">
              Add new patient
            </Typography>
            <Typography variant="body2" color="#6B7280" mt={1}>
              Fill in the patient information in the fields provided below
            </Typography>
          </Box>
          <IconButton onClick={onClose} sx={{ mt: -1, mr: -2 }}>
            <CloseIcon sx={{ color: "#9CA3AF" }} />
          </IconButton>
        </Box>

        {/* Avatar + Buttons Row */}
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 4, mt: 4, mb: 3 }}
        >
          <Avatar
            sx={{
              width: 100,
              height: 100,
              bgcolor: "#D1D5DB",
              fontSize: 40,
              fontWeight: 600,
            }}
          >
            ?
          </Avatar>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              startIcon={<CameraAltIcon />}
              endIcon={<span style={{ marginLeft: 8 }}>▼</span>}
              sx={{
                bgcolor: "#4F46E5",
                color: "white",
                borderRadius: 3,
                textTransform: "none",
                px: 3,
                py: 1.5,
                fontWeight: 600,
              }}
            >
              Take patient’s picture
            </Button>
            <Button
              variant="contained"
              startIcon={<FingerprintIcon />}
              sx={{
                bgcolor: "#4F46E5",
                color: "white",
                borderRadius: 3,
                textTransform: "none",
                px: 3,
                py: 1.5,
                fontWeight: 600,
              }}
            >
              Add fingerprint
            </Button>
          </Box>
        </Box>

        <Typography
          variant="caption"
          color="#9CA3AF"
          sx={{ display: "block", mb: 4, ml: 18 }}
        >
          Patient picture should be updated by reception personnel
        </Typography>

        {/* Patient ID Row */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
          <Box sx={{ flex: 1 }} />
          <TextField
            label="Patient ID"
            value="HOSP98765433"
            disabled
            sx={{
              width: 280,
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "#1F2937",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <InfoOutlinedIcon sx={{ color: "#9CA3AF", fontSize: 18 }} />
                </InputAdornment>
              ),
            }}
          />
          <Tooltip
            title="If there is an existing Patient ID, input the patient’s existing ID into the field"
            arrow
            placement="top"
          >
            <Box
              sx={{
                bgcolor: "#FEF3C7",
                color: "#92400E",
                px: 2,
                py: 1,
                borderRadius: 3,
                fontSize: 13,
                display: "flex",
                alignItems: "center",
                gap: 1,
                whiteSpace: "nowrap",
              }}
            >
              <InfoOutlinedIcon sx={{ fontSize: 16 }} />
              If there is an existing Patient ID, input the patient’s existing
              ID into the field
            </Box>
          </Tooltip>
        </Box>

        {/* Name Fields */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 140px",
            gap: 2,
            mb: 3,
          }}
        >
          <TextField label="First name" required />
          <TextField label="Middle name" />
          <TextField label="Last name" required />
          <FormControl>
            <InputLabel>Title</InputLabel>
            <Select defaultValue="">
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Mrs">Mrs</MenuItem>
              <MenuItem value="Miss">Miss</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* DOB, Gender, Phone */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 2,
            mb: 4,
          }}
        >
          <TextField
            label="Date of birth"
            type="date"
            required
            InputLabelProps={{ shrink: true }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarTodayIcon sx={{ color: "#9CA3AF", fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />
          <FormControl required>
            <InputLabel>Gender</InputLabel>
            <Select defaultValue="">
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Phone number" required />
        </Box>

        {/* Toggle */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 2,
            mb: 6,
          }}
        >
          <Typography fontWeight={500} color="#1F2937">
            Is patient new to the hospital?
          </Typography>
          <Switch
            checked={isNewPatient}
            onChange={(e) => setIsNewPatient(e.target.checked)}
            color="primary"
          />
        </Box>

        {/* Bottom Buttons */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#4F46E5",
              color: "#4F46E5",
              borderRadius: 4,
              px: 4,
              py: 1.5,
              textTransform: "none",
              fontWeight: 600,
            }}
            onClick={onClose}
          >
            Save & close
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#4F46E5",
              color: "white",
              borderRadius: 4,
              px: 6,
              py: 1.5,
              textTransform: "none",
              fontWeight: 600,
              boxShadow: "0 4px 20px rgba(79,70,229,0.3)",
            }}
          >
            Create appointment
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
