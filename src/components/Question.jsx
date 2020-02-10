import React, { Component } from 'react';
// import components
import '../css/Question.css';


class Question extends Component {
  // constructor(props){
    


  // }
  render() {
    return (
      <div className="question">
        <h2>{this.props.question}</h2>  
        
        
      </div>
    );
  }
}

export default Question;