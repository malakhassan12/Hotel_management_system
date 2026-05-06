import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAuthStore from "../../Store/authStore";
import { createPayment } from "../../Api/API/Payment/Payment.api";
import { notifications } from "@mantine/notifications";

const usePaymentMutations = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthStore();

  const createPaymentMutation = useMutation({
    mutationFn: createPayment,

    onSuccess: () => {
      queryClient.invalidateQueries(["notifications", user?.userId]);
      notifications.show({
        title: "Success",
        message: "Maked Payment successfully ✅",
        color: "green",
      });
    },

    onError: (err) => {
      notifications.show({
        title: "Error",
        message:
          err?.response?.data?.message ||
          err?.message ||
          "Failed to Maked Payment  ",
        color: "red",
      });
    },
  });

  return {
    createPaymentMutation,
  };
};

export default usePaymentMutations;
