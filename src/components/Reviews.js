import React from 'react';
import { Link } from 'react-router-dom';
import './Reviews.css';

function Reviews (props) {
  return (
    // необходимо изменить код внутри метода map
    <>
      <ul className="reviews">
        {props.reviews && props.reviews.map((review)=>{
          return <li key={review.id} className="reviews__item">{review.title}</li>
        })}
      </ul>
    </>
  )
}

export default Reviews;