// ******************************** Mantline UI ********************************

import { Space } from "@mantine/core";

// ******************************** Components ********************************

import InitialBox from "../../Components/Box/InitialBox";
import CheckInPerformanceCards from "../../Components/Analysis/Receptionist/CheckInPerformanceCards";
import CheckInTable from "../../Components/Table/CheckInTable";
import { useState } from "react";
import SearchBySelect from "../../Components/Search/SearchBySelect";

const CheckInManagement = () => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Space h={"md"} />

      <InitialBox
        title={"Check-In Management"}
        text={"Process customer check-ins and manage arrivals"}
      />
      <Space h={"md"} />

      <CheckInPerformanceCards />

      <Space h={"md"} />

      <SearchBySelect
        statusValue={statusFilter}
        onStatusChange={setStatusFilter}
        searchValue={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
        showSearch={true}
      />

      <Space h={"md"} />

      <CheckInTable />
    </div>
  );
};

export default CheckInManagement;
