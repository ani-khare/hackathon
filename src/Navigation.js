
import React from 'react';
const Navigation=(props)=>{
  return(
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Student101</a>
        <span className="navbar-text">Welcome {props.user}</span>
      </nav>
    </div>
  )
}

export default Navigation