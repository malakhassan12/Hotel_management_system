import bookingClient from "../../Client/Booking/Booking.client";

const getAllBookings = async () => {
  try {
    const res = await bookingClient.get("/AllBookings");
    return res?.data;
  } catch (err) {
    return err;
  }
};

const acceptBooking = async (bookingId) => {
  try {
    const res = await bookingClient.post(`/${bookingId}/accept`);
    return res?.data;
  } catch (err) {
    return err;
  }
};

const rejectBooking = async (bookingId) => {
  try {
    const res = await bookingClient.post(`/${bookingId}/reject`);
    return res?.data;
  } catch (err) {
    return err;
  }
};

const getPendingBookings = async () => {
  try {
    const res = await bookingClient.get(`/pending/count`);
    return res?.data;
  } catch (err) {
    return err;
  }
};

const getConfirmedBookings = async () => {
  try {
    const res = await bookingClient.get(`/confirmed/count`);
    return res?.data;
  } catch (err) {
    return err;
  }
};

const getRevenueBookings = async () => {
  try {
    const res = await bookingClient.get(`/revenue/total`);
    console.log("getRevenueBookings"  , res)
    return res?.data;
  } catch (err) {
    return err;
  }
};

const checkIn = async (bookingId) => {
  try {
    const res = await bookingClient.post(`/${bookingId}/checkin`);
    return res?.data;
  } catch (err) {
    return err;
  }
};

const checkOut = async (bookingId) => {
  try {
    const res = await bookingClient.post(`/${bookingId}/checkout`);
    return res?.data;
  } catch (err) {
    return err;
  }
};

const getRevenueByMonth = async () => {
  try {
    const res = await bookingClient.get(`/monthly-revenue`);
    return res?.data;
  } catch (err) {
    return err;
  }
};
export {
  getAllBookings,
  acceptBooking,
  rejectBooking,
  getPendingBookings,
  getConfirmedBookings,
  getRevenueBookings,
  checkIn,
  checkOut,
  getRevenueByMonth,
};
