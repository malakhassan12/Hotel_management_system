import reviewClient from "../../Client/Review/Review.client";

export const addReview = async (data) => {
    try {
  const res = await reviewClient.post("/add", data);

  return res.data;
} catch (error) {
  console.error("Error adding review:", error);
  throw error;
}
};


export const getReviewsByUserId = async (userId) => {
  try {
    const res = await reviewClient.get(`/user/${userId}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};
 


export const getAvgRatingForRoom = async (roomId) => {
  try {
    const res = await reviewClient.get(`/average/${roomId}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching average rating:", error);
    throw error;
  }
};