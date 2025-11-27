import React from "react";
import { PatientRowFlex } from "./PatientRowFlex";

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
    status: "Admitted to ward",
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
    status: "Transferred to A&E",
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
    status: "Seen doctor",
    leftBorder: "#66BB6A",
  },
];

export const AppointmentsTableFlex = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          background: "#EDF0F8",
          padding: "18px 0",
          fontWeight: 700,
          fontSize: "16px",
          color: "#A6AFC2",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div style={{ flex: "0 0 60px", paddingLeft: 24 }}>#</div>
        <div style={{ flex: "310 0 310px" }}>Patient information</div>
        <div style={{ flex: "240 0 240px" }}>Clinic</div>
        <div style={{ flex: "0 0 130px" }}>Wallet bal. (₦)</div>
        <div style={{ flex: "0 0 160px" }}>Time / Date</div>
        <div style={{ flex: "0 0 160px", textAlign: "center" }}>Status</div>
        <div style={{ flex: "0 0 60px", paddingRight: 24 }} />
      </div>

      {appointments.map((apt, i) => (
        <PatientRowFlex key={apt.id} apt={apt} index={i} />
      ))}
    </div>
  );
};

export default AppointmentsTableFlex;
