import React, { Component } from 'react';

class Answer extends Component {
    // constructor(props){
      
  
  
    // }
    render() {
      return (
        <div className="answer">
         
          <button>{this.props.answerOne}</button>
          <p>{this.props.answerTwo}</p>
          <p>{this.props.answerThree}</p>
          <p>{this.props.answerFour}</p>
        </div>
      );
    }
  }


export default Answer