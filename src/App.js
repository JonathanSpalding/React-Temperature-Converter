import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FaBeer from 'react-icons/lib/fa/beer';
//import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  notify = () => toast("Wow so easy !");

  constructor(props) {
    
    //set our initial state.
    super(props);
    this.state = {
    }
    //bind the button click handler
    this._onFahrenheitClicked.bind(this);
    this._onCelsiusClicked.bind(this);
  }

  _onFahrenheitClicked(event) {
    event.preventDefault();
    //showAnswer: !this.state.showAnswer
    var x = document.getElementById("f").value;
    if (isNaN(x)) {
      toast("Warning! '" + x + "' Is not a number!");
    } else {
    x = (document.getElementById("f").value -32) * 5 / 9;
    document.getElementById("c").value = Math.round( x * 10 ) / 10;
    document.getElementById("error").innerHTML = "";
    }
  }
  _onCelsiusClicked(event) {
    event.preventDefault();
    var x = document.getElementById("c").value;
    if (isNaN(x)) {
      toast("Warning! '" + x + "' Is not a number!");
    } else {
        x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round( x * 10 ) / 10;
        document.getElementById("error").innerHTML = "";  
    }
  }

  render() {
    return (
      <div className="container">
      
          <ToastContainer />
      <h1>Temperature Converter</h1>
      <div className="row">
        
        <div className="col-md-6">
          <h2>Celsius</h2>
          <input id="c" defaultValue="0" placeholder="Degree in Celsius"></input>
          <button value=" " onClick={this._onCelsiusClicked}><i className="fas fa-angle-double-right"></i></button>
        </div>
        <div className="col-md-6">
          <h2>Fahrenheit</h2>
          <button  value=" " onClick={this._onFahrenheitClicked}><i className="fas fa-angle-double-left"></i></button>
          <input id="f" defaultValue="32" placeholder="Degree in Fahrenheit"></input>
        </div>
        <div id="error"></div>
      </div>
      </div>
    );
  }
}

export default App;