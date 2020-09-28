import React, { useState } from 'react'
import './Review.css'
import comment from './comment.svg'
import like from './like.svg'
import emptyStar from './emptyStar.svg'
import fullStar from './fullStar.svg'
import halfStar from './halfStar.svg'

function Review(props) {
  const [count, setCount] = useState(0)
  const [coCount, setcoCount] = useState(6)

  const likeIt = () => {
    setCount(count + 1)
  }

  let starRating = []
  let Rating = props.Rating

  while (Rating >= 1) {
    starRating.push(1)
    Rating -= 1
  }

  if (Rating > 0) {
    starRating.push(0.5)
  }

  while (starRating.length < 5) {
    starRating.push(0)
  }

  return (
    <div className="Review">
      <div className="ReviewContents">
        <div className="Img">
          <img className="ProdImg" src={props.ProdImg}></img>
        </div>
        <div className="ReviewTitle">
          <div className="User">
            <div className='ProdIntro'>
              <a className='ProdName'>{props.ProdName}</a>
            </div>
            <img src={props.UserImg} className='UserFace'></img>
            <div className='UserInf'>
              <div className="Stars">
                {starRating.map((value) => {
                  if (value === 1) {
                    return <img className='Star' src={fullStar}></img>
                  } else if (value === 0.5) {
                    return <img className='Star' src={halfStar}></img>
                  } else {
                    return <img className='Star' src={emptyStar}></img>
                  }
                })}
              </div>
              <p className='UserName'>{props.UserName}</p>
              <p className='Date'>{props.Date}</p>
            </div>
          </div>
        </div>
        <div className="container">
          <p className='Content'>{props.Content}</p>
        </div>
        <div className="ComLike">
          <div className="divLike">
            <a onClick={likeIt} className='Recommend' style={{padding:'5px'}}>
              <img src={like} className='CommentImg'></img>
              {count}
            </a>
          </div>
          <div className="divCom">
            <a className='Comment' style={{padding:'5px'}}>
              <img src={comment} className='CommentImg'></img>
              {coCount}
            </a>
          </div>
        </div>
      </div>
      <div className="CommentsCollection">
        
      </div>
    </div>
  )
}

export default Review
