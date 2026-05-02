import paymentClient from "../../Client/Payment/Payment.client";

const getPendingPayment = async () => {
  try {
    const res = await paymentClient.get("/PendingPayment");
    return res?.data;
  } catch (err) {
    return err;
  }
};

export { getPendingPayment };
