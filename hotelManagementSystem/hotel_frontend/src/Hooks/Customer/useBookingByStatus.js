import { useQuery } from "@tanstack/react-query";
import { getBookingsByStatus } from "../../Api/API/Booking/Bookings.api";
import useAuthStore from "../../Store/authStore";

const useBookingsByStatus = (status) => {
  const { user } = useAuthStore();

  return useQuery({
    queryKey: ["bookings", status, user?.id],
    queryFn: () => getBookingsByStatus(user.id, status),
    enabled: !!user?.id && !!status,
  });
};

export default useBookingsByStatus;