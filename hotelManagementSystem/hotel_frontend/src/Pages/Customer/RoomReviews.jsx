import ReviewsSection from "../../Components/Reviews/ReviewsSection";
import { mockReviews, reviewStats } from "../../Constants/ReviewsConstants";

const RoomReviews = () => {
  const handleSubmitReview = (data) => {
    console.log("New Review Submitted for this room:", data);
    
  };

  return (
    <ReviewsSection
      title="Room Reviews"
      subtitle="What our guests think about this room"
      reviews={mockReviews}
      averageRating={reviewStats.averageRating}
      totalReviews={reviewStats.totalReviews}
      ratingBreakdown={reviewStats.ratingBreakdown}
      roomName="Executive Suite"
      onSubmitReview={handleSubmitReview}
    />
  );
};

export default RoomReviews;