import React, { useState } from "react";
// ******************************** Mantline UI ********************************

import {
  Table,
  Badge,
  ActionIcon,
  Group,
  Text,
  Avatar,
  ScrollArea,
  Box,
  Stack,
  Card,
  SimpleGrid,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

// ******************************** Icons ********************************

import { IconPencil, IconTrash } from "@tabler/icons-react";
// ******************************** Utils ********************************

import Screens from "../../../Utils/Screens/Screens";
// ******************************** Components ********************************

import ManageRoomModal from "../../Modal/Room/ManageRoomModal";
import DeleteRoom from "../../Modal/Room/DeleteRoom";

const roomData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400",
    name: "Deluxe Ocean View",
    description: "Stunning ocean views with luxury amenities...",
    type: "Deluxe",
    price: 250,
    maxGuests: 2,
    status: "Available",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400",
    name: "Executive Suite",
    description: "Premium suite with living area...",
    type: "Suite",
    price: 450,
    maxGuests: 4,
    status: "Available",
  },
];

const ManageRoomsTable = () => {
  const { isMobile } = Screens();

  const [opened, { open, close }] = useDisclosure(false);
  const [openedDelete, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);

  const [room, setRoom] = useState(null);
  const [mode, setMode] = useState("view");

  const renderBadge = (status) => (
    <Badge
      color={
        status === "Available"
          ? "green"
          : status === "Booked"
            ? "orange"
            : "gray"
      }
      variant="filled"
    >
      {status}
    </Badge>
  );

  const Actions = ({ room }) => (
    <Group gap={5}>
      <ActionIcon
        variant="subtle"
        onClick={() => {
          setRoom(room);
          setMode("edit");
          open();
        }}
      >
        <IconPencil size={18} />
      </ActionIcon>

      <ActionIcon
        color="red"
        variant="light"
        onClick={() => {
          setRoom(room);
          openDelete();
        }}
      >
        <IconTrash size={18} />
      </ActionIcon>
    </Group>
  );

  if (isMobile) {
    return (
      <>
        <SimpleGrid cols={1}>
          {roomData.map((room) => (
            <Card key={room.id} withBorder>
              <Group>
                <Avatar src={room.image} size="lg" />

                <Box style={{ flex: 1 }}>
                  <Text fw={600}>{room.name}</Text>
                  <Text size="xs" c="dimmed">
                    {room.description}
                  </Text>

                  <Group justify="space-between" mt="sm">
                    <Text fw={700}>${room.price}</Text>
                    {renderBadge(room.status)}
                  </Group>
                </Box>

                <Actions room={room} />
              </Group>
            </Card>
          ))}
        </SimpleGrid>

        <ManageRoomModal
          opened={opened}
          close={close}
          room={room}
          mode={mode}
        />
      </>
    );
  }

  return (
    <>
      <ManageRoomModal opened={opened} close={close} room={room} mode={mode} />

      <DeleteRoom opened={openedDelete} close={closeDelete} room={room} />

      <ScrollArea>
        <Table highlightOnHover withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Room</Table.Th>
              <Table.Th>Type</Table.Th>
              <Table.Th>Price</Table.Th>
              <Table.Th>Guests</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {roomData.map((room) => (
              <Table.Tr key={room.id}>
                <Table.Td>
                  <Group>
                    <Avatar src={room.image} />
                    <div>
                      <Text fw={500}>{room.name}</Text>
                      <Text size="xs" c="dimmed">
                        {room.description}
                      </Text>
                    </div>
                  </Group>
                </Table.Td>

                <Table.Td>{room.type}</Table.Td>
                <Table.Td fw={700}>${room.price}</Table.Td>
                <Table.Td>{room.maxGuests}</Table.Td>
                <Table.Td>{renderBadge(room.status)}</Table.Td>

                <Table.Td>
                  <Actions room={room} />
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </>
  );
};

export default ManageRoomsTable;
