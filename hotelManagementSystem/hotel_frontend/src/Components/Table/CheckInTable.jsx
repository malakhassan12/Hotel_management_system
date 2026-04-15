import { useState } from "react";
// ******************************** Mantline UI ********************************

import {
  Table,
  Text,
  Badge,
  Group,
  Avatar,
  ActionIcon,
  ScrollArea,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

// ******************************** Icons ********************************

import { IconEye, IconCheck, IconX, IconReceipt } from "@tabler/icons-react";
// ******************************** Compoenents ********************************

import CustomerModal from "../Modal/Customer/CustomerModal";
import RoomModal from "../Modal/Room/RoomModal";
import BookingModal from "../Modal/Booking/BookingModal";

const CheckInTable = () => {
  // Booking Modal state
  const [selectedBooking, setSelectedBooking] = useState(null);

  const [opened, { open, close }] = useDisclosure(false);

  const [customerModalOpen, setCustomerModalOpen] = useState(false);
  const [roomModalOpen, setRoomModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const checkins = [
    {
      id: "CHK001",
      bookingId: "B004",
      customer: {
        name: "John Doe",
        email: "john@example.com",
        phone: "+1 234 567 8901",
        idNumber: "A12345678",
        nationality: "American",
        address: "123 Main Street, New York, USA",
        passportImage: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      room: {
        id: "R101",
        number: "101",
        type: "Executive Suite",
        floor: 1,
        price: "$250",
        maxGuests: 2,
        beds: "King Bed",
        amenities: ["Free WiFi", "Air Conditioning", "Smart TV", "Mini Bar"],
      },
      checkInDate: "2026-04-06",
      checkOutDate: "2026-04-09",
      numberOfGuests: 2,
      paymentStatus: "Paid",
      totalAmount: "$600",
      checkInStatus: "Checked-in",
    },
    {
      id: "CHK002",
      bookingId: "B005",
      customer: {
        name: "Sarah Ahmed",
        email: "sarah@example.com",
        phone: "+20 123 456 789",
        idNumber: "E98765432",
        nationality: "Egyptian",
        address: "45 Nile Street, Cairo, Egypt",
        passportImage: "https://randomuser.me/api/portraits/women/1.jpg",
      },
      room: {
        id: "R204",
        number: "204",
        type: "Deluxe Suite",
        floor: 2,
        price: "$375",
        maxGuests: 2,
        beds: "Queen Bed",
        amenities: ["Free WiFi", "Air Conditioning", "Smart TV", "Balcony"],
      },
      checkInDate: "2026-04-07",
      checkOutDate: "2026-04-10",
      numberOfGuests: 2,
      paymentStatus: "Paid",
      totalAmount: "$750",
      checkInStatus: "Pending",
    },
    {
      id: "CHK003",
      bookingId: "B006",
      customer: {
        name: "Michael Smith",
        email: "michael@example.com",
        phone: "+44 20 7946 0138",
        idNumber: "M45678901",
        nationality: "British",
        address: "12 Baker Street, London, UK",
        passportImage: "https://randomuser.me/api/portraits/men/2.jpg",
      },
      room: {
        id: "R310",
        number: "310",
        type: "Standard Room",
        floor: 3,
        price: "$180",
        maxGuests: 1,
        beds: "Single Bed",
        amenities: ["Free WiFi", "Air Conditioning", "TV"],
      },
      checkInDate: "2026-04-07",
      checkOutDate: "2026-04-08",
      numberOfGuests: 1,
      paymentStatus: "Unpaid",
      totalAmount: "$180",
      checkInStatus: "Pending",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Checked-in":
        return "green";
      case "Checked-out":
        return "blue";
      case "Pending":
        return "orange";
      default:
        return "gray";
    }
  };

  const handleCustomerClick = (customer) => {
    setSelectedCustomer(customer);
    setCustomerModalOpen(true);
  };

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    setRoomModalOpen(true);
  };

  const handleConfirm = (checkin) => {
    // Logic for confirm check-in
    console.log("Confirmed:", checkin.id);
  };

  const handleReject = (checkin) => {
    // Logic for reject check-in
    console.log("Rejected:", checkin.id);
  };

  const rows = checkins.map((checkin) => (
    <Table.Tr key={checkin.id}>
      <Table.Td>
        <Text
          size="sm"
          fw={500}
          style={{
            cursor: "pointer",
            color: "var(--mantine-color-primary-6)",
            textDecoration: "underline",
          }}
          onClick={() => {
            setSelectedBooking(checkin.bookingDetails);
            open();
          }}
        >
          {checkin.bookingId}
        </Text>
      </Table.Td>

      {/* باقي الأعمدة كما هي */}
      <Table.Td>
        <Group gap="sm">
          <Avatar size="sm" radius="xl" color="primary">
            {checkin.customer.name.charAt(0)}
          </Avatar>
          <div>
            <Text
              size="sm"
              fw={500}
              style={{
                cursor: "pointer",
                color: "var(--mantine-color-primary-6)",
              }}
              onClick={() => handleCustomerClick(checkin.customer)}
            >
              {checkin.customer.name}
            </Text>
            <Text size="xs" c="dimmed">
              {checkin.customer.phone}
            </Text>
          </div>
        </Group>
      </Table.Td>

      <Table.Td>
        <Text
          size="sm"
          style={{ cursor: "pointer", color: "var(--mantine-color-primary-6)" }}
          onClick={() => handleRoomClick(checkin.room)}
        >
          Room {checkin.room.number}
        </Text>
        <Text size="xs" c="dimmed">
          {checkin.room.type}
        </Text>
      </Table.Td>

      <Table.Td>
        <Text size="sm">{checkin.checkInDate}</Text>
        <Text size="xs" c="dimmed">
          → {checkin.checkOutDate}
        </Text>
      </Table.Td>

      <Table.Td ta="center">{checkin.numberOfGuests}</Table.Td>

      <Table.Td>
        <Text size="sm" fw={600}>
          {checkin.totalAmount}
        </Text>
        <Badge
          size="xs"
          radius="xl"
          color={checkin.paymentStatus === "Paid" ? "green" : "orange"}
          variant="light"
        >
          {checkin.paymentStatus}
        </Badge>
      </Table.Td>

      <Table.Td>
        <Badge
          size="md"
          radius="xl"
          color={getStatusColor(checkin.checkInStatus)}
        >
          {checkin.checkInStatus}
        </Badge>
      </Table.Td>

      <Table.Td>
        {checkin.checkInStatus === "Pending" ? (
          <Group gap="xs">
            <ActionIcon
              size="sm"
              variant="filled"
              color="green"
              onClick={() => handleConfirm(checkin)}
            >
              <IconCheck size={16} />
            </ActionIcon>
            <ActionIcon
              size="sm"
              variant="outline"
              color="red"
              onClick={() => handleReject(checkin)}
            >
              <IconX size={16} />
            </ActionIcon>
          </Group>
        ) : (
          <Group gap="xs">
            <ActionIcon size="sm" variant="light" color="blue">
              <IconEye size={16} />
            </ActionIcon>
            <ActionIcon size="sm" variant="light" color="gray">
              <IconReceipt size={16} />
            </ActionIcon>
          </Group>
        )}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Box>
      <ScrollArea>
        <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Check-In ID</Table.Th>
              <Table.Th>Customer</Table.Th>
              <Table.Th>Room</Table.Th>
              <Table.Th>Dates</Table.Th>
              <Table.Th ta="center">Guests</Table.Th>
              <Table.Th>Payment</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th ta="center">Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>

      {/* Modals */}
      <CustomerModal
        opened={customerModalOpen}
        close={() => setCustomerModalOpen(false)}
        customer={selectedCustomer}
      />

      <BookingModal opened={opened} close={close} booking={selectedBooking} type="check-in" />

      <RoomModal
        opened={roomModalOpen}
        close={() => setRoomModalOpen(false)}
        room={selectedRoom}
      />
    </Box>
  );
};

export default CheckInTable;
