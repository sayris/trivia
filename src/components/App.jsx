import React, { Component } from 'react';
import '../css/App.css';
// import components
import Question from './Question';

class App extends Component {

  render() {
    return (

      <div className="app">
       <Question
       question= "How old are you?"
       answerOne= "2"
       answerTwo="13"
       answerThree="27"
       answerFour="34"


        />
         <Question
       question= "How old are you?"
       answerOne= "2"
       answerTwo="13"
       answerThree="27"
       answerFour="34"


        />
        
        <Question
       question= "How many children you have?"
       answerOne= "2"
       answerTwo="13"
       answerThree="27"
       answerFour="34"


        />
        
        
      </div>
    );
  }
}

export default App;