import React from 'react'
import './writing.css'
import ReactStars from "react-rating-stars-component"

const ratingChanged = (newRating) => {
  console.log(newRating);
};

function Writing() {
  return (
    <div className='writingBox'>
      <div className='selectBoxes'>
        <div className='alcoholSelect'>
          <select name='alcohol'>
            <option value=''>Alcohol</option>
            <option value='001'>Chaeulsurok</option>
            <option value='002'>Jangsu</option>
          </select>
        </div>
        <div className='starRatingButton'>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </div>
      </div>
      <textarea className='writingText'></textarea>
      <input type='submit' className='writingSubmit'></input>
    </div>
  )
}

export default Writing