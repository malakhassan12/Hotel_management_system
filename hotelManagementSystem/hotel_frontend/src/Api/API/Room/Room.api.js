import roomClient from "../../Client/User/Room.client";

const getRoom = async (roomId) => {
  try {
    const res = await roomClient.get(`/${roomId}`);
    return res?.data;
  } catch (err) {
    return err;
  }
};

const getAllRooms = async ({ page = 0, size = 10 }) => {
  try {
    const res = await roomClient.get("", {
      params: { page, size },
    });
    return res?.data?.content;
  } catch (err) {
    return err;
  }
};

const editRoomStatus = async ({ roomId, status }) => {
  try {
    const res = await roomClient.patch(`/${roomId}/status?status=${status}`);
    return res?.data;
  } catch (err) {
    return err;
  }
};
export { getRoom, getAllRooms, editRoomStatus };
