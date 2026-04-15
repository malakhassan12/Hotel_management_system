import {
  IconDashboard,
  IconCalendarCheck,
  IconHotelService,
  IconDoorEnter,
  IconDoorExit,
  IconCreditCard,
} from "@tabler/icons-react";

const iconMap = {
  IconDashboard: IconDashboard,
  IconCalendarCheck: IconCalendarCheck,
  IconHotelService: IconHotelService,
  IconDoorEnter: IconDoorEnter,
  IconDoorExit: IconDoorExit,
  IconCreditCard: IconCreditCard,
};

export const GetReceptionistNavIcons = (iconName, size = 18) => {
  const IconComponent = iconMap[iconName];
  if (!IconComponent) return null;
  return <IconComponent size={size} />;
};