import { Modal, Group, Text, Stack, Badge, Paper, Grid, Image } from "@mantine/core";
import {
  IconBed,
  IconUsers,
  IconWifi,
  IconAirConditioning,
  IconParking,
  IconCoffee,
  IconDeviceTv,
  IconBath
} from "@tabler/icons-react";
const RoomModal = ({ opened, close, room }) => {
  const defaultRoom = {
    id: "R101",
    number: "101",
    type: "Executive Suite",
    floor: 1,
    price: "$250",
    status: "Available",
    maxGuests: 2,
    size: "45m²",
    beds: "King Bed",
    amenities: ["Free WiFi", "Air Conditioning", "Smart TV", "Mini Bar", "Room Service", "Bathtub"],
    images: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=250&fit=crop"],
    description: "Luxurious executive suite with stunning ocean views, perfect for business travelers.",
  };

  const data = room || defaultRoom;

  const amenitiesIcons = {
    "Free WiFi": IconWifi,
    "Air Conditioning": IconAirConditioning,
    "Smart TV": IconDeviceTv,
    "Mini Bar": IconCoffee,
    "Room Service": IconCoffee,
    "Bathtub": IconBath,
    "Free Parking": IconParking,
  };

  return (
    <Modal
      opened={opened}
      onClose={close}
      title={
        <Group gap="sm">
          <Text size="lg" fw={700}>Room Details</Text>
          <Badge size="lg" radius="xl" color="primary">Room {data.number}</Badge>
        </Group>
      }
      
      transitionProps={{ transition: "fade", duration: 300 }}
    >
      <Stack gap="md">
        {/* Room Image */}
        {data.images && data.images[0] && (
          <Image
            src={data.images[0]}
            height={200}
            alt={data.type}
            radius="md"
            fallbackSrc="https://placehold.co/400x200?text=Room+Image"
          />
        )}

        {/* Room Basic Info */}
        <Paper withBorder p="md" radius="md" bg="var(--mantine-color-body)">
          <Grid>
            <Grid.Col span={6}>
              <Group gap="xs">
                <IconBed size={14} />
                <Text size="xs" c="dimmed">Room Type</Text>
              </Group>
              <Text size="sm" fw={500}>{data.type}</Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Group gap="xs">
                <Text size="xs" c="dimmed">Floor</Text>
              </Group>
              <Text size="sm">Floor {data.floor}</Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Group gap="xs">
                <IconUsers size={14} />
                <Text size="xs" c="dimmed">Max Guests</Text>
              </Group>
              <Text size="sm">{data.maxGuests} Guests</Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Group gap="xs">
                <Text size="xs" c="dimmed">Bed Type</Text>
              </Group>
              <Text size="sm">{data.beds}</Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Text size="xs" c="dimmed">Room Size</Text>
              <Text size="sm">{data.size}</Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Text size="xs" c="dimmed">Price per night</Text>
              <Text size="sm" fw={700} c="primary">{data.price}</Text>
            </Grid.Col>
          </Grid>
        </Paper>

        {/* Description */}
        {data.description && (
          <Paper withBorder p="md" radius="md" bg="var(--mantine-color-body)">
            <Text size="sm" fw={600} mb="md" c="primary">Description</Text>
            <Text size="sm" c="dimmed">{data.description}</Text>
          </Paper>
        )}

        {/* Amenities */}
        <Paper withBorder p="md" radius="md" bg="var(--mantine-color-body)">
          <Text size="sm" fw={600} mb="md" c="primary">Amenities</Text>
          <Group gap="sm">
            {data.amenities.map((amenity, i) => {
              const Icon = amenitiesIcons[amenity] || IconWifi;
              return (
                <Badge key={i} size="lg" radius="xl" variant="light" color="gray" leftSection={<Icon size={12} />}>
                  {amenity}
                </Badge>
              );
            })}
          </Group>
        </Paper>
      </Stack>
    </Modal>
  );
};

export default RoomModal;