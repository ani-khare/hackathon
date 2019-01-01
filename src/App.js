import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation.js'
import MainComponents from './MainComponents';
import Login from './Login.js'
import Enter from './Enter.js'


class App extends Component {
  constructor()
  {
    super();
    this.state={
      user:""
    }
  }
  updateUser= (newuser)=>{
    this.setState({
      user: newuser
    }, ()=>{
          console.log(this.state.user)
        })
  }
  render() {
    return (
      <div className="App">
      {console.log(this.state.user)}
        {this.state.user?<MainComponents user={this.state.user}/>:<Enter updateUser={this.updateUser}/>}
      </div>
    );
  }
}

export default App;
