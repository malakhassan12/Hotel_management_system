import { useMutation, useQueryClient } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";
import { createBooking } from "../../Api/API/Booking/Bookings.api";
import useAuthStore from "../../Store/authStore";

 const useCreateBookingMutation = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthStore();

  return useMutation({
    mutationFn: (variables) => {
      

      return createBooking({
        ...variables,
        userId: user?.userId,
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings", user?.userId] });

      notifications.show({
        title: "Booking Confirmed!",
        message: "Your booking has been created successfully.",
        color: "green",
      });
    },

    onError: (error) => {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";

      notifications.show({
        title: "Booking Failed",
        message,
        color: "red",
      });
    },
  });
};

export default  useCreateBookingMutation;