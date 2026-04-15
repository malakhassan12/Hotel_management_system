// ******************************** Mantine UI ********************************

import { Grid } from "@mantine/core";
// ******************************** Icons ********************************

import { IconCheck, IconClock, IconUsers } from "@tabler/icons-react";
// ******************************** Components ********************************

import CheckInPerformanceCard from "../../Card/Receptionist/CheckInPerformanceCard";

const CheckInPerformanceCards = () => {
  const stats = [
    {
      title: "Total Check-ins Today",
      value: "1",
      icon: IconUsers,
      color: "primary",
      bgColor: "primary.0",
      description: "Total arrivals today",
    },
    {
      title: "Confirmed",
      value: "1",
      icon: IconCheck,
      color: "green",
      bgColor: "green.0",
      description: "Checked in successfully",
    },
    {
      title: "Pending",
      value: "0",
      icon: IconClock,
      color: "orange",
      bgColor: "orange.0",
      description: "Awaiting check-in",
    },
  ];

  return (
    <Grid>
      {stats.map((stat, i) => (
        <Grid.Col
          key={i}
          span={{ base: 12, sm: 6, lg: 4 }}
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          data-aos-delay={i * 100}
        >
          <CheckInPerformanceCard stat={stat} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default CheckInPerformanceCards;
