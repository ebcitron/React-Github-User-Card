import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
     data: []
    };
  }

  componentDidMount(){

    axios
    .get('https://api.github.com/users/ebcitron')
    .then(res => {
      console.log('CDM-res', res);
      this.setState({ data: res.data});
      
    })
    .catch(err => {
      console.log('CDM-err', err);
    })
    
  }


  render(){
    
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h5>Made with React.js</h5>
          <p>IBIKI</p>        
      </header>
      <body className="body">


      </body>
      <UserCard userCard = {this.state.data} />
    </div>
     </>
  );
}
}

export default App;
