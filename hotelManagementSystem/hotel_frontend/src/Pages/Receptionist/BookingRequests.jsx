import { useState } from "react";

// ******************************** Mantline UI ********************************

import { Space } from "@mantine/core";
// ******************************** Components ********************************

import BookingPerformanceCards from "../../Components/Analysis/Booking/BookingPerfomanceCards";
import InitialBox from "../../Components/Box/InitialBox";
import BookingRequestTable from "../../Components/Table/Receptionist/BookingRequestTable";
import SearchBySelect from "../../Components/Search/SearchBySelect";

const BookingRequests = () => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Space h={"md"} />

      <InitialBox
        title={"Booking Requests"}
        text={"Review and manage customer booking requests"}
      />
      <Space h={"md"} />

      <BookingPerformanceCards />
      <Space h={"md"} />

      <SearchBySelect
        statusValue={statusFilter}
        onStatusChange={setStatusFilter}
        searchValue={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
        showSearch={true}
      />
      <Space h={"md"} />

      <BookingRequestTable />
    </div>
  );
};

export default BookingRequests;
