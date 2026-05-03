import roomClient from "../../Client/Room/Room.client";

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

const getStatusOfRooms = async () => {
  try {
    const res = await roomClient.get(`/stats`);
    return res?.data;
  } catch (err) {
    return err;
  }
};

const getCountAvailableRoom = async () => {
  try {
    const res = await roomClient.get(`/CountAvailableRoom`);
    return res?.data;
  } catch (err) {
    return err;
  }
};

const getCountMantenanceRoom = async () => {
  try {
    const res = await roomClient.get(`/CountMantenanceRoom`);
    return res?.data;
  } catch (err) {
    return err;
  }
};
const getImagesByRoom = async (roomId) => {
  try {
    const res = await roomClient.get(`/${roomId}/images`);
    return res?.data;
  } catch (err) {
    return err;
  }
};

const addRoom = async (data) => {
  try {
    const res = await roomClient.post(`/add`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res?.data;
  } catch (err) {
    return err;
  }
};

const updateRoom = async ({ roomId, data }) => {
  try {
    const res = await roomClient.put(`/${roomId}`, data);
    return res?.data;
  } catch (err) {
    return err;
  }
};

const deleteRoom = async (roomId) => {
  try {
    const res = await roomClient.delete(`/${roomId}`);
    return res?.data;
  } catch (err) {
    return err;
  }
};
export {
  getRoom,
  getAllRooms,
  editRoomStatus,
  getStatusOfRooms,
  getCountAvailableRoom,
  getCountMantenanceRoom,
  getImagesByRoom,
  addRoom,
  updateRoom,
  deleteRoom,
};
