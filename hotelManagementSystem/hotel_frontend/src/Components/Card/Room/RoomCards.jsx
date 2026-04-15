// ******************************** Mantline UI ********************************
import { SimpleGrid, Stack } from "@mantine/core";
// ******************************** Components ********************************

import RoomCard from "./RoomCard";

const RoomCards = () => {
  const rooms = [
    {
      id: 1,
      title: "Deluxe Ocean View",
      price: "$250",
      category: "Available",
      description:
        "Stunning ocean views with luxury amenities, perfect for romantic getaway",
      rating: 4.8,
      guests: 2,
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=250&fit=crop",
      features: ["Ocean View", "King Bed", "Balcony", "Free WiFi"],
      status: "Available",
      beds: "King",
      size: "45m²",
    },
    {
      id: 2,
      title: "Standard Room",
      price: "$120",
      category: "Available",
      description:
        "Comfortable room with city views, ideal for business travelers",
      rating: 4.2,
      guests: 2,
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop",
      features: ["City View", "Queen Bed", "Work Desk", "Free WiFi"],
      status: "Available",
      beds: "Queen",
      size: "30m²",
    },
    {
      id: 3,
      title: "Executive Suite",
      price: "$400",
      category: "Booked",
      description:
        "Luxury suite with separate living room and premium amenities",
      rating: 4.9,
      guests: 4,
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=250&fit=crop",
      features: [
        "Panoramic View",
        "King Bed",
        "Living Room",
        "Jacuzzi",
        "Free WiFi",
      ],
      status: "Booked",
      beds: "King",
      size: "75m²",
    },
    {
      id: 4,
      title: "Family Room",
      price: "$280",
      category: "Available",
      description: "Spacious room perfect for families with kids",
      rating: 4.6,
      guests: 5,
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=250&fit=crop",
      features: ["Garden View", "2 Queen Beds", "Kids Area", "Free WiFi"],
      status: "Available",
      beds: "2 Queen",
      size: "55m²",
    },
    {
      id: 5,
      title: "Presidential Suite",
      price: "$800",
      category: "Maintenance",
      description: "Ultimate luxury with private butler service",
      rating: 5.0,
      guests: 6,
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop",
      features: [
        "City View",
        "King Bed",
        "Private Pool",
        "Butler Service",
        "Free WiFi",
      ],
      status: "Maintenance",
      beds: "King",
      size: "120m²",
    },
    {
      id: 6,
      title: "Garden View Room",
      price: "$180",
      category: "Available",
      description: "Peaceful room overlooking our beautiful gardens",
      rating: 4.5,
      guests: 2,
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=250&fit=crop",
      features: ["Garden View", "Queen Bed", "Patio", "Free WiFi"],
      status: "Available",
      beds: "Queen",
      size: "35m²",
    },
  ];

  return (
    <Stack gap="lg">
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing="lg"
        verticalSpacing="lg"
      >
        {rooms.map((room, index) => (
          <div
            key={index}
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="700"
            data-aos-delay={index * 100}
          >
            <RoomCard item={room} role="receptionist" />
          </div>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default RoomCards;
