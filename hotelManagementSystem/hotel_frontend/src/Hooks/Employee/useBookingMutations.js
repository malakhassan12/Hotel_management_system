import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  acceptBooking,
  checkIn,
  checkOut,
  rejectBooking,
} from "../../Api/API/Booking/Booking.api";
import useAuthStore from "../../Store/authStore";
import { notifications } from "@mantine/notifications";

const useBookingMutations = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthStore();

  const updateBookingCache = (updatedBooking) => {
    queryClient.setQueryData(["bookings", user?.userId], (oldData = []) =>
      oldData.map((booking) =>
        booking.id === updatedBooking.id
          ? { ...booking, ...updatedBooking }
          : booking,
      ),
    );

    queryClient.setQueryData(
      ["pending-bookings", user?.userId],
      (oldData = []) =>
        oldData.filter((booking) => booking.id !== updatedBooking.id),
    );

    queryClient.setQueryData(
      ["confirmed-bookings", user?.userId],
      (oldData = []) =>
        oldData.filter((booking) => booking.id !== updatedBooking.id),
    );
    queryClient.setQueryData(
      ["revenue-bookings", user?.userId],
      (oldData = []) =>
        oldData.filter((booking) => booking.id !== updatedBooking.id),
    );
  };

  const acceptBookingMutation = useMutation({
    mutationFn: acceptBooking,

    onSuccess: (updatedBooking) => {
      updateBookingCache(updatedBooking);

      notifications.show({
        title: "Success",
        message: "Booking accepted successfully ✅",
        color: "green",
      });
    },

    onError: (err) => {
      notifications.show({
        title: "Error",
        message:
          err?.response?.data?.message ||
          err?.message ||
          "Failed to accept booking",
        color: "red",
      });
    },
  });

  const rejectBookingMutation = useMutation({
    mutationFn: rejectBooking,

    onSuccess: (updatedBooking) => {
      updateBookingCache(updatedBooking);

      notifications.show({
        title: "Success",
        message: "Booking rejected successfully ✅",
        color: "green",
      });
    },

    onError: (err) => {
      notifications.show({
        title: "Error",
        message:
          err?.response?.data?.message ||
          err?.message ||
          "Failed to reject booking",
        color: "red",
      });
    },
  });

  const checkInBookingMutation = useMutation({
    mutationFn: checkIn,

    onSuccess: (updatedBooking) => {
      updateBookingCache(updatedBooking);

      notifications.show({
        title: "Success",
        message: "Check in Make successfully ✅",
        color: "green",
      });
    },

    onError: (err) => {
      notifications.show({
        title: "Error",
        message:
          err?.response?.data?.message ||
          err?.message ||
          "Failed to Make Check in ",
        color: "red",
      });
    },
  });


   const checkOutBookingMutation = useMutation({
    mutationFn: checkOut,

    onSuccess: (updatedBooking) => {
      updateBookingCache(updatedBooking);

      notifications.show({
        title: "Success",
        message: "Check out Make successfully ✅",
        color: "green",
      });
    },

    onError: (err) => {
      notifications.show({
        title: "Error",
        message:
          err?.response?.data?.message ||
          err?.message ||
          "Failed to Make Check out ",
        color: "red",
      });
    },
  });



  return {
    acceptBookingMutation,
    rejectBookingMutation,
    checkInBookingMutation,
    checkOutBookingMutation
  };
};

export default useBookingMutations;
