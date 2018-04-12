import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  celsius(degree) {
    var x;
    x = document.getElementById("c").value;
    if (isNaN(x)) {
        document.getElementById("error").innerHTML = "Warning! '" + x + "' Is not a number!";
        setTimeout(function(){ document.getElementById("error").innerHTML = ""; }, 5000);
    } else {
        x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round( x * 10 ) / 10;
        document.getElementById("error").innerHTML = "";  
    }
  
  }

  fahrenheit(degree) {
    var x;
    x = document.getElementById("f").value;
    if (isNaN(x)) {
        document.getElementById("error").innerHTML = "Warning! '" + x + "' Is not a number!";
        setTimeout(function(){ document.getElementById("error").innerHTML = ""; }, 5000);
    } else {
    x = (document.getElementById("f").value -32) * 5 / 9;
    document.getElementById("c").value = Math.round( x * 10 ) / 10;
    document.getElementById("error").innerHTML = "";  
    }
  }

  render() {
    return (
      <div className="container">
      <h1>Temperature Converter</h1>
      <div className="row">
        
        <div className="col-md-6">
          <p>Celsius</p>
          <input id="c"  placeholder="Degree in Celsius"></input>
          <button value=" " onClick={(fahrenheit) => this.celsius(fahrenheit)}><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></button>
        </div>
        <div className="col-md-6">
          <p>Fahrenheit</p>
          <button  value=" " onClick={(celsius) => this.fahrenheit(celsius)}><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></button>
          <input id="f" placeholder="Degree in Fahrenheit"></input>
        </div>
        <div id="error"></div>
      </div>
      </div>
    );
  }
}

export default App;