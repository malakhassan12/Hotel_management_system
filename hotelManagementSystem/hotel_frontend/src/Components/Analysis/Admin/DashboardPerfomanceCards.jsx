import React from "react";
// ******************************** Mantline UI ********************************

import { SimpleGrid } from "@mantine/core";
// ******************************** Icons ********************************

import {
  IconCurrencyDollar,
  IconUsers,
  IconBuilding,
  IconStar,
} from "@tabler/icons-react";
// ******************************** Components ********************************

import AdminDashCard from "../../Card/Admin/AdminDashCard";

const DashboardPerfomanceCards = () => {
  const cardsData = [
    {
      title: "Total Revenue",
      value: "$5,210",
      icon: IconCurrencyDollar,
      color: "green",
      trend: "up",
      trendValue: "+12.5%",
    },
    {
      title: "Total Users",
      value: "6",
      icon: IconUsers,
      color: "blue",
      trend: "up",
      trendValue: "+3 new",
    },
    {
      title: "Occupancy Rate",
      value: "16.7%",
      icon: IconBuilding,
      color: "orange",
      trend: "up",
      trendValue: "+5.2%",
    },
    {
      title: "Avg Rating",
      value: "4.5",
      icon: IconStar,
      color: "yellow",
      trend: "up",
      trendValue: "+0.3",
    },
  ];

  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
      {cardsData.map((card, i) => (
        <div
          key={i}
          span={{ base: 12, sm: 6, lg: 3 }}
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          data-aos-delay={i * 100}
        >
          <AdminDashCard card={card} />
        </div>
      ))}
    </SimpleGrid>
  );
};

export default DashboardPerfomanceCards;
