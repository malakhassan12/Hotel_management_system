import paymentClient from "../../Client/Payment/Payment.client";

const getPendingPayment = async () => {
  const res = await paymentClient.get("/PendingPayment");
  return res?.data;
};

const createPayment = async ({bookingId, amount}) => {
  const res = await paymentClient.post(
    "/create",
    {},
    {
      params: {
        bookingId: bookingId,
        amount: amount,
      },
    },
  );
  return res?.data;
};

export { getPendingPayment, createPayment };
