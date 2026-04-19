import { Table, Text, Badge, Group, ActionIcon, Button } from "@mantine/core";
import { IconEye, IconCheck, IconX } from "@tabler/icons-react";
import BookingStatusBadge from "../../Badge/BookingStatusBadge";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InvoiceModal from "../../Modal/Invoice/InvoiceModal";


const BookingsTable = ({ bookings }) => {
  const navigate = useNavigate();
const [opened, setOpened] = useState(false);
const [selectedBooking, setSelectedBooking] = useState(null);
  return (
    <>
    <Table highlightOnHover withTableBorder striped>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Booking ID</Table.Th>
          <Table.Th>Room</Table.Th>
          <Table.Th>Check-In</Table.Th>
          <Table.Th>Check-Out</Table.Th>
          <Table.Th>Guests</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th>Status</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>
        {bookings.map((booking) => (
          <Table.Tr key={booking.id}>
            <Table.Td fw={600}>{booking.id}</Table.Td>
            <Table.Td>{booking.room}</Table.Td>
            <Table.Td>{booking.checkIn}</Table.Td>
            <Table.Td>{booking.checkOut}</Table.Td>
            <Table.Td>{booking.guests}</Table.Td>
            <Table.Td fw={600}>${booking.total}</Table.Td>

            <Table.Td>
              <BookingStatusBadge status={booking.status} />
            </Table.Td>

           <Table.Td>
  <Group gap="xs">
   {booking.status === "confirmed" && (
  <Button
    size="xs"
    onClick={() =>
      navigate(`/customer/check-in/${booking.id}`)
    }
  >
    Check In
  </Button>
)}

{booking.status === "checked-in" && (
  <Button
    color="red"
    size="xs"
    onClick={() => {
      setSelectedBooking(booking);
      setOpened(true);
    }}
  >
    Check Out
  </Button>
)}
  </Group>
</Table.Td>
               
           
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
    <InvoiceModal
  opened={opened}
  close={() => setOpened(false)}
  invoice={{
    invoiceNumber: `INV-${selectedBooking?.id}`,
    bookingId: selectedBooking?.bookingId,
    customerName: "Customer",
    checkIn: selectedBooking?.checkIn,
    checkOut: selectedBooking?.checkOut,
    nights: 3,
    roomCharges: {
      pricePerNight: 200,
      total: selectedBooking?.total || 0,
    },
    additionalServices: [],
    totalAmount: selectedBooking?.total || 0,
    tax: 0,
    paidAmount: selectedBooking?.total || 0,
    paymentStatus: "Paid",
    invoiceDate: new Date().toISOString().split("T")[0],
  }}
/>
    </>
  );
};

export default BookingsTable;