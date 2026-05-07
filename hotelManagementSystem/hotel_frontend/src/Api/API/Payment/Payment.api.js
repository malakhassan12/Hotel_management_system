// import axios from "axios";
import useAuthStore from "../../../Store/authStore";
import paymentClient from "../../Client/Payment/Payment.client";

const getPendingPayment = async () => {
  const res = await paymentClient.get("/PendingPayment");
  return res?.data;
};

const createPayment = async ({ bookingId, amount }) => {
  const user = useAuthStore.getState().user;

  console.log(user);

  const res = await paymentClient.post(
    "/create",
    {},
    {
      params: {
        bookingId: bookingId,
        amount: amount,
        userId: user?.userId,
        email: user?.email,
      },
    },
  );
  return res?.data;
};

const makeConfirm = async ({
  paymentIntentId,
  customerName,
  customerEmail,
  customerPhone,
}) => {
  const res = await paymentClient.post(
    "/confirm",
    {},
    {
      params: {
        paymentIntentId: paymentIntentId,
        customerName: customerName,
        customerEmail: customerEmail,
        customerPhone: customerPhone,
      },
    },
  );
  return res?.data;
};

// const stripeConfirm = async (clientSecret) => {
//   const stripeIntentId = clientSecret.split("_secret_")[0];

//   const stripeResponse = await axios.post(
//     `https://api.stripe.com/v1/payment_intents/${stripeIntentId}/confirm`,
//     new URLSearchParams({
//       "payment_method_data[type]": "card",
//       "payment_method_data[card][token]": "tok_visa",
//       return_url: "https://example.com",
//     }),
//     {
//       headers: {
//         Authorization: `Bearer sk_test_51TUT4XJc5LM0oFyF2wHzQRKYwbOEBp9L3hFDEgD14KKpcaMwJ3j6bnikGTxZjMoq8XYnF4D6emrIGkxDgl6kKoAu00orMib8Pd`,
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     },
//   );

//   console.log(stripeResponse);
// };


const stripeConfirm = async (clientSecret) => {
  const paymentIntentId = clientSecret.split("_secret_")[0];

  const res = await paymentClient.post("/confirm", null, {
    params: {
      paymentIntentId,
      customerName: "test",
      customerEmail: "test@gmail.com",
      customerPhone: "01000000000",
    },
  });

  return res.data;
};

export { getPendingPayment, createPayment, makeConfirm, stripeConfirm };
