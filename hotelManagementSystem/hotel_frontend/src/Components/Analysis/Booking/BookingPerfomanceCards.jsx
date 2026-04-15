// ******************************** Mantline UI ********************************
import { Grid,  } from "@mantine/core";
// ******************************** Icons ********************************

import {
  IconCalendarClock,
  IconCheck,
  IconCurrencyDollar,
} from "@tabler/icons-react";
// ******************************** Components ********************************

import BookingCard from "../../Card/Booking/BookingCard";

const BookingPerformanceCards = () => {
  const cardsData = [
    {
      title: "Pending Requests",
      value: "1",
      icon: IconCalendarClock,
      color: "orange",
      trend: 3,
    },
    {
      title: "Confirmed Today",
      value: "2",
      icon: IconCheck,
      color: "green",
      trend: 2,
    },
    {
      title: "Total Revenue",
      value: "$2,350",
      icon: IconCurrencyDollar,
      color: "primary",
      trend: 5,
    },
  ];

  return (
    <Grid >
      {cardsData.map((item, index) => (
        <Grid.Col
          key={index}
          span={{ base: 12, sm: 6, lg: 4 }}
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          data-aos-delay={index * 100}
        >
          <BookingCard item={item} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default BookingPerformanceCards;
