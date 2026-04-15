// ******************************** Mantline UI ********************************

import {
  Modal,
  Button,
  Group,
  Badge,
  Text,
  Divider,
  Grid,
  Stack,
  Paper,
  Title,
} from "@mantine/core";
// ******************************** Icons ********************************

import {
  IconX,
  IconCheck,
  IconUser,
  IconMail,
  IconBed,
  IconUsers,
  IconCalendar,
  IconCreditCard,
  IconCurrencyDollar,
} from "@tabler/icons-react";
// ******************************** Functions ********************************

import getStatusColor from "../../../Functions/Booking/getStatusColor";
import getPaymentStatusColor from "../../../Functions/Payment/getPaymentStatusColor";

const BookingModal = ({ opened, close, booking }) => {
  const defaultBooking = {
    id: "B001",
    status: "Pending",
    customerName: "John Doe",
    email: "john@example.com",
    room: "Standard Room",
    guests: 2,
    checkIn: "2024-04-10",
    checkOut: "2024-04-15",
    paymentMethod: "Online",
    paymentStatus: "Pending",
    totalAmount: "$600",
  };

  const data = booking || defaultBooking;

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={
          <Group gap="sm">
            <Text size="lg" fw={700}>
              Booking Details
            </Text>
            <Badge size="lg" radius="xl" color={getStatusColor(data)}>
              {data.status}
            </Badge>
          </Group>
        }
        centered
        transitionProps={{
          transition: "fade",
          duration: 300, // 600ms is a bit slow; 300ms is the "sweet spot"
          timingFunction: "ease", // much smoother than linear
        }}
      >
        <Stack gap="md">
          {/* Description */}
          <Text size="sm" c="dimmed">
            Complete information about this booking
          </Text>

          <Divider />

          {/* Booking ID and Status */}
          <Group justify="space-between" align="center">
            <div>
              <Text size="xs" c="dimmed" tt="uppercase" fw={600}>
                Booking ID
              </Text>
              <Text size="xl" fw={700}>
                {data.id}
              </Text>
            </div>
            <Badge
              size="xl"
              radius="md"
              color={getStatusColor(data)}
              variant="light"
            >
              {data.status}
            </Badge>
          </Group>

          <Divider />

          {/* Customer Information */}
          <Paper withBorder p="md" radius="md" bg="var(--mantine-color-body)">
            <Text size="sm" fw={600} mb="md" c="primary">
              Customer Information
            </Text>
            <Grid>
              <Grid.Col span={6}>
                <Group gap="xs">
                  <IconUser size={16} />
                  <Text size="sm" c="dimmed">
                    Customer Name
                  </Text>
                </Group>
                <Text size="sm" fw={500}>
                  {data.customerName}
                </Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <Group gap="xs">
                  <IconMail size={16} />
                  <Text size="sm" c="dimmed">
                    Email
                  </Text>
                </Group>
                <Text size="sm" fw={500}>
                  {data.email}
                </Text>
              </Grid.Col>
            </Grid>
          </Paper>

          {/* Room & Guests Information */}
          <Paper withBorder p="md" radius="md" bg="var(--mantine-color-body)">
            <Text size="sm" fw={600} mb="md" c="primary">
              Room Details
            </Text>
            <Grid>
              <Grid.Col span={6}>
                <Group gap="xs">
                  <IconBed size={16} />
                  <Text size="sm" c="dimmed">
                    Room
                  </Text>
                </Group>
                <Text size="sm" fw={500}>
                  {data.room}
                </Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <Group gap="xs">
                  <IconUsers size={16} />
                  <Text size="sm" c="dimmed">
                    Guests
                  </Text>
                </Group>
                <Text size="sm" fw={500}>
                  {data.guests}
                </Text>
              </Grid.Col>
            </Grid>
          </Paper>

          {/* Dates Information */}
          <Paper withBorder p="md" radius="md" bg="var(--mantine-color-body)">
            <Text size="sm" fw={600} mb="md" c="primary">
              Stay Period
            </Text>
            <Grid>
              <Grid.Col span={6}>
                <Group gap="xs">
                  <IconCalendar size={16} />
                  <Text size="sm" c="dimmed">
                    Check-In
                  </Text>
                </Group>
                <Text size="sm" fw={500}>
                  {data.checkIn}
                </Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <Group gap="xs">
                  <IconCalendar size={16} />
                  <Text size="sm" c="dimmed">
                    Check-Out
                  </Text>
                </Group>
                <Text size="sm" fw={500}>
                  {data.checkOut}
                </Text>
              </Grid.Col>
            </Grid>
          </Paper>

          {/* Payment Information */}
          <Paper withBorder p="md" radius="md" bg="var(--mantine-color-body)">
            <Text size="sm" fw={600} mb="md" c="primary">
              Payment Details
            </Text>
            <Grid>
              <Grid.Col span={6}>
                <Group gap="xs">
                  <IconCreditCard size={16} />
                  <Text size="sm" c="dimmed">
                    Payment Method
                  </Text>
                </Group>
                <Text size="sm" fw={500}>
                  {data.paymentMethod}
                </Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <Group gap="xs">
                  <IconCurrencyDollar size={16} />
                  <Text size="sm" c="dimmed">
                    Payment Status
                  </Text>
                </Group>
                <Badge
                  size="sm"
                  radius="xl"
                  color={getPaymentStatusColor(data)}
                  variant="light"
                >
                  {data.paymentStatus}
                </Badge>
              </Grid.Col>
            </Grid>
            <Divider my="sm" />
            <Group justify="space-between">
              <Text size="sm" fw={600}>
                Total Amount
              </Text>
              <Text size="xl" fw={700} c="primary">
                {data.totalAmount}
              </Text>
            </Group>
          </Paper>

          <Divider />

          {/* Action Buttons */}
          <Group justify="space-between" mt="md">
            <Button
              variant="outline"
              color="red"
              leftSection={<IconX size={16} />}
              onClick={close}
            >
              Reject
            </Button>
            <Button
              variant="filled"
              color="green"
              leftSection={<IconCheck size={16} />}
              onClick={close}
            >
              Accept
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
};

export default BookingModal;
