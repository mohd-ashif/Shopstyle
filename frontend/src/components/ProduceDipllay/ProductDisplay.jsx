import React, { useState } from 'react';
import star_icon from '../../../public/Assets/star_icon.png';
import star_dull from '../../../public/Assets/star_dull_icon.png';

const ProductDisplay = (props) => {
  const { product } = props;
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });

  const handleAddReview = () => {
   
    const hasReviewed = reviews.some((review) => review.userId === 1); 
                                                                
    
    if (!hasReviewed) {
      
      if (newReview.rating >= 1 && newReview.rating <= 5) {
       
        const updatedReview = { ...newReview, userId: 1 }; 
        setReviews([...reviews, updatedReview]);
        setNewReview({ rating: 0, comment: '' });
      } else {
        alert('Please provide a valid rating between 1 and 5.');
      }
    } else {
      alert('You have already submitted a review.');
    }
  };

  const handleDeleteReview = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);  
    setReviews(updatedReviews);
  };

  // Calculate the average star rating
  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      : 0;

  const canAddReview = !reviews.some((review) => review.userId === 1);

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
          <div className="productdisplay-right-review">
          <h2>Customer Reviews</h2>
          <div className="productdisplay-right-star">
            {Array.from({ length: 5 }, (_, index) => (
              <img
                key={index}
                src={index + 1 <= averageRating ? star_icon : star_dull}
                alt={`Star ${index + 1}`}
              />
            ))}
            <p>({reviews.length} reviews)</p>
          </div>

          {/* Display individual reviews */}
          {reviews.map((review, index) => (
            <div key={index} className="productdisplay-right-individual-review">
              <p>Rating: {review.rating}</p>
              <p>Comment: {review.comment}</p>
              <button onClick={() => handleDeleteReview(index)}>Delete Review</button>
            </div>
          ))}

          {/* Add a new review */}
          {canAddReview && (
            <div className="productdisplay-right-add-review">
              <h3>Add Your Review</h3>
              <div className="productdisplay-right-star">
                {Array.from({ length: 5 }, (_, index) => (
                  <img
                    key={index}
                    onClick={() => setNewReview({ ...newReview, rating: index + 1 })}
                    src={index + 1 <= newReview.rating ? star_icon : star_dull}
                    alt={`Star ${index + 1}`}
                  />
                ))}
              </div>
              <textarea
                placeholder="Write your review here..."
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              />
              <button onClick={handleAddReview}>Submit Review</button>
            </div>
          )}
        </div>
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          {Array.from({ length: 5 }, (_, index) => (
            <img
              key={index}
              src={index + 1 <= averageRating ? star_icon : star_dull}
              alt={`Star ${index + 1}`}
            />
          ))}
          <p>({reviews.length} reviews)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">${product.old_price} </div>
          <div className="productdisplay-right-prices-new">${product.new_price} </div>
        </div>
        <div className="productdisplay-right-description">
         {product.description}
        </div>

        <div className="productdisplay-right-size1">
          <h1>Select size</h1>
          <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL </div>
            <div>XXL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className='productdisplay-right-category'> <span>Category : </span> {product.category} </p>
        <p className='productdisplay-right-category'> <span>Tags : </span> {product.name}</p>

       
      </div>
    </div>
  );
};

export default ProductDisplay;
