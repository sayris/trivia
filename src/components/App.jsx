import React, { Component } from 'react';
import '../css/App.css';
// import components
import Question from './Question';
import Answer  from './Answer';
import '../questionData.js';

class App extends Component {

  render() {
    return (

      <div className="app">
        
       <Question
       question= "How old are you?"
       

        />
         <Answer 
         answerOne="1"
       
         />
         <Answer 
         answerOne="1"
       
         />
         <Answer 
         answerOne="1"
       
         />
         <Answer 
         answerOne="1"
       
         />

        
        
      </div>
    );
  }
}

export default App;