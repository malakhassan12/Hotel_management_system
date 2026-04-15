// ******************************** Mantline UI ********************************

import {
  Box,
  Grid,
  Space,
  Image,
  Text,
  Title,
  Group,
  Badge,
  Button,
  Stack,
  Divider,
  Rating,
  ThemeIcon,
  List,
  Paper,
} from "@mantine/core";
import React from "react";
import { Link, useParams } from "react-router-dom";
import BackBtn from "../../Components/Buttons/BackBtn";
import {
  IconBed,
  IconUsers,
  IconCheck,
  IconMapPin,
  IconClock,
} from "@tabler/icons-react";

const RoomDetails = () => {
  const { roomId } = useParams();

  const role = "receptionist";
  const room = {
    id: roomId,
    title: "Family Suite",
    category: "Suite Room",
    price: "$380",
    status: "Available",
    rating: 4.8,
    reviews: 125,
    maxGuests: 6,
    description:
      "Spacious family suite with two bedrooms, kids area, and connecting bathroom. Perfect for families traveling with children.",
    features: [
      "2 Bedrooms",
      "Kids Area",
      "Kitchen",
      "Balcony",
      "WiFi",
      "Smart TV",
    ],
    amenities: [
      "Free WiFi included",
      "Complimentary breakfast",
      "24/7 room service",
      "Airport shuttle available",
    ],
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop",
    ],
  };

  return (
    <div>
      <Space h="md" />
      <Box>
        <BackBtn />
      </Box>
      <Space h="md" />

      <Box>
        <Grid gutter="xl">
          <Grid.Col
            span={role === "receptionist" ? { base: 12 } : { base: 12, lg: 8 }}
          >
            {" "}
            <Stack gap="xl">
              <div>
                <Group gap="sm" mb={4}>
                  <Badge size="lg" radius="xl" color="primary" variant="light">
                    {room.category}
                  </Badge>
                  <Group gap={4}>
                    <Rating
                      value={room.rating}
                      fractions={2}
                      readOnly
                      size="sm"
                    />
                    <Text size="sm" fw={500}>
                      {room.rating}
                    </Text>
                    <Text size="xs" c="dimmed">
                      ({room.reviews} reviews)
                    </Text>
                  </Group>
                </Group>
                <Title order={3} fw={"bold"}>
                  {room.title}
                </Title>
              </div>

              <Paper withBorder radius="md" p="sm">
                <Image
                  src={room.images[0]}
                  height={400}
                  alt={room.title}
                  radius="md"
                  fallbackSrc="https://placehold.co/800x500?text=Room+Image"
                />
                <Group mt="sm" gap="sm">
                  {room.images.slice(1).map((img, i) => (
                    <Image
                      key={i}
                      src={img}
                      height={80}
                      width={100}
                      radius="md"
                      style={{ cursor: "pointer", objectFit: "cover" }}
                    />
                  ))}
                </Group>
              </Paper>

              {/* الوصف */}
              <div>
                <Title order={3} mb="sm">
                  Description
                </Title>
                <Text size="md" c="dimmed" lh={1.6}>
                  {room.description}
                </Text>
              </div>

              <Divider />

              {/* Room Features */}
              <div>
                <Title order={3} mb="md">
                  Room Features
                </Title>
                <Grid>
                  {room.features.map((feature, i) => (
                    <Grid.Col key={i} span={4}>
                      <Group gap="xs">
                        <IconBed
                          size={16}
                          color="var(--mantine-color-primary-6)"
                        />
                        <Text size="sm">{feature}</Text>
                      </Group>
                    </Grid.Col>
                  ))}
                </Grid>
              </div>

              <Divider />

              {/* Guest Info & Rating */}
              <Group justify="space-between" wrap="wrap">
                <Group gap="xs">
                  <ThemeIcon
                    size="md"
                    radius="xl"
                    variant="light"
                    color="primary"
                  >
                    <IconUsers size={16} />
                  </ThemeIcon>
                  <Text size="sm" fw={500}>
                    Max {room.maxGuests} Guests
                  </Text>
                </Group>
                <Group gap="xs">
                  <IconMapPin size={16} />
                  <Text size="sm" c="dimmed">
                    City Center, 5 min from beach
                  </Text>
                </Group>
              </Group>

              <Divider />

              {/* Amenities List */}
              <div>
                <Title order={4} mb="md">
                  Amenities
                </Title>
                <List
                  spacing="sm"
                  size="sm"
                  icon={
                    <ThemeIcon color="green" size={20} radius="xl">
                      <IconCheck size={12} />
                    </ThemeIcon>
                  }
                >
                  {room.amenities.map((amenity, i) => (
                    <List.Item key={i}>{amenity}</List.Item>
                  ))}
                </List>
              </div>
            </Stack>
          </Grid.Col>

          <Grid.Col
            span={{ base: 12, lg: 4 }}
            style={{
              display: role === "receptionist" ? "none" : "block",
            }}
          >
            <Box
              style={{
                position: "sticky",
                top: 80,
                alignSelf: "start",
              }}
            >
              <Paper
                withBorder
                p="xl"
                radius="lg"
                shadow="md"
                bg="var(--mantine-color-body)"
              >
                <Stack gap="lg">
                  {/* Available Badge */}
                  <Badge
                    size="xl"
                    radius="xl"
                    color="green"
                    variant="light"
                    fullWidth
                    style={{ textAlign: "center", padding: "8px" }}
                  >
                    {room.status}
                  </Badge>

                  {/* Book This Room */}
                  <div>
                    <Title order={3} mb={4}>
                      Book This Room
                    </Title>
                    <Text size="sm" c="dimmed">
                      Reserve your perfect stay
                    </Text>
                  </div>

                  <Divider />

                  {/* Price */}
                  <Group justify="space-between" align="center">
                    <div>
                      <Text size="xs" c="dimmed" tt="uppercase">
                        Price per night
                      </Text>
                      <Text size="2rem" fw={700} c="primary">
                        {room.price}
                      </Text>
                    </div>
                    <Badge size="lg" radius="xl" color="green" variant="light">
                      {room.status}
                    </Badge>
                  </Group>

                  {/* Book Now Button */}

                  <Button
                    component={Link}
                    to={`/receptionist/rooms/${room.id}`}
                    variant="light"
                    color="primary"
                    size="sm"
                  >
                    Book Now
                  </Button>

                  {/* Cancellation Policy */}
                  <Group gap="xs" justify="center">
                    <IconClock size={14} />
                    <Text size="xs" c="dimmed">
                      Free cancellation within 24 hours
                    </Text>
                  </Group>

                  <Divider />

                  {/* Amenities Short List */}
                  <Stack gap="xs">
                    {room.amenities.map((amenity, i) => (
                      <Group key={i} gap="xs">
                        <IconCheck
                          size={14}
                          color="var(--mantine-color-green-6)"
                        />
                        <Text size="sm" c="dimmed">
                          {amenity}
                        </Text>
                      </Group>
                    ))}
                  </Stack>
                </Stack>
              </Paper>
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
    </div>
  );
};

export default RoomDetails;
