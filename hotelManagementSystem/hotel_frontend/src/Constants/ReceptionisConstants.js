const ReceptionistNavLinks = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "",
    icon: "IconDashboard",
    end: true,
  },
  {
    id: "bookingRequests",
    label: "Booking Requests",
    path: "booking-requests",
    icon: "IconCalendarCheck",
  },
  {
    id: "rooms",
    label: "Rooms",
    icon: "IconHotelService",
    children: [
      {
        id: "browseRooms",
        label: "Browse Rooms",
        path: "rooms",
      },
      {
        id: "roomManagement",
        label: "Room Management",
        path: "room-management",
      },
    ],
  },
  {
    id: "checkIn",
    label: "Check-In",
    path: "check-in-management",
    icon: "IconDoorEnter",
  },
  {
    id: "checkOut",
    label: "Check-Out",
    path: "check-out-management",
    icon: "IconDoorExit",
  },
  {
    id: "payment",
    label: "Payment Management",
    path: "payment-management",
    icon: "IconCreditCard",
  },
];

export { ReceptionistNavLinks };
