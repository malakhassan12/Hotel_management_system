import notificationClient from "../../Client/Notification/Notification.client";

const getAllNotificationByUserId = async (userId) => {
  try {
    const res = await notificationClient.get(`/${userId}`);
    return res?.data;
  } catch (err) {
    return err;
  }
};

export { getAllNotificationByUserId };
