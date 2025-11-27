
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
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
          width: "92vw",
          height: "90vh",
          maxWidth: "1600px",
          maxHeight: "95vh",

          overflowY: "auto",
          bgcolor: "#EDF0F8",
          borderRadius: "20px",
          boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
          p: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <Box>
            <Typography variant="h5" fontWeight={700} color="#051438">
              Add new patient
            </Typography>
            <Typography variant="body2" fontWeight={600} color="#677597" mt={1}>
              Fill in the patient information in the fields provided below
            </Typography>
          </Box>
          <IconButton onClick={onClose} sx={{ mt: -1, mr: -2 }}>
            <CloseIcon sx={{ color: "#9CA3AF" }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 4,
            mt: 4,
            mb: 3,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor: "#A6afc2",
                  fontSize: 40,
                  fontWeight: 600,
                }}
              ></Avatar>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  endIcon={
                    <span style={{ marginLeft: 8 }}>
                      <ExpandMoreIcon sx={{ verticalAlign: "middle" }} />
                    </span>
                  }
                  sx={{
                    bgcolor: "#0b0c7d",
                    color: "white",
                    borderRadius: 3,
                    textTransform: "none",
                    px: 3,
                    py: 1.5,
                    fontWeight: 600,
                  }}
                >
                  Take patient's picture
                </Button>
                <Button
                  variant="contained"
                  endIcon={<FingerprintIcon />}
                  sx={{
                    bgcolor: "#0b0c7d",
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
              color="#7a90c2"
              sx={{
                display: "block",
                ml: 17,
                mt: -1.5,
                fontWeight: 500,
                fontSize: 16,
                height: 19,
              }}
            >
              Patient picture should be updated by reception personnel
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "flex-end",
            }}
          >
            <Tooltip
              title="If there is an existing Patient ID, input the patient's existing ID into the field"
              arrow
              placement="top"
            >
              <Box
                sx={{
                  bgcolor: "#d7ecfc",
                  color: "#051438",
                  px: 2,
                  py: 1,
                  borderRadius: 3,
                  fontSize: 13,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  whiteSpace: "nowrap",
                  height: 24,
                  boxSizing: "border-box",
                }}
              >
                <InfoOutlinedIcon
                  sx={{
                    fontSize: 16,
                    color: "#fff",
                    bgcolor: "#ff8b00",
                    borderRadius: "50%",
                  }}
                />
                If there is an existing Patient ID, input the patient's existing
                ID into the field
              </Box>
            </Tooltip>

            <TextField
              label="Patient ID"
              value="HOSP98765433"
              disabled
              sx={{
                width: 280,
                bgcolor: "white",
                borderRadius: 1,
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
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 140px",
            gap: 2,
            mb: 3,
          }}
        >
          <TextField
            label="First name"
            required
            sx={{ bgcolor: "white", borderRadius: 4 }}
          />
          <TextField
            label="Middle name"
            sx={{ bgcolor: "white", borderRadius: 4 }}
          />
          <TextField
            label="Last name"
            required
            sx={{ bgcolor: "white", borderRadius: 4 }}
          />
          <FormControl sx={{ bgcolor: "white", borderRadius: 4 }}>
            <InputLabel>Title</InputLabel>
            <Select defaultValue="">
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Mrs">Mrs</MenuItem>
              <MenuItem value="Miss">Miss</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr auto",
            gap: 2,
            mb: 3,
            alignItems: "center",
          }}
        >
          <TextField
            label="Date of birth"
            type="date"
            required
            sx={{ bgcolor: "white", borderRadius: 4 }}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarTodayIcon sx={{ color: "#9CA3AF", fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />
          <FormControl required sx={{ bgcolor: "white", borderRadius: 4 }}>
            <InputLabel>Gender</InputLabel>
            <Select defaultValue="">
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Phone number"
            required
            sx={{ bgcolor: "white", borderRadius: 1 }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              whiteSpace: "nowrap",
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
        </Box>

        <Box sx={{ flexGrow: 1, minHeight: "200px" }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            mt: "auto",
            pt: 4,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderColor: "#6658f4",
              color: "#6658f4",
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
              bgcolor: "#0b0c7d",
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
