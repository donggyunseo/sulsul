import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import Review from './Critics'
import soju from './soju.jpeg'
import face from './face.jpeg'
import face2 from './face2.jpeg'
import jangsu from './jangsu.jpeg' 

function App () {
  return (
    <div className='App'>
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

export default App
