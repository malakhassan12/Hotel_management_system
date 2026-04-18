import { Table } from "@mantine/core";
import BookingStatusBadge from "../../Badge/BookingStatusBadge";
const BookingsTable = ({ bookings }) => {
  return (
    <Table highlightOnHover withColumnBorders striped>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Booking ID</Table.Th>
          <Table.Th>Room</Table.Th>
          <Table.Th>Check-In</Table.Th>
          <Table.Th>Check-Out</Table.Th>
          <Table.Th>Guests</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th>Status</Table.Th>
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
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default BookingsTable;