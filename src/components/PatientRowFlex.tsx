import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import AdmittedIcon from "../assets/icons/AdmittedIcon.svg";
import AwaitingVitalsIcon from "../assets/icons/AwaitingVitalsIcon.svg";
import NotArrivedIcon from "../assets/icons/NotArrivedIcon.svg";
import ProcessingIcon from "../assets/icons/ProcessingIcon.svg";
import SeenIcon from "../assets/icons/SeenIcon.svg";
import AwaitingDoctorIcon from "../assets/icons/AwaitingVitalsIcon.svg";
import TransferredIcon from "../assets/icons/AdmittedIcon.svg";

export const PatientRowFlex = ({ apt, index }: any) => {
  const statusConfig: any = {
    Processing: {
      bg: "#FFF6DB",
      color: "#FF8F00",
      Icon: ProcessingIcon,
    },
    "Not arrived": {
      bg: "#FFDBDB",
      color: "#E53935",
      Icon: NotArrivedIcon,
    },
    "Awaiting vitals": {
      bg: "#E9CCFF",
      color: "#A22CFF",
      Icon: AwaitingVitalsIcon,
    },
    "Awaiting doctor": {
      bg: "#D0D1FB",
      color: "#0B0C7D",
      Icon: AwaitingDoctorIcon,
    },
    "Admitted to ward": {
      bg: "#FFEFDB",
      color: "#FF8B00",
      Icon: AdmittedIcon,
    },
    "Transferred to A&E": {
      bg: "#EFDBFF",
      color: "#A22CFF",
      Icon: TransferredIcon,
    },
    "Seen doctor": {
      bg: "#E2F8EB",
      color: "#27AE60",
      Icon: SeenIcon,
    },
  };

  const config = statusConfig[apt.status] || {
    bg: "#F5F5F5",
    color: "#666",
    Icon: ProcessingIcon,
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

      <div
        style={{
          flex: "0 0 60px",
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

      <div
        style={{
          flex: "310 0 310px",
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
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
              fontSize: "16px",
              fontWeight: 600,
              color: "#051438",
              marginBottom: 2,
            }}
          >
            {apt.name}
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "#677597",
              fontWeight: 700,
            }}
          >
            {apt.hospital_id} • {apt.gender} • {apt.age}
          </div>
        </div>
      </div>

      <div
        style={{
          flex: "240 0 240px",
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

        <span style={{ fontSize: 16, fontWeight: 600, color: "#051438" }}>
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

      <div
        style={{
          flex: "0 0 130px",
          fontSize: 16,
          fontWeight: 600,
          color: "#051438",
          display: "flex",
          alignItems: "center",
        }}
      >
        {apt.wallet}
      </div>

      <div style={{ flex: "0 0 160px" }}>
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: config.color,
          }}
        >
          {apt.time}
        </div>
        <div
          style={{
            fontSize: 13,
            color: config.color,
            fontWeight: 500,
          }}
        >
          {apt.date}
        </div>
      </div>


      <div
        style={{
          flex: "0 0 160px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
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
          }}
        >
          <span
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: config.color,
            }}
          >
            {apt.status}
          </span>
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              background: config.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >

            <img
              src={config.Icon}
              alt={apt.status}
              style={{
                width: 12,
                height: 12,
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          flex: "0 0 60px",
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
