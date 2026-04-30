import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { notifications } from "@mantine/notifications";
import { editRoomStatus } from "../../Api/API/Room/Room.api";

const useRoomMutations = () => {
  const queryClient = useQueryClient();

  const updateRoomStatusMutation = useMutation({
    mutationFn: editRoomStatus,

    onSuccess: () => {
      queryClient.invalidateQueries(["rooms"]);

      notifications.show({
        title: "Success",
        message: "Room updated successfully ✅",
        color: "green",
      });
    },

    onError: (err) => {
      notifications.show({
        title: "Error",
        message:
          err?.response?.data?.message ||
          err?.message ||
          "Failed to updated room",
        color: "red",
      });
    },
  });

  return { updateRoomStatusMutation };
};

export default useRoomMutations;
