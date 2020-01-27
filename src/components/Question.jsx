import React, { Component } from 'react';
// import components
import '../css/Question.css';


class Question extends Component {
  // constructor(props){
    


  // }
  render() {
    return (
      <div>
        <h2>{this.props.question}</h2>  
        <button class="answer">{this.props.answerOne}</button>
        <button class="answer">{this.props.answerTwo}</button>
        <button class="answer">{this.props.answerThree}</button>
        <button class="answer">{this.props.answerFour}</button>
        <button>Reset</button>
      </div>
    );
  }
}

export default Question;