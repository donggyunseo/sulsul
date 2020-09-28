import React, { useState, useEffect } from 'react'
import './Review.css'
import comment from './comment.svg'
import like from './like.svg'
import face from './face.jpeg'
import emptyStar from './emptyStar.svg'
import fullStar from './fullStar.svg'
import halfStar from './halfStar.svg'

function Stars(x) {
  return (
    <div className="Stars">
      
    </div>
  )
}

function Review(props) {
  const [count, setCount] = useState(0)
  const [coCount, setcoCount] = useState(6)

  const likeIt = () => {
    setCount(count + 1)
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
                <img className='Star' src={fullStar}></img>
                <img className='Star' src={fullStar}></img>
                <img className='Star' src={halfStar}></img>
                <img className='Star' src={emptyStar}></img>
                <img className='Star' src={emptyStar}></img>
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
    </div>
  )
}

export default Review
