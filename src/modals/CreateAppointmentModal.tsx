// src/components/modals/CreateAppointmentModal.tsx
import React from "react";
import {
  Box,
  Modal,
  Typography,
  IconButton,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
  Button,
  Grid, // ← THIS IS THE FIX (MUI v5.15+ uses Grid2)
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import FilterListIcon from "@mui/icons-material/FilterList";

interface CreateAppointmentModalProps {
  open: boolean;
  onClose: () => void;
}

export const CreateAppointmentModal = ({
  open,
  onClose,
}: CreateAppointmentModalProps) => {
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
          bgcolor: "white",
          borderRadius: 5,
          boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
          p: { xs: 3, sm: 5 },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h5" fontWeight={700} color="#1F2937">
            Add new appointment
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ color: "#9CA3AF" }} />
          </IconButton>
        </Box>

        {/* Search */}
        <TextField
          fullWidth
          placeholder="Find patient"
          sx={{ mb: 4 }}
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

        {/* Clinic & Type */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <FormControl fullWidth>
              <InputLabel>Clinic</InputLabel>
              <Select defaultValue="">
                <MenuItem value="neurology">Neurology</MenuItem>
                <MenuItem value="ent">Ear, Nose & Throat</MenuItem>
                <MenuItem value="emergency">Accident & Emergency</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <FormControl fullWidth>
              <InputLabel>Appointment type</InputLabel>
              <Select defaultValue="">
                <MenuItem value="consultation">Consultation</MenuItem>
                <MenuItem value="followup">Follow-up</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Title */}
        <TextField
          fullWidth
          label="Title"
          placeholder="e.g. Routine Checkup"
          sx={{ mb: 4 }}
        />

        {/* Calendar Section */}
        <Box sx={{ bgcolor: "#F8FAFC", borderRadius: 3, p: 3, mb: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <CalendarTodayIcon sx={{ color: "#6366F1" }} />
                <Typography fontWeight={600}>Time</Typography>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6 }}
              sx={{ textAlign: { xs: "left", sm: "right" } }}
            >
              <Typography
                fontWeight={700}
                color="#4F46E5"
                fontSize={18}
                component="span"
              >
                25 Sep 2025
              </Typography>
              <Typography
                fontWeight={700}
                color="#4F46E5"
                fontSize={18}
                component="span"
                ml={2}
              >
                09:49 AM
              </Typography>
            </Grid>
          </Grid>

          {/* Calendar Mock */}
          <Box
            sx={{
              mt: 3,
              bgcolor: "#6366F1",
              borderRadius: 3,
              p: 3,
              color: "white",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <FilterListIcon />
              <Typography fontWeight={600}>September 2025</Typography>
              <AccessTimeIcon sx={{ transform: "rotate(45deg)" }} />
            </Box>

            {/* Weekdays */}
            <Grid container>
              {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                <Grid size={12 / 7} key={d}>
                  <Typography fontSize={12} fontWeight={500}>
                    {d}
                  </Typography>
                </Grid>
              ))}
            </Grid>

            {/* Days */}
            <Grid container spacing={0.5} sx={{ mt: 1 }}>
              {[
                30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
              ].map((day) => (
                <Grid size={12 / 7} key={day}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: day === 25 ? "white" : "transparent",
                      color: day === 25 ? "#6366F1" : "white",
                      fontWeight: day === 25 ? 700 : 400,
                      mx: "auto",
                    }}
                  >
                    {day}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Repeat */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 5,
          }}
        >
          <Typography color="#6B7280">Repeat</Typography>
          <FormControl sx={{ minWidth: 180 }}>
            <Select defaultValue="none">
              <MenuItem value="none">Does not repeat</MenuItem>
              <MenuItem value="daily">Daily</MenuItem>
              <MenuItem value="weekly">Weekly</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderColor: "#4F46E5",
              color: "#4F46E5",
              borderRadius: 4,
              px: 5,
              py: 1.5,
              width: { xs: "100%", sm: "auto" },
            }}
            onClick={onClose}
          >
            Save & Close
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#4F46E5",
              borderRadius: 4,
              px: 6,
              py: 1.5,
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Create invoice
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
