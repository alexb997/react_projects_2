import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { updateUser } from './actions/user-actions';

class App extends Component {
   render (){
     constructor(props){
       super(props);
       this.updateUser = this.onUpdateUser.bind(this);
     }
     onUpdateUser(){
       this.props.onUpdateUser('Sammy');
     }
     return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div onClick={this.onUpdateUser}>
        Update user
      </div>
    </div>
    )
  };
}

const mapStateProps = state =>({
  products: state.products,
  user: state.user
});

const mapActionsToProps ={
  onUpdateUser: updateUser
}

export default connect(mapStateProps)(App);
