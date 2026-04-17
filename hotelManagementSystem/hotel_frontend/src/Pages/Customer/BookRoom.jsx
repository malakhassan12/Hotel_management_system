import {
  Container,
  Grid,
  Card,
  Image,
  Text,
  Title,
  Stack,
  Button,
  NumberInput,
  Textarea,
} from "@mantine/core";

import { DateInput } from "@mantine/dates";
import { useParams } from "react-router-dom";
import { useState } from "react";

const rooms = [
  {
    id: "1",
    title: "Deluxe Ocean View",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900",
    description: "Luxury room with ocean view and balcony.",
  },
  {
    id: "2",
    title: "Executive Suite",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900",
    description: "Premium suite with living room.",
  },
];

const BookRoom = () => {
  const { roomId } = useParams();

  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(2);
  const [notes, setNotes] = useState("");

  const room = rooms.find((r) => r.id === roomId);

  if (!room) {
    return <Text>Room not found</Text>;
  }

  return (
    <Container size="lg" py="lg">
      <Title order={2} mb="lg">
        Book Room
      </Title>

      <Grid>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Card withBorder radius="lg">
            <Image src={room.image} h={260} radius="md" />
            <Stack mt="md">
              <Title order={3}>{room.title}</Title>
              <Text c="dimmed">{room.description}</Text>
              <Text fw={700} size="xl" c="blue">
                ${room.price} / night
              </Text>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 5 }}>
          <Card withBorder radius="lg">
            <Stack>
              <DateInput
                label="Check In"
                value={checkIn}
                onChange={setCheckIn}
              />

              <DateInput
                label="Check Out"
                value={checkOut}
                onChange={setCheckOut}
              />

              <NumberInput
                label="Guests"
                value={guests}
                onChange={setGuests}
                min={1}
                max={6}
              />

              <Textarea
                label="Special Requests"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />

              <Button fullWidth mt="md">
                Confirm Booking
              </Button>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default BookRoom;