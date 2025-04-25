import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import ReviewForm from './ReviewForm';

const Reviews = ({ productId }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const reviews = useSelector((state) => state.reviews.reviews[productId] || []);

  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`${
          index < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <button
          onClick={() => setShowReviewForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Write a Review
        </button>
      </div>

      {showReviewForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg">
            <h3 className="text-xl font-bold mb-4">Write a Review</h3>
            <ReviewForm
              productId={productId}
              onClose={() => setShowReviewForm(false)}
            />
          </div>
        </div>
      )}

      {reviews.length > 0 ? (
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <div className="flex">{renderStars(calculateAverageRating())}</div>
              <span className="text-lg font-semibold">
                {calculateAverageRating()} out of 5
              </span>
            </div>
            <p className="text-gray-600">{reviews.length} customer ratings</p>
          </div>

          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-6">
                <div className="flex items-center gap-2 mb-2">
                  {renderStars(review.rating)}
                  <h3 className="font-semibold">{review.title}</h3>
                </div>
                <p className="text-gray-600 mb-2">{review.comment}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>By {review.name}</span>
                  <span>•</span>
                  <span>
                    {new Date(review.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  {review.edited && (
                    <>
                      <span>•</span>
                      <span className="italic">Edited</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">No reviews yet</p>
          <p className="text-sm text-gray-500">
            Be the first to review this product
          </p>
        </div>
      )}
    </div>
  );
};

export default Reviews; 