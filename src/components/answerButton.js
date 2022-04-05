import React from 'react';
import './AnswerButton.css'

class AnswerButton extends React.Component{
    constructor(props){
        super(props);
        this.answer = props.answer;
        this.isCorrect = props.isCorrect;
    }
    render(){
        return (
            <button className='answer-button'>
                {this.answer}
            </button>
        )
    }
}
export default AnswerButton;