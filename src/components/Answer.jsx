import React, { Component } from 'react';

class Answer extends Component {
    constructor(props){
      super()
  
      this.checkAnswer= this.checkAnswer.bind(this);
    }
  
    checkAnswer() {
      if(this.props.answerOne === this.props.correctAnswer)
      {
        alert("Correct")
      }else{
        alert("Wrong")
      }



    }
    render() {
      return (
        <div className="answer">
         
          <button onClick={this.checkAnswer}>{this.props.answerOne}</button>
  
        </div>
      );
    }
  
  }


export default Answer