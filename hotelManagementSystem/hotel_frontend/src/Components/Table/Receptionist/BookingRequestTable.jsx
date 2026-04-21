// ******************************** Mantline UI ********************************

import {
  Table,
  Text,
  Badge,
  ActionIcon,
  Group,
  Box,
  ScrollArea,
  Avatar,
} from "@mantine/core";
// ******************************** Icons ********************************

import {
  IconEye,
  IconCheck,
  IconX,
  IconDotsVertical,
} from "@tabler/icons-react";
// ******************************** Components ********************************

import BookingModal from "../../Modal/Booking/BookingModal";
import { useDisclosure } from "@mantine/hooks";

const BookingRequestTable = () => {
  const rows = [
    {
      id: "BK-001",
      customer: "Ahmed Mohamed",
      room: "Deluxe Suite",
      checkIn: "2024-01-20",
      checkOut: "2024-01-25",
      guests: 2,
      total: "$1,250",
      payment: "paid",
      status: "confirmed",
    },
    {
      id: "BK-002",
      customer: "Sara Hassan",
      room: "Standard Room",
      checkIn: "2024-01-21",
      checkOut: "2024-01-23",
      guests: 1,
      total: "$450",
      payment: "pending",
      status: "pending",
    },
    {
      id: "BK-003",
      customer: "John Doe",
      room: "Executive Suite",
      checkIn: "2024-01-22",
      checkOut: "2024-01-28",
      guests: 3,
      total: "$2,100",
      payment: "paid",
      status: "confirmed",
    },
    {
      id: "BK-004",
      customer: "Fatima Ali",
      room: "Family Room",
      checkIn: "2024-01-23",
      checkOut: "2024-01-26",
      guests: 4,
      total: "$980",
      payment: "pending",
      status: "pending",
    },
    {
      id: "BK-005",
      customer: "Omar Khaled",
      room: "Single Room",
      checkIn: "2024-01-24",
      checkOut: "2024-01-25",
      guests: 1,
      total: "$180",
      payment: "paid",
      status: "cancelled",
    },
  ];

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box>
      <BookingModal opened={opened} close={close} />
      <ScrollArea>
        <Table striped highlightOnHover withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Booking ID</Table.Th>
              <Table.Th>Customer</Table.Th>
              <Table.Th>Room</Table.Th>
              <Table.Th>Check-In</Table.Th>
              <Table.Th>Check-Out</Table.Th>
              <Table.Th>Guests</Table.Th>
              <Table.Th>Total</Table.Th>
              <Table.Th>Payment</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows.map((row, i) => (
              <Table.Tr key={i}>
                <Table.Td>
                  <Text size="sm" fw={500}>
                    {row.id}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Group gap="sm">
                    <Avatar size="sm" radius="xl" color="primary">
                      {row.customer[0]}
                    </Avatar>
                    <Text size="sm">{row.customer}</Text>
                  </Group>
                </Table.Td>
                <Table.Td>
                  <Text size="sm">{row.room}</Text>
                </Table.Td>
                <Table.Td>
                  <Text size="sm">{row.checkIn}</Text>
                </Table.Td>
                <Table.Td>
                  <Text size="sm">{row.checkOut}</Text>
                </Table.Td>
                <Table.Td>
                  <Text size="sm">{row.guests}</Text>
                </Table.Td>
                <Table.Td>
                  <Text size="sm" fw={600}>
                    {row.total}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Badge
                    size="sm"
                    radius="xl"
                    color={row.payment === "paid" ? "green" : "orange"}
                    variant="light"
                  >
                    {row.payment}
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <Badge
                    size="sm"
                    radius="xl"
                    color={
                      row.status === "confirmed"
                        ? "green"
                        : row.status === "pending"
                          ? "orange"
                          : "red"
                    }
                  >
                    {row.status}
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <Group gap="xs">
                    <ActionIcon
                      size="sm"
                      variant="light"
                      color="blue"
                      onClick={open}
                    >
                      <IconEye size={16} />
                    </ActionIcon>
                    <ActionIcon size="sm" variant="light" color="green">
                      <IconCheck size={16} />
                    </ActionIcon>
                    <ActionIcon size="sm" variant="light" color="red">
                      <IconX size={16} />
                    </ActionIcon>
                    <ActionIcon size="sm" variant="light">
                      <IconDotsVertical size={16} />
                    </ActionIcon>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </Box>
  );
};

export default BookingRequestTable;
