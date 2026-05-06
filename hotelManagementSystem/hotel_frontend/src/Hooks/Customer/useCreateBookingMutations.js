import { useMutation, useQueryClient } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";
import { createBooking } from "../../Api/API/Booking/Bookings.api";
import useAuthStore from "../../Store/authStore";
import { useParams } from "react-router-dom";

export const useCreateBookingMutation = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthStore();
  const { roomId } = useParams();

  return useMutation({
    mutationFn: (variables) => {
      if (!user?.id) {
        throw new Error("User not authenticated");
      }

      if (!roomId) {
        throw new Error("Room ID is missing");
      }

      return createBooking({
        ...variables,
        userId: user.id,
        roomId: Number(roomId),
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });

      notifications.show({
        title: "Booking Confirmed!",
        message: "Your booking has been created successfully.",
        color: "green",
      });
    },

    onError: (error) => {
      const message =
        error.response?.data?.message || error.message || "Something went wrong";

      notifications.show({
        title: "Booking Failed",
        message,
        color: "red",
      });
    },
  });
};