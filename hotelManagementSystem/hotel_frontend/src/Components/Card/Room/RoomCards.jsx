// ******************************** Mantline UI ********************************
import { SimpleGrid, Stack, Loader, Center, Alert } from "@mantine/core";
// ******************************** Components ********************************
import RoomCard from "./RoomCard";
import useAuthStore from "../../../Store/authStore";
import useGetAllRooms from "../../../Hooks/Room/useGetAllRooms";
import { IconAlertCircle } from "@tabler/icons-react";
import Loading from "../../Loader/Loading";
import NoData from "../../Empty/NoData";

const RoomCards = () => {
  const { data: apiRooms = [], isLoading, error } = useGetAllRooms();
  const { role } = useAuthStore();

  // Map API data to the format expected by RoomCard
  const mapRoomData = (room) => {
    // Get the first image or use default
    const firstImage = room.images?.[0]?.imagePath;
    console.log(firstImage)
    const imageUrl = firstImage 
      ? `http://localhost:8080/${firstImage}` 
      : "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=250&fit=crop";

    // Build features array from room amenities
    const features = [];
    if (room.oceanView) features.push("Ocean View");
    if (room.kingBed) features.push("King Bed");
    if (room.balcony) features.push("Balcony");
    if (room.miniBar) features.push("Mini Bar");
    if (room.wifi) features.push("Free WiFi");
    if (room.smartTv) features.push("Smart TV");

    // Map status
    const statusMap = {
      "Available": "Available",
      "Booked": "Booked",
      "Maintenance": "Maintenance"
    };
    const status = statusMap[room.status] || "Available";

    // Generate title from room type and number
    const roomTypeMap = {
      "SINGLE": "Single Room",
      "DOUBLE": "Double Room",
      "SUITE": "Suite",
      "DELUXE": "Deluxe Room",
      "FAMILY": "Family Room"
    };
    const title = `${roomTypeMap[room.roomType] || room.roomType || "Room"} ${room.roomNumber}`;

    return {
      id: room.id,
      title: title,
      price: `$${room.pricePerNight}`,
      category: room.roomType || "Standard",
      description: room.description || "Comfortable room with great amenities",
      rating: 4.5, // You can add rating to your API if needed
      guests: room.maxNumberOfUsers || 2,
      image: imageUrl,
      features: features,
      status: status,
      beds: room.kingBed ? "King" : room.maxNumberOfUsers > 2 ? "Queen" : "Standard",
      size: room.maxNumberOfUsers === 2 ? "30m²" : room.maxNumberOfUsers === 4 ? "55m²" : "45m²",
      roomNumber: room.roomNumber,
      roomType: room.roomType,
      pricePerNight: room.pricePerNight,
      maxNumberOfUsers: room.maxNumberOfUsers,
      oceanView: room.oceanView,
      kingBed: room.kingBed,
      balcony: room.balcony,
      miniBar: room.miniBar,
      wifi: room.wifi,
      smartTv: room.smartTv,
      images: room.images,
    };
  };

  // Transform API data to the format expected by RoomCard
  const rooms = apiRooms.map(mapRoomData);

  console.log("Mapped rooms:", rooms);

  if (isLoading) {
    return (
     <Loading/>
    );
  }

  if (error) {
    return (
     <Error name={"Rooms"} error={error}/>
    );
  }

  if (rooms.length === 0) {
    return (
     <NoData name={"Rooms"}/>
    );
  }

  return (
    <Stack gap="lg">
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing="lg"
        verticalSpacing="lg"
      >
        {rooms.map((room, index) => (
          <div
            key={room.id}
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="700"
            data-aos-delay={index * 100}
          >
            <RoomCard item={room} role={role} />
          </div>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default RoomCards;