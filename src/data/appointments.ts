import { ReactNode } from "react";

export type Appointment = {
  id: number;
  photo: string;
  name: string;
  hosId: string;
  genderAge: string;
  isNew?: boolean;
  clinic: string;
  clinicIcon?: ReactNode;
  walletBal: string;
  timeDate: string;
  status: string;
  statusColor:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
};

export const appointments: Appointment[] = [
  {
    id: 1,
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Akpopodion Endurance",
    hosId: "HOSP29384756",
    genderAge: "Male • 21yrs",
    isNew: true,
    clinic: "Neurology",
    walletBal: "120,000",
    timeDate: "11:30 AM 22 Sep 2025",
    status: "Processing",
    statusColor: "warning", // valid MUI color
  },
  {
    id: 2,
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Boluwatife Olusola",
    hosId: "HOSP8765421",
    genderAge: "Female • 30yrs",
    isNew: true,
    clinic: "Ear, Nose & Throat",
    walletBal: "230,500",
    timeDate: "05:30 PM 22 Sep 2025",
    status: "Not arrived",
    statusColor: "error",
  },
  {
    id: 3,
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Arlie Mertz",
    hosId: "HOSP76354892",
    genderAge: "Female • 23days",
    isNew: true,
    clinic: "Neurology",
    walletBal: "90,000",
    timeDate: "03:45 PM 22 Sep 2025",
    status: "Awaiting vitals",
    statusColor: "info",
  },
  {
    id: 4,
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Akuchi Amadi",
    hosId: "HOSP98765432",
    genderAge: "Female • 11mths",
    clinic: "Accident & Emergency",
    walletBal: "100,000",
    timeDate: "02:00 PM 22 Sep 2025",
    status: "Not arrived",
    statusColor: "error",
  },
  {
    id: 5,
    photo: "https://randomuser.me/api/portraits/women/89.jpg",
    name: "Omolola Bakare",
    hosId: "HOSP23456789",
    genderAge: "Female • 26yrs",
    clinic: "Accident & Emergency",
    walletBal: "180,000",
    timeDate: "01:15 PM 22 Sep 2025",
    status: "Awaiting doctor",
    statusColor: "secondary",
  },
  {
    id: 6,
    photo: "https://randomuser.me/api/portraits/women/23.jpg",
    name: "Ayobami Musa",
    hosId: "HOSP54567890",
    genderAge: "Female • 11mths",
    clinic: "Accident & Emergency",
    walletBal: "190,000",
    timeDate: "12:45 PM 22 Sep 2025",
    status: "Admitted to ward",
    statusColor: "success",
  },
  {
    id: 7,
    photo: "https://randomuser.me/api/portraits/women/56.jpg",
    name: "Ngozi Okeke",
    hosId: "HOSP45678901",
    genderAge: "Female • 11mths",
    clinic: "Accident & Emergency",
    walletBal: "200,000",
    timeDate: "10:00 AM 22 Sep 2025",
    status: "Transferred to A&E",
    statusColor: "info",
  },
  {
    id: 8,
    photo: "https://randomuser.me/api/portraits/women/78.jpg",
    name: "Chinwe Azikiwe",
    hosId: "HOSP56789012",
    genderAge: "Female • 11mths",
    clinic: "Accident & Emergency",
    walletBal: "210,000",
    timeDate: "08:00 AM 22 Sep 2025",
    status: "Seen doctor",
    statusColor: "success",
  },
];
