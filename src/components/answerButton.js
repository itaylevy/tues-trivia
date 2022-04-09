import React from 'react';
import './answerButton.css';

class AnswerButton extends React.Component{
    constructor(props){
        super(props);
        this.isCorrect = props.isCorrect;
    }
    render(){
        return (
            <button className='answer'>
                {this.props.answer}
            </button>
        )
    }
}
export default AnswerButton;