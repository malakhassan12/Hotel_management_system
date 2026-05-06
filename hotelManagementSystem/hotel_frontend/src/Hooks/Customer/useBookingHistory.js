import { useQuery } from "@tanstack/react-query";
import { viewBookingsHistory } from "../../Api/API/Booking/Bookings.api";
import useAuthStore from "../../Store/authStore";
import { QUERY_KEYS } from "../../Constants/queryKeys";

const useBookingHistory = () => {
  const { user } = useAuthStore();

  return useQuery({
    queryKey: QUERY_KEYS.BOOKINGS_HISTORY(user?.id),
    queryFn: () => viewBookingsHistory(user.id),
    enabled: !!user?.id,
  });
};

export default useBookingHistory;