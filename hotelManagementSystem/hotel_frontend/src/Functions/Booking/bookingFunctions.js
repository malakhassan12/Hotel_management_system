 //checkINDate/checkOutDate=>string return=>number
export const calculateNights = (checkInDate, checkOutDate) => {
  if (!checkInDate || !checkOutDate) return 0;

  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);

  
  const diffTime = checkOut - checkIn;

  
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return nights > 0 ? nights : 0;
};
 
export const calculateTotalPrice = (pricePerNight, nights) => {
  return nights > 0 ? nights * pricePerNight : 0;
};