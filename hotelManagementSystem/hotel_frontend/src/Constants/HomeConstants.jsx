import { TbUsers } from "react-icons/tb";
import { FaUserShield } from "react-icons/fa6";
import { GrUserSettings } from "react-icons/gr";

const cardsData = [
  {
    title: "Customer Portal",
    description:
      "Browse rooms, make bookings, manage reservations, and save favorites",
    icon: <TbUsers size={28} color={`var(--mantine-color-blue-6)`} />,
  },
  {
    title: "Receptionist Dashboard",
    description:
      "Manage booking requests, room status, check-ins, check-outs, and payments",
    icon: <GrUserSettings size={28} color={`var(--mantine-color-green-6)`} />,
  },
  {
    title: "Admin Console",
    description:
      "Full system analytics, user management, room management, and system logs",
    icon: <FaUserShield size={28} color={`var(--mantine-color-gold-6)`} />,
  },
];

export { cardsData };
