import React from 'react';

class AnswerButton extends React.Component{
    constructor(props){
        super(props);
        this.answer = props.answer;
        this.isCorrect = props.isCorrect;
    }
    render(){
        return (
            <button>
                {this.answer}
            </button>
        )
    }
}
export default AnswerButton;