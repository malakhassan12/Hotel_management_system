import bookingClient from "../../Client/Booking/Booking.client";

export const createBooking=async(data)=>{
try {
    const res = await bookingClient.post("/",data);
    return res?.data;
  } catch (err) {
    return err;
  }
};

export const viewBookingsHistory=async(userId)=>{
try {
    const res = await bookingClient.get(`/history/${userId}`);
    return res?.data;
  } catch (err) {
    return err;
  } 
};
export const getBookingsByStatus = async (userId, status) => {
  try{
  const res = await bookingClient.get(
    `/GetAllBookingsByStatus`,
    {
      params: { userId, status },
    }
  );
  return res.data;
}
catch (err){
  return err;
}
};