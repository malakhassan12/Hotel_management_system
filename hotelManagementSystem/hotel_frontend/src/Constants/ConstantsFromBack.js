const roles = ["ADMIN", "CUSTOMER", "EMPLOYEE"];

const bookingStatus = [
  "PENDING",
  "ACCEPTED",
  "CANCELLED",
  "REJECTED",
  "CHECKED_IN",
  "COMPLETED",
  "CHECKED_OUT",
];

const roomStatus = ["AVAILABLE", "Booked", "MAINTENANCE"];

 const roomTypeMap = {
      SINGLE: "Single Room",
      DOUBLE: "Double Room",
      SUITE: "Suite",
      DELUXE: "Deluxe Room",
      FAMILY: "Family Suite",
    };
export { roles, bookingStatus, roomStatus , roomTypeMap };
