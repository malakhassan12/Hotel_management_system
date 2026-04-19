// import { Container, Title, Text, Stack, Button, Center, Box } from "@mantine/core";
// import { IconCalendar } from "@tabler/icons-react";
// import { useNavigate } from "react-router-dom";
// import { useMyBookings } from "../../Hooks/useMyBookings";
// import BookingsTabs from "../../Components/Tabs/Customer/BookingsTabs";
// import BookingsTable from "../../Components/Table/Customer/BookingsTable";


// const MyBookings = () => {
//   const navigate = useNavigate();
//   const { bookings, activeTab, setActiveTab, tabs } = useMyBookings();

//   const isCheckedInTab = activeTab === "checked-in";
//   const isEmpty = bookings.length === 0;

//   return (
//     <Container size="xl" py="xl">
//       <Stack gap="xl">
//         <Box>
//           <Title order={1}>My Bookings</Title>
//           <Text c="dimmed" size="lg">
//             View and manage your reservations
//           </Text>
//         </Box>

//         <BookingsTabs
//           tabs={tabs}
//           activeTab={activeTab}
//           onTabChange={setActiveTab}
//         />

//         {isEmpty ? (
//           <Center py={80}>
//             <Stack align="center" gap="md">
//               <IconCalendar size={64} stroke={1.5} color="#ccc" />
//               <Text size="lg" fw={500} c="dimmed">
//                 No {activeTab === "all" ? "" : activeTab} bookings yet
//               </Text>

//               {isCheckedInTab && (
//                 <>
//                   <Text size="sm" c="dimmed" ta="center" maw={300}>
//                     You don&apos;t have any checked-in bookings at the moment.
//                   </Text>
//                   <Button
//                     size="md"
//                     radius="md"
//                     color="gold"
//                     onClick={() => navigate("/customer")}
//                   >
//                     Browse Rooms
//                   </Button>
//                 </>
//               )}
//             </Stack>
//           </Center>
//         ) : (
//           <BookingsTable bookings={bookings} />
//         )}
//       </Stack>
//     </Container>
//   );
// };

// export default MyBookings;
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