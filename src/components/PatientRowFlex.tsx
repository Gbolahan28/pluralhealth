import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";

export const PatientRowFlex = ({ apt, index }: any) => {
  const statusConfig: any = {
    Processing: { bg: "#FFF3E0", color: "#FF8F00", dot: "#FFB300" },
    "Not arrived": { bg: "#FFEBEE", color: "#E53935", dot: "#EF5350" },
    "Awaiting vitals": { bg: "#E8F5E9", color: "#43A047", dot: "#66BB6A" },
    "Awaiting doctor": { bg: "#E3F2FD", color: "#1976D2", dot: "#42A5F5" },
  };

  const config = statusConfig[apt.status] || {
    bg: "#F5F5F5",
    color: "#666",
    dot: "#999",
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "18px 0",
        background: index % 2 === 0 ? "#FAFBFF" : "white",
        position: "relative",
      }}
    >
      {/* Left border */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "6px",
          background: apt.leftBorder,
          borderRadius: "0 6px 6px 0",
        }}
      ></div>

      {/* # + Expand */}
      <div
        style={{
          width: 60,
          paddingLeft: 24,
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <ExpandMoreIcon style={{ fontSize: 20, color: "#9CA3AF" }} />
        <span style={{ fontSize: 14, color: "#6B7280", fontWeight: 500 }}>
          {apt.id}
        </span>
      </div>

      {/* Patient Info */}
      <div
        style={{ width: 310, display: "flex", alignItems: "center", gap: 20 }}
      >
        <Avatar
          src={apt.avatar}
          sx={{ width: 44, height: 44, fontSize: 18, fontWeight: 600 }}
        >
          {apt.name
            .split(" ")
            .map((x: string) => x[0])
            .join("")}
        </Avatar>
        <div>
          <div
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "#1F2937",
              marginBottom: 2,
            }}
          >
            {apt.name}
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "#6B7280",
              fontWeight: 500,
            }}
          >
            {apt.hospital_id} • {apt.gender} • {apt.age}
          </div>
        </div>
      </div>

      {/* Clinic */}
      <div
        style={{
          width: 240,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        {apt.badge && (
          <div
            style={{
              background: "#EEF2FF",
              color: "#4F46E5",
              padding: "2px 8px",
              fontSize: 11,
              fontWeight: 600,
              borderRadius: 6,
            }}
          >
            New
          </div>
        )}

        <span style={{ fontSize: 14, fontWeight: 500, color: "#1F2937" }}>
          {apt.clinic}
        </span>

        {apt.hasIcon && (
          <div
            style={{
              border: "1px solid #E5E7EB",
              padding: "2px 8px",
              fontSize: 11,
              fontWeight: 600,
              borderRadius: 6,
              color: "#6B7280",
              background: "white",
            }}
          >
            +1
          </div>
        )}
      </div>

      {/* Wallet */}
      <div
        style={{
          width: 130,
          fontSize: 14,
          fontWeight: 600,
          color: "#1F2937",
          display: "flex",
          alignItems: "center",
        }}
      >
        {apt.wallet}
      </div>

      {/* Time */}
      <div style={{ width: 160 }}>
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "#FB923C", // Figma orange
          }}
        >
          {apt.time}
        </div>

        <div
          style={{
            fontSize: 13,
            color: "#6B7280",
            fontWeight: 500,
          }}
        >
          {apt.date}
        </div>

        {apt.tag && (
          <div
            style={{
              marginTop: 4,
              background: "#6366F1",
              color: "white",
              fontSize: 10,
              fontWeight: 600,
              padding: "3px 8px",
              borderRadius: 6,
              display: "inline-block",
            }}
          >
            {apt.tag}
          </div>
        )}
      </div>

      {/* Status */}
      <div
        style={{
          width: 160,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 14px",
            borderRadius: 8,
            background: config.bg,
            minWidth: 120,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: config.dot,
            }}
          ></div>

          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: config.color,
            }}
          >
            {apt.status}
          </span>
        </div>
      </div>

      {/* Menu */}
      <div
        style={{
          width: 60,
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: 24,
          alignItems: "center",
        }}
      >
        <MoreVertIcon sx={{ color: "#9CA3AF" }} />
      </div>
    </div>
  );
};
