import {
  Container,
  Title,
  Text,
  Stack,
  Grid,
  Alert,
} from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";
import { useState } from "react";

import BookingsTabs from "../../Components/Tabs/Customer/BookingsTabs";
import BookingsTable from "../../Components/Table/Customer/BookingsTable";

import useBookingHistory from "../../Hooks/Booking/useBookingHistory";
import useBookingsByStatus from "../../Hooks/Booking/useBookingsByStatus";

const MyBookings = () => {
  const [activeTab, setActiveTab] = useState("all");

 
  const historyQuery = useBookingHistory();

  const statusQuery = useBookingsByStatus(
    activeTab === "all" ? null : activeTab.toUpperCase()
  );

 
  const apiBookings =
    activeTab === "all"
      ? historyQuery.data || []
      : statusQuery.data || [];

  const isLoading =
    activeTab === "all"
      ? historyQuery.isLoading
      : statusQuery.isLoading;

  const error =
    activeTab === "all"
      ? historyQuery.error
      : statusQuery.error;

 
  const statusMap = {
    PENDING: "pending",
    ACCEPTED: "confirmed",
    CHECKED_IN: "checked-in",
  };

  const bookings = apiBookings.map((b) => ({
    id: b.id,
    room: `Room ${b.roomId}`,
    checkIn: new Date(b.check_in_Date).toLocaleDateString(),
    checkOut: new Date(b.check_out_Date).toLocaleDateString(),
    guests: b.totalGuests,
    total: b.totalPrice,
    status: statusMap[b.status] || "pending",
  }));

  
  const filteredBookings = bookings;


  if (isLoading) {
    return (
      <Container size="xl" py="xl">
        <Stack gap="xl">
          <Title order={1}>My Bookings</Title>
          <Text c="dimmed">Loading your bookings...</Text>
        </Stack>
      </Container>
    );
  }

 
  if (error) {
    return (
      <Container size="xl" py="xl">
        <Grid>
          <Grid.Col span={12}>
            <Alert
              icon={<IconAlertCircle size={16} />}
              title="Error Loading Bookings"
              color="red"
              variant="filled"
            >
              Failed to load bookings. Please refresh the page.
            </Alert>
          </Grid.Col>
        </Grid>
      </Container>
    );
  }

  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1}>My Bookings</Title>
          <Text c="dimmed">
            View and manage your reservations
          </Text>
        </div>

        <BookingsTabs
          tabs={[
            { key: "all", label: "All Bookings" },
            { key: "pending", label: "Pending" },
            { key: "confirmed", label: "Confirmed" },
            { key: "checked-in", label: "Checked-In" },
          ]}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <BookingsTable bookings={filteredBookings} />
      </Stack>
    </Container>
  );
};

export default MyBookings;