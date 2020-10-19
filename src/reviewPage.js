import React, { useState, useEffect } from 'react'
import Review from './Critics'
import soju from './soju.jpeg'
import face from './face.jpeg'
import face2 from './face2.jpeg'
import jangsu from './jangsu.jpeg' 
import Writing from './Writing'

function ReviewPage () {
  let [reviews, setReviews] = useState([])

  fetch('http://3.34.255.150:8000/reviewList')
    .then(data => data.json())
    .then(res => {
      setReviews(res.arr)
    })
  
  useEffect(() => {
    console.log(reviews)
  }, [])

  return (
    <div style={{ position: "absolute", left: "50%", marginLeft: "-400px" }}>
      <Writing />

      {reviews.map(() => <Review
        key={reviews.idREVIEWS} 
        UserName={reviews.FIRST_NAMES + reviews.LAST_NAMES}
        Date={reviews.created_at}
      />)}

      <Review 
        UserName="Eric Gates" 
        UserImg={face} 
        Date="23 Sep 2020" 
        ProdName='Chaeulsurok' 
        ProdImg={soju} 
        Rating='3.5' 
        Content="This is pure summer, ensconced in a crystal goblet. It hits all the right notes: super lush, tropical, herbaceous, vegetal, pronounced, excellent price point. Flavours of capsicum, asparagus, grapefruit, starfruit, lime, honey, saline, crisp minerality and gorgeous mouth-watering acid."
        Comments="Dark fruits and vanilla. Some wood. Nice complexity, well balanced. Not crazy oak, as one sometimes get from Spain. Must drink again"
      />
      <Review 
        UserName="Julia Kim" 
        UserImg={face2} 
        Date="21 Sep 2020" 
        ProdName='Jangsu' 
        ProdImg={jangsu} 
        Rating='4.5' 
        Content="Found this beauty in southern Spain and really enjoyed it, wish I could take a few bottles to Australia. Very nice red, dark but lighter in taste and easy drinking with or without food."
      />
    </div>
  )
}

export default ReviewPage