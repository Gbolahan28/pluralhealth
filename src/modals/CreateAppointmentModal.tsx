
import React, { useState } from "react";
import {
  Box,
  Modal,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
  Button,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import FilterListIcon from "@mui/icons-material/FilterList";

interface CreateAppointmentModalProps {
  open: boolean;
  onClose: () => void;
}

const patients = [
  { name: "Aikpopoidon Endurance", id: "PLAT-S/009089" },
  { name: "Aikpopoidon Feranmi", id: "PLAT-S/0124789" },
  { name: "Aikpopoidon Selena", id: "PLAT-S/0035689" },
  { name: "Aikpopoidon Tolani", id: "PLAT-S/215636" },
];

export const CreateAppointmentModal = ({
  open,
  onClose,
}: CreateAppointmentModalProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handlePatientSelect = (patient: (typeof patients)[0]) => {
    setSelectedPatient(patient.name);
    setSearchValue(patient.name);
    setShowDropdown(false);
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "95vw", sm: "90vw", md: 780 },
          maxHeight: "90vh",
          overflowY: "auto",
          bgcolor: "#EDF0F8",
          borderRadius: 5,
          boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
          p: { xs: 3, sm: 5 },
        }}
      >

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h5" fontWeight={700} color="#051438">
            Add new appointment
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ color: "#9CA3AF" }} />
          </IconButton>
        </Box>

        
        <Box sx={{ position: "relative", mb: 3 }}>
          <TextField
            fullWidth
            placeholder="Find patient"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                bgcolor: "#F9FAFB",
              },
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#9CA3AF" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton size="small">
                      <FingerprintIcon sx={{ color: "#9CA3AF" }} />
                    </IconButton>
                    <IconButton size="small">
                      <FilterListIcon sx={{ color: "#9CA3AF" }} />
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          
          {showDropdown && filteredPatients.length > 0 && (
            <Paper
              sx={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                mt: 1,
                borderRadius: 3,
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                zIndex: 1000,
                maxHeight: 280,
                overflowY: "auto",
              }}
            >
              <List sx={{ p: 0 }}>
                {filteredPatients.map((patient, index) => (
                  <ListItem
                    key={patient.id}
                    onClick={() => handlePatientSelect(patient)}
                    sx={{
                      cursor: "pointer",
                      py: 2,
                      px: 3,
                      borderBottom:
                        index !== filteredPatients.length - 1
                          ? "1px solid #E5E7EB"
                          : "none",
                      "&:hover": {
                        bgcolor: "#F9FAFB",
                      },
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography fontWeight={600} color="#1F2937">
                          {patient.name}
                        </Typography>
                      }
                      secondary={
                        <Typography color="#6B7280" fontSize={14}>
                          {patient.id}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}
        </Box>

        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 2.5,
            borderBottom: "1px solid #E5E7EB",
            mb: 0.5,
          }}
        >
          <Typography color="#677597" fontWeight={500}>
            Clinic
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography color="#051438" fontWeight={600}>
              Clinic
            </Typography>
            <Typography color="#051438">›</Typography>
          </Box>
        </Box>

        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 2.5,
            borderBottom: "1px solid #CDD8F3",
            mb: 0.5,
          }}
        >
          <Typography color="#677597" fontWeight={500}>
            Title
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography color="#051438" fontWeight={600}>
              Appointment type
            </Typography>
            <Typography color="#051438">›</Typography>
          </Box>
        </Box>

        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 2.5,
            borderBottom: "1px solid #E5E7EB",
            mb: 3,
          }}
        >
          <Typography color="#677597" fontWeight={500}>
            Time
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography color="#051438" fontWeight={600}>
              25 Sep 2025
            </Typography>
            <Typography color="#051438" fontWeight={600}>
              09:49 AM
            </Typography>
          </Box>
        </Box>

        
        <Box
          sx={{
            bgcolor: "#6B7AA0",
            borderRadius: 2,
            p: 3,
            mb: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
              color: "white",
            }}
          >
            <IconButton size="small" sx={{ color: "white" }}>
              <FilterListIcon fontSize="small" />
            </IconButton>
            <Typography fontWeight={600} color="white">
              September 2025
            </Typography>
            <IconButton size="small" sx={{ color: "white" }}>
              <AccessTimeIcon fontSize="small" />
            </IconButton>
          </Box>

          
          <Grid container sx={{ mb: 1 }}>
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <Grid size={12 / 7} key={i}>
                <Typography
                  fontSize={13}
                  fontWeight={600}
                  color="white"
                  textAlign="center"
                >
                  {d}
                </Typography>
              </Grid>
            ))}
          </Grid>

          
          <Grid container spacing={0.3}>
            {[
              30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
              18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2,
            ].map((day, idx) => {
              const isPrevMonth = idx < 2;
              const isNextMonth = idx >= 32;
              const isSelected = day === 25 && !isPrevMonth && !isNextMonth;
              return (
                <Grid size={12 / 7} key={idx}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: isSelected ? "white" : "transparent",
                      color: isSelected
                        ? "#6B7AA0"
                        : isPrevMonth || isNextMonth
                        ? "rgba(255,255,255,0.3)"
                        : "white",
                      fontWeight: isSelected ? 700 : 400,
                      fontSize: 14,
                      mx: "auto",
                      cursor: "pointer",
                      "&:hover": {
                        bgcolor: isSelected ? "white" : "rgba(255,255,255,0.1)",
                      },
                    }}
                  >
                    {day}
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 2.5,
            borderBottom: "1px solid #E5E7EB",
            mb: 4,
          }}
        >
          <Typography color="#677597" fontWeight={500}>
            Repeat
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography color="#051438" fontWeight={600}>
              Does not repeat
            </Typography>
            <Typography color="#051438">›</Typography>
          </Box>
        </Box>

        
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            mt: 1,
          }}
        >
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{
              borderColor: "#6658F4",
              color: "#6658f4",
              borderRadius: 3,
              px: 4,
              py: 1.2,
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                borderColor: "#6B7AA0",
                bgcolor: "rgba(107, 122, 160, 0.04)",
              },
            }}
          >
            Save & Close
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#051438",
              color: "white",
              borderRadius: 3,
              px: 4,
              py: 1.2,
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                bgcolor: "#2A1F5E",
              },
            }}
          >
            Create invoice
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
