// ******************************** Mantline UI ********************************
import {
  Table,
  Text,
  Badge,
  ActionIcon,
  Group,
  Box,
  ScrollArea,
  Avatar,
  Loader,
  Center,
} from "@mantine/core";
// ******************************** Icons ********************************
import {
  IconEye,
  IconCheck,
  IconX,
  IconDotsVertical,
} from "@tabler/icons-react";
// ******************************** Components ********************************
import BookingModal from "../../Modal/Booking/BookingModal";
import useGetAllBookings from "../../../Hooks/Employee/useGetAllBookings";
import BookingRow from "./BookingTableComponents/BookingRow";
import UseGetUsersForBooking from "../../../Hooks/User/UseGetUsersForBooking";
import Loading from "../../Loader/Loading";
import Error from "../../Loader/Error";
import NoData from "../../Empty/NoData";
import { mapBookingData } from "../../../Functions/Booking/bookingFunctions";

const BookingRequestTable = () => {
  const { data = [], isLoading, error } = useGetAllBookings();

  const {
    data: finalData = [],
    isLoading: isLoadingFinal,
    error: errorFinal,
  } = UseGetUsersForBooking(data || []);

  console.log(finalData);

 


  console.log(data , "Data")
  // Transform API data to table rows
  const tableRows =
    Array.isArray(finalData) && finalData.length > 0
      ? finalData.map((booking) => mapBookingData(booking))
      : [];

  // Loading state
  if (isLoading || isLoadingFinal) {
    return <Loading />;
  }

  // Error state
  if (error || errorFinal) {
    return <Error name={"Booking"} error={error} />;
  }

  // No data state
  if (!tableRows.length) {
    return <NoData name={"Booking"} />;
  }

  return (
    <Box>
      <ScrollArea>
        <Table striped highlightOnHover withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Booking ID</Table.Th>
              <Table.Th>Customer</Table.Th>
              <Table.Th>Room Number</Table.Th>
              <Table.Th>Check-In</Table.Th>
              <Table.Th>Check-Out</Table.Th>
              <Table.Th>Guests</Table.Th>
              <Table.Th>Total</Table.Th>
              <Table.Th>Payment</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {tableRows.map((row) => (
              <BookingRow key={row?.id} row={row} />
            ))}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </Box>
  );
};

export default BookingRequestTable;
