import {
  Container,
  Title,
  Text,
  Stack,
  Alert,
  Center,
  Paper,
  ThemeIcon,
  Group,
  Box,
} from "@mantine/core";
import {
  IconAlertCircle,
  IconCalendarStats,
  IconBookmark,
  IconBookmarkPlus,
} from "@tabler/icons-react";
import { useState } from "react";

import BookingsTabs from "../../Components/Tabs/Customer/BookingsTabs";
import BookingsTable from "../../Components/Table/Customer/BookingsTable";

import useBookingHistory from "../../Hooks/Customer/useBookingHistory";
import Loading from "../../Components/Loader/Loading";
import Error from "../../Components/Loader/Error";
import InitialBox from "../../Components/Box/InitialBox";

const MyBookings = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Fetch all bookings
  const {
    data: historyQuery,
    isLoading: isLoadingAll,
    error: errorAll,
  } = useBookingHistory();

  console.log(historyQuery);
  // Fetch bookings by status based on active tab
  // const { data: statusData, isLoading: isLoadingStatus, error: errorStatus } = useBookingsByStatus(
  //   activeTab !== "all" ? getStatusValue(activeTab) : null
  // );

  // Helper function to map tab to status value
  // function getStatusValue(tab) {
  //   const statusMap = {
  //     pending: "PENDING",
  //     confirmed: "ACCEPTED",
  //     "checked-in": "CHECKED_IN",
  //   };
  //   return statusMap[tab];
  // }

  // Get data based on active tab
  const getBookingsData = () => {
    if (activeTab === "all") {
      return historyQuery || [];
    }
    // return statusData || [];
    return [];
  };

  // Get loading state

  // Get error state

  const bookingsData = getBookingsData();

  // Transform bookings to table format (without status)
  const bookings = bookingsData.map((b) => ({
    id: b.id,
    room: `Room ${b.roomId}`,
    checkIn: new Date(b.check_in_Date).toLocaleDateString(),
    checkOut: new Date(b.check_out_Date).toLocaleDateString(),
    guests: b.totalGuests || 2,
    total: b.totalPrice,
    phone: b.phone,
    paymentStatus: b.paymentStatus,
    createdAt: b.created_at,
    status : b.status
  }));

  // Filter bookings for specific status tabs
  const getFilteredBookings = () => {
    if (activeTab === "all") return bookings;

    const statusMap = {
      pending: "PENDING",
      confirmed: "ACCEPTED",
      "checked-in": "CHECKED_IN",
    };

    const targetStatus = statusMap[activeTab];
    const originalBookings = bookingsData.filter(
      (b) => b.status === targetStatus,
    );

    return originalBookings.map((b) => ({
      id: b.id,
      room: `Room ${b.roomId}`,
      checkIn: new Date(b.check_in_Date).toLocaleDateString(),
      checkOut: new Date(b.check_out_Date).toLocaleDateString(),
      guests: b.totalGuests || 2,
      total: b.totalPrice,
      phone: b.phone,
      paymentStatus: b.paymentStatus,
      createdAt: b.created_at,
    }));
  };

  const filteredBookings = getFilteredBookings();

  // Loading state
  if (isLoadingAll) {
    return <Loading name={"Bookings"} />;
  }

  // Error state
  if (errorAll) {
    return <Error name={"Bookings"} error={errorAll} />;
  }

  // Get counts for tabs
  const getTabCounts = () => {
    const allBookings = historyQuery || [];
    const pendingCount = allBookings.filter(
      (b) => b.status === "PENDING",
    ).length;
    const confirmedCount = allBookings.filter(
      (b) => b.status === "ACCEPTED",
    ).length;
    const checkedInCount = allBookings.filter(
      (b) => b.status === "CHECKED_IN",
    ).length;

    return {
      all: allBookings.length,
      pending: pendingCount,
      confirmed: confirmedCount,
      "checked-in": checkedInCount,
    };
  };

  const counts = getTabCounts();

  return (
    <Box
      style={{
        minHeight: "100vh",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <Container size="xl">
        <Stack gap="xl">
          {/* Header Section with Gradient */}
          <Paper
            shadow="lg"
            radius="xl"
            p="xl"
            style={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Group justify="space-between" align="center">
              <div>
                <Group gap="xs" mb="xs">
                  <ThemeIcon
                    size="xl"
                    variant="light"
                    color="white"
                    radius="xl"
                  >
                    <IconCalendarStats size={28} />
                  </ThemeIcon>
                  <Title order={1} size="h1" fw={800}>
                    My Bookings
                  </Title>
                </Group>
                <Text opacity={0.9} size="lg" ml={50}>
                  View and manage all your room reservations
                </Text>
              </div>
            </Group>

            {/* Decorative circles */}
            <Box
              style={{
                position: "absolute",
                top: -50,
                right: -50,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.1)",
                pointerEvents: "none",
              }}
            />
            <Box
              style={{
                position: "absolute",
                bottom: -80,
                left: -80,
                width: 300,
                height: 300,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.05)",
                pointerEvents: "none",
              }}
            />
          </Paper>

          {/* Tabs Section with Counts */}
          <Paper shadow="sm" radius="lg" p="md" withBorder>
            <BookingsTabs
              tabs={[
                { key: "all", label: `📋 All Bookings`, count: counts.all },
                { key: "pending", label: `⏳ Pending`, count: counts.pending },
                {
                  key: "confirmed",
                  label: `✅ Confirmed`,
                  count: counts.confirmed,
                },
                {
                  key: "checked-in",
                  label: `🏨 Checked-In`,
                  count: counts.checkedIn,
                },
              ]}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </Paper>

          {/* Bookings Table Section */}
          <Paper shadow="sm" radius="lg" p="xl" withBorder>
            {filteredBookings.length === 0 ? (
              <Center py="xl">
                <Alert
                  color="blue"
                  variant="light"
                  title="No Bookings Found"
                  icon={<IconAlertCircle size={20} />}
                  radius="md"
                >
                  <Text size="sm">
                    {activeTab === "all"
                      ? "You haven't made any bookings yet. Start exploring our rooms!"
                      : `You don't have any ${activeTab} bookings at the moment.`}
                  </Text>
                </Alert>
              </Center>
            ) : (
              <>
                <Group justify="space-between" mb="md">
                  <Text fw={600} size="sm" c="dimmed">
                    Showing {filteredBookings.length} booking
                    {filteredBookings.length !== 1 ? "s" : ""}
                  </Text>
                  <Group gap="xs">
                    <ThemeIcon
                      size="sm"
                      variant="light"
                      color="blue"
                      radius="xl"
                    >
                      <IconBookmarkPlus size={12} />
                    </ThemeIcon>
                    <Text size="xs" c="dimmed">
                      Last updated: {new Date().toLocaleDateString()}
                    </Text>
                  </Group>
                </Group>
                <BookingsTable bookings={filteredBookings} />
              </>
            )}
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

export default MyBookings;
