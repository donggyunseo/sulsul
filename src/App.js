import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import Alcohols from './Alcohols'
import ReviewPage from './reviewPage'
import './AppCSS.css'

function App () {
  return (
    <div className='App'>
      <Router>
        <div className="Banner">
          <ul className="Top">
            <li><Link className="Menus" to='/'>Home</Link></li>
            <li><Link className="Menus" to='/Alcohols'>Alcohols</Link></li>
            <li><Link className="Menus" to='/Reviews'>Reviews</Link></li>
          </ul>
          <button className="Login">Login</button>
        </div>
        <div className='Account'>
          <div className="email">
            <div style={{float: "left"}}>
              <p style={{margin: "0px", padding: "0px", borderWidth: "0px"}}>Email:</p>
              <p style={{margin: "0px", padding: "0px", borderWidth: "0px"}}><input type="text" className="inputEmail"></input></p>
            </div>
          </div>
          <div className="Pwd">
            <div style={{float: "left"}}>
              <p style={{margin: "0px", padding: "0px", borderWidth: "0px"}}>Password:</p>
              <p style={{margin: "0px", padding: "0px", borderWidth: "0px"}}><input type="password" className="inputPwd"></input></p>
            </div>
          </div>
          <div className="CheckLogin">
            <input type="button" value="Verify"></input>
          </div>
        </div>
        <Route exact path='/' component={Home} />
        <Route path='/Alcohols' component={Alcohols} />
        <Route path='/Reviews' component={ReviewPage}/>
      </Router>
    </div>
  )
}

export default App
