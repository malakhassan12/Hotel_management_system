import {
  Table,
  Text,
  Badge,
  Group,
  ActionIcon,
  Button,
  Tooltip,
  Menu,
  Modal,
  Stack,
  Title,
  Divider,
} from "@mantine/core";
import {
  IconEye,
  IconCheck,
  IconX,
  IconCreditCard,
  IconReceipt,
  IconDownload,
  IconMail,
  IconPrinter,
  IconCash,
  IconBrandPaypal,
  IconBuildingBank,
  IconWallet,
} from "@tabler/icons-react";
import BookingStatusBadge from "../../Badge/BookingStatusBadge";
import InvoiceModal from "../../Modal/Invoice/InvoiceModal";

const BookingsTable = ({ bookings }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  console.log(bookings);

  return (
    <>
      <BookingModal opened={opened} close={close} booking={selectedBooking} />

      <Table highlightOnHover withTableBorder striped>
        <Table.Thead>
          <Table.Tr
            style={{
              background: "linear-gradient(135deg, #1971c2 0%, #339af0 100%)",
            }}
          >
            <Table.Th c="white" fw={700}>
              Booking ID
            </Table.Th>
            <Table.Th c="white" fw={700}>
              Room
            </Table.Th>
            <Table.Th c="white" fw={700}>
              Check-In
            </Table.Th>
            <Table.Th c="white" fw={700}>
              Check-Out
            </Table.Th>
            <Table.Th c="white" fw={700} ta="center">
              Guests
            </Table.Th>
            <Table.Th c="white" fw={700}>
              Total
            </Table.Th>
            <Table.Th c="white" fw={700}>
              Status
            </Table.Th>
            <Table.Th c="white" fw={700} ta="center">
              Actions
            </Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {bookings.map((booking) => (
            <Table.Tr key={booking.id}>
              <Table.Td
                fw={600}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  setSelectedBooking(booking);
                  open();
                }}
              >
                #{booking.id}
              </Table.Td>{" "}
              <Table.Td>
                <Text fw={500}>{booking.room}</Text>
                <Text size="xs" c="dimmed">
                  Type: {booking.roomType || "Standard"}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text size="sm">{booking.checkIn}</Text>
              </Table.Td>
              <Table.Td>
                <Text size="sm">{booking.checkOut}</Text>
              </Table.Td>
              <Table.Td ta="center">
                <Badge size="sm" variant="light" color="blue">
                  {booking.guests} guests
                </Badge>
              </Table.Td>
              <Table.Td>
                <Text fw={700} size="lg" c="blue.7">
                  ${booking.total?.toLocaleString()}
                </Text>
              </Table.Td>
              <Table.Td>
                <BookingStatusBadge status={booking.status} />
              </Table.Td>
              <Table.Td>
                <Group gap="xs" justify="center">
                  {/* Payment Button - Show for pending bookings */}
                  {(booking.status === "pending" ||
                    booking.status === "PENDING") && (
                    <Tooltip label="Make Payment" position="top">
                      <ActionIcon variant="light" color="green" size="md">
                        <IconCreditCard size={18} />
                      </ActionIcon>
                    </Tooltip>
                  )}
                </Group>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
};

// Add missing Alert import
import { Alert } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import BookingModal from "../../Modal/Booking/BookingModal";

export default BookingsTable;
