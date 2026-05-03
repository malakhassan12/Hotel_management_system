import reviewClient from "../../Client/Review/Review.client";

const getReviewsByRoom = async (roomId) => {
  try {
    const res = await reviewClient.get(`/room-with-details/${roomId}`);
    return res?.data;
  } catch (err) {
    return err;
  }
};

const getAVGReviews = async (roomId) => {
  try {
    const res = await reviewClient.get(`/average/${roomId}`);
    return res?.data;
  } catch (err) {
    return err;
  }
};

export { getReviewsByRoom, getAVGReviews };
