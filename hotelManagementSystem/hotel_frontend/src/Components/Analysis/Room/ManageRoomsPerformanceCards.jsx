import React from "react";
import { SimpleGrid } from "@mantine/core";
import {
  IconBed,
  IconBedOff,
  IconTools,
  IconBuilding,
} from "@tabler/icons-react";
import ManageRoomCard from "../../Card/Room/ManageRoomCard";

const ManageRoomsPerformanceCards = () => {
  const cardsData = [
    {
      title: "Total Rooms",
      value: "6",
      icon: IconBuilding,
      color: "primary",
      trend: "up",
      trendValue: "+0",
    },
    {
      title: "Available",
      value: "4",
      icon: IconBed,
      color: "green",
      trend: "up",
      trendValue: "+2",
    },
    {
      title: "Booked",
      value: "1",
      icon: IconBedOff,
      color: "blue",
      trend: "neutral",
      trendValue: "0",
    },
    {
      title: "Maintenance",
      value: "1",
      icon: IconTools,
      color: "red",
      trend: "neutral",
      trendValue: "0",
    },
  ];

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md">
      {cardsData.map((card, index) => (
        <ManageRoomCard key={index} card={card} />
      ))}
    </SimpleGrid>
  );
};

export default ManageRoomsPerformanceCards;
