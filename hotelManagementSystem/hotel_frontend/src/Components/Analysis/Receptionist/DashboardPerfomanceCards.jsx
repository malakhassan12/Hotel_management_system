// ******************************** Mantline UI ********************************

import { Grid } from "@mantine/core";

// ******************************** Components ********************************

import ReceptionistCard from "../../Card/Receptionist/ReceptionistCard";
// ******************************** ICons ********************************

import {
  IconCalendarClock,
  IconHotelService,
  IconCreditCardPay,
  IconTool,
} from "@tabler/icons-react";

const DashboardPerfomanceCards = () => {
  const data = [
    {
      label: "Pending Requests",
      value: "12",
      icon: IconCalendarClock,
      color: "orange",
      bg: "orange.1",
      trend: "+3",
      trendColor: "green",
    },
    {
      label: "Available Rooms",
      value: "48",
      icon: IconHotelService,
      color: "green",
      bg: "green.1",
      trend: "+5",
      trendColor: "green",
    },
    {
      label: "Pending Payments",
      value: "8",
      icon: IconCreditCardPay,
      color: "red",
      bg: "red.1",
      trend: "-2",
      trendColor: "red",
    },
    {
      label: "Maintenance",
      value: "3",
      icon: IconTool,
      color: "blue",
      bg: "blue.1",
      trend: "0",
      trendColor: "gray",
    },
  ];

  return (
    <Grid>
      {data.map((item, i) => (
        <Grid.Col
          key={i}
          span={{ base: 12, sm: 6, lg: 3 }}
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          data-aos-delay={i * 100}
        >
          <ReceptionistCard item={item} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default DashboardPerfomanceCards;
