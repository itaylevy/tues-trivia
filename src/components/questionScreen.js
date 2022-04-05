import React from 'react';
import Player from './player';
import Score from './score';
import Question from './question';
import AnswerButtom from './answerButton';

class QuestionScreen extends React.Component{
    constructor(props){
        super(props);
        this.question = this.props.question;
        this.name = this.props.name;
        this.points = this.props.points;
        this.answer = this.props.answer;
    }
    render(){
        return (
        <div>
        <Question question={this.question}/>
        <Player name={this.name} />
        <Score points={this.points} />
        <AnswerButtom isCorrect='true' answer={this.answer} />   
        </div>
        )
    }
}
export default QuestionScreen;