import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import { calculateNights, calculateTotalPrice } from "../Functions/Booking/bookingFunctions";

export const useBook = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();

  const [room, setRoom] = useState(null);
  const [loadingRoom, setLoadingRoom] = useState(true);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: 1,
    checkInDate: "",
    checkOutDate: "",
    paymentMethod: "online",
  });

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  // Mock Room Data
  useEffect(() => {
    
   const mockRooms = {
  "1": {
    id: "1",
    name: "Deluxe Ocean View",
    price: 250,
    maxGuests: 2,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=250&fit=crop",
    description:
      "Stunning ocean views with luxury amenities, perfect for romantic getaway",
    type: "Deluxe",
  },

  "2": {
    id: "2",
    name: "Standard Room",
    price: 120,
    maxGuests: 2,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop",
    description:
      "Comfortable room with city views, ideal for business travelers",
    type: "Standard",
  },

  "3": {
    id: "3",
    name: "Executive Suite",
    price: 400,
    maxGuests: 4,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=250&fit=crop",
    description:
      "Luxury suite with separate living room and premium amenities",
    type: "Suite",
  },

  "4": {
    id: "4",
    name: "Family Room",
    price: 280,
    maxGuests: 5,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=250&fit=crop",
    description: "Spacious room perfect for families with kids",
    type: "Family",
  },

  "5": {
    id: "5",
    name: "Presidential Suite",
    price: 800,
    maxGuests: 6,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop",
    description: "Ultimate luxury with private butler service",
    type: "Presidential",
  },

  "6": {
    id: "6",
    name: "Garden View Room",
    price: 180,
    maxGuests: 2,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=250&fit=crop",
    description: "Peaceful room overlooking our beautiful gardens",
    type: "Garden",
  },
};

    setTimeout(() => {
      setRoom(mockRooms[roomId] || mockRooms["1"]);
      setLoadingRoom(false);
    }, 400);
  }, [roomId]);

  const { nights, totalPrice } = useMemo(() => {
    const nightsCount = calculateNights(formData.checkInDate, formData.checkOutDate);
    const total = calculateTotalPrice(room?.price || 0, nightsCount);

    return { nights: nightsCount, totalPrice: total };
  }, [formData.checkInDate, formData.checkOutDate, room?.price]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!room) return;

   
    if (new Date(formData.checkOutDate) <= new Date(formData.checkInDate)) {
      notifications.show({
        title: "Invalid Dates",
        message: "Check-out date must be after Check-in date",
        color: "red",
      });
      return;
    }

    setLoadingSubmit(true);

    const newBooking = {
      id: `B${Date.now().toString().slice(-4)}`,
      room: room.name,
      checkIn: formData.checkInDate,
      checkOut: formData.checkOutDate,
      guests: formData.guests,
      total: totalPrice,
      status: "confirmed",
      paymentMethod: formData.paymentMethod,
      createdAt: new Date().toISOString(),
    };

   
    const existing = JSON.parse(localStorage.getItem("myBookings") || "[]");
    localStorage.setItem("myBookings", JSON.stringify([...existing, newBooking]));

    notifications.show({
      title: "Booking Confirmed!",
      message: `Your booking for ${room.name} has been created successfully.`,
      color: "green",
    });

    setLoadingSubmit(false);
    navigate("/customer/my-bookings");
  };

  return {
    room,
    loadingRoom,
    formData,
    handleInputChange,
    handleSubmit,
    loadingSubmit,
    nights,
    totalPrice,
  };
};
