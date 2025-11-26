// src/components/Header.tsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PluralLogo from "../assets/PluralLogo.png";

export const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#f8f9ff",
        borderBottom: "1px solid #e0e0ff",
        height: 70,
      }}
    >
      <Toolbar
        sx={{
          height: "100%",
          minHeight: "unset !important",
          px: 3,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={PluralLogo}
            alt="Plural"
            style={{
              height: 32,
              width: "auto",
            }}
          />
        </Box>


        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "baseline",
            gap: "8px", 
            lineHeight: "22px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 600,
              fontSize: "18px",
              color: "#2d2d2d", 
            }}
          >
            22 September
          </Typography>

          <Typography
            sx={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              color: "#6c757d", 
            }}
          >
            09:34 AM
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            sx={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 600,
              fontSize: "1rem",
              color: "#051438",
            }}
          >
            Hi Mr Daniel
          </Typography>

          <IconButton
            sx={{
              bgcolor: "rgba(74, 91, 255, 0.1)",
              color: "#0B0C7D",
              "&:hover": { bgcolor: "rgba(74, 91, 255, 0.2)" },
            }}
          >
            <NotificationsIcon fontSize="small" />
          </IconButton>

          <Avatar
            sx={{
              width: 36,
              height: 36,
              bgcolor: "#e0e0ff",
              color: "#A6AFC2",
              fontWeight: 700,
              fontSize: "0.9rem",
            }}
          >
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
