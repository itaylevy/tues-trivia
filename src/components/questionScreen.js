import React from 'react';
import Player from './player';
import Score from './score';
import Question from './question';
import AnswerButtom from './answerButton';

class QuestionScreen extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div>
        <Question question={this.props.question}/>
        <Player name={this.props.name} />
        <Score points={this.props.points} />
        <AnswerButtom isCorrect='true' answer={this.props.answer} />   
        </div>
        )
    }
}
export default QuestionScreen;