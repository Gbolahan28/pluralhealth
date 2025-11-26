import React from "react";

const appointments = [
  {
    id: 1,
    name: "Akpopodion Endurance",
    hospital_id: "HOSP2938756",
    gender: "Male",
    age: "21yrs",
    clinic: "Neurology",
    badge: "New",
    hasIcon: true,
    wallet: "120,000",
    time: "11:30 AM",
    date: "22 Sep 2025",
    status: "Processing",
    leftBorder: "#FFB300",
  },
  {
    id: 2,
    name: "Boluwatife Olusola",
    hospital_id: "HOSP8765432",
    gender: "Female",
    age: "30yrs",
    clinic: "Ear, Nose & Throat",
    badge: "New",
    hasIcon: true,
    wallet: "230,500",
    time: "05:30 PM",
    date: "22 Sep 2025",
    status: "Not arrived",
    leftBorder: "#EF5350",
  },
  {
    id: 3,
    name: "Arlie Mertz",
    hospital_id: "HOSP76354892",
    gender: "Female",
    age: "23days",
    clinic: "Neurology",
    badge: "New",
    wallet: "90,000",
    time: "03:45 PM",
    date: "22 Sep 2025",
    status: "Awaiting vitals",
    leftBorder: "#66BB6A",
  },
  {
    id: 4,
    name: "Akuchi Amadi",
    hospital_id: "HOSP98765432",
    gender: "Female",
    age: "11mths",
    clinic: "Accident & Emergency",
    wallet: "100,000",
    time: "02:00 PM",
    date: "22 Sep 2025",
    status: "Not arrived",
    leftBorder: "#EF5350",
  },
  {
    id: 5,
    name: "Omolola Bakare",
    hospital_id: "HOSP2456789",
    gender: "Female",
    age: "26yrs",
    clinic: "Accident & Emergency",
    wallet: "180,000",
    time: "01:15 PM",
    date: "22 Sep 2025",
    status: "Awaiting doctor",
    leftBorder: "#FFB300",
  },
  {
    id: 6,
    name: "Ayobami Musa",
    hospital_id: "HOSP34567890",
    gender: "Female",
    age: "11mths",
    clinic: "Accident & Emergency",
    wallet: "190,000",
    time: "12:45 PM",
    date: "22 Sep 2025",
    tag: "Admitted to ward",
    status: "Awaiting vitals",
    leftBorder: "#FFB300",
  },
  {
    id: 7,
    name: "Ngozi Okeke",
    hospital_id: "HOSP45678901",
    gender: "Female",
    age: "11mths",
    clinic: "Accident & Emergency",
    wallet: "200,000",
    time: "10:00 AM",
    date: "22 Sep 2025",
    status: "Awaiting vitals",
    leftBorder: "#FFB300",
  },
  {
    id: 8,
    name: "Chinwe Azikiwe",
    hospital_id: "HOSP56789012",
    gender: "Female",
    age: "11mths",
    clinic: "Accident & Emergency",
    wallet: "210,000",
    time: "08:00 AM",
    date: "22 Sep 2025",
    status: "Awaiting vitals",
    leftBorder: "#66BB6A",
  },
];

const MoreVertIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);

const ExpandMoreIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </svg>
);

interface AvatarProps {
  name: string;
  src?: string;
}

const Avatar: React.FC<AvatarProps> = ({ name, src }) => {
  const initials = name
    .split(" ")
    .map((x: string) => x[0])
    .join("");

  return (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: src ? `url(${src})` : "#E3F2FD",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 18,
        fontWeight: 600,
        color: "#1976D2",
      }}
    >
      {!src && initials}
    </div>
  );
};

interface PatientRowProps {
  apt: any;
  index: number;
}

const PatientRowFlex: React.FC<PatientRowProps> = ({ apt, index }) => {
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
      />

      <div
        style={{
          width: 60,
          paddingLeft: 24,
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <div style={{ color: "#9CA3AF" }}>
          <ExpandMoreIcon />
        </div>
        <span style={{ fontSize: 14, color: "#6B7280", fontWeight: 500 }}>
          {apt.id}
        </span>
      </div>

      <div
        style={{ width: 310, display: "flex", alignItems: "center", gap: 20 }}
      >
        <Avatar name={apt.name} src={apt.avatar} />
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

      <div style={{ width: 160 }}>
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "#FB923C",
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
          />

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

      <div
        style={{
          width: 60,
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: 24,
          alignItems: "center",
          color: "#9CA3AF",
        }}
      >
        <MoreVertIcon />
      </div>
    </div>
  );
};

export const AppointmentsTableFlex = () => {
  return (
    <div
      style={{
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
      }}
    >
      <div
        style={{
          width: "100%",
          background: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            background: "#F9FAFB",
            padding: "18px 0",
            fontWeight: 600,
            fontSize: "13px",
            color: "#6B7280",
            borderBottom: "1px solid #E5E7EB",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          <div style={{ width: 60, paddingLeft: 24 }}>#</div>
          <div style={{ width: 310 }}>Patient information</div>
          <div style={{ width: 240 }}>Clinic</div>
          <div style={{ width: 130 }}>Wallet bal. (₦)</div>
          <div style={{ width: 160 }}>Time / Date</div>
          <div style={{ width: 160, textAlign: "center" }}>Status</div>
          <div style={{ width: 60, paddingRight: 24 }} />
        </div>

        {appointments.map((apt, i) => (
          <PatientRowFlex key={apt.id} apt={apt} index={i} />
        ))}
      </div>
    </div>
  );
};

export default AppointmentsTableFlex;
