import { Container, Title, Text, Stack } from "@mantine/core";
import useBookingStore from "../../Store/bookingStore";
import {useState} from "react";
import BookingsTabs from "../../Components/Tabs/Customer/BookingsTabs";
import BookingsTable from "../../Components/Table/Customer/BookingsTable";

const MyBookings = () => {

  const { myBookings } = useBookingStore();

  const [activeTab, setActiveTab] = useState("all");

  const filteredBookings = myBookings.filter((booking) => {
    if (activeTab === "all") return true;
    if (activeTab === "pending") return booking.status === "pending";
    if (activeTab === "confirmed") return booking.status === "confirmed";
    if (activeTab === "checked-in") return booking.status === "checked-in";
    return true;
  });

  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1}>My Bookings</Title>
          <Text c="dimmed" size="lg">View and manage your reservations</Text>
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