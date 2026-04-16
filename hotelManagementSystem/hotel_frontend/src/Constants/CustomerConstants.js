const CustomerNavLinks = [
  {
    id: "browseRooms",
    label: "Browse Rooms",
    path: "",
    icon: "IconHotelService",
    end: true,
  },
  {
    id: "myBookings",
    label: "My Bookings",
    path: "my-bookings",
    icon: "IconCalendarCheck",
  },
  {
    id: "favourites",
    label: "Favourites",
    path: "favourites",
    icon: "IconHeart",
  },
  {
    id: "bookingActions",
    label: "Booking Actions",
    icon: "IconClipboardList",
    children: [
      {
        id: "checkIn",
        label: "Check-In",
        path: "check-in/:roomId",
      },
      {
        id: "checkOut",
        label: "Check-Out",
        path: "check-out/:bookingId",
      },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    path: "settings",
    icon: "IconSettings",
  },
  {
    id: "notifications",
    label: "Notifications",
    path: "notifications",
    icon: "IconBell",
  },
];

export { CustomerNavLinks };