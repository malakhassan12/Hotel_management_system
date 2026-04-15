// ******************************** Mantline UI ********************************
import { Grid } from "@mantine/core";
import { IconBed, IconBedOff, IconTools } from "@tabler/icons-react";
// ******************************** Components ********************************

import PerformanceRoomCard from "../../Card/Room/PerformanceRoomCard";

const RoomPerformanceCards = () => {
  const roomsData = [
    {
      title: "Available Rooms",
      value: "4",
      icon: IconBed,
      color: "green",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=200&fit=crop",
      status: "Ready",
    },
    {
      title: "Booked Rooms",
      value: "1",
      icon: IconBedOff,
      color: "primary",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=200&fit=crop",
      status: "Occupied",
    },
    {
      title: "Maintenance",
      value: "1",
      icon: IconTools,
      color: "red",
      image:
        "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=200&fit=crop",
      status: "Under Repair",
    },
  ];

  return (
    <Grid>
      {roomsData.map((item, index) => (
        <Grid.Col
          key={index}
          span={{ base: 12, sm: 6, lg: 4 }}
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          data-aos-delay={index * 100}
        >
          <PerformanceRoomCard key={index} item={item} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default RoomPerformanceCards;
