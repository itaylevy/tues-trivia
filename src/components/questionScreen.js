import React, {useEffect, useState} from 'react';
import Player from './player';
import Score from './score';
import Question from './question';
import axios from 'axios'
import './answerButton.css';


const QuestionScreen = (props) => {
    const [questions, setQuestions] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [points, setPoints] = useState(0);
    const [timer, setTimer] = useState(5);
    const [won, didWon] = useState(true);
    useEffect(() => {
        async function fetchData() {
            const questionsResponse = await axios.get('https://opentdb.com/api.php?amount=100')
            setQuestions(questionsResponse.data.results);
        }
        fetchData();
    }, []);
    
    useEffect(() => {
            if (timer <= 0)
            {
                const nextQuestion = currentQuestion + 1;
                setCurrentQuestion(nextQuestion);
                didWon(false)
                setTimer(5)
        }
    }, [timer, currentQuestion]);

    useEffect(() => {
        const timerId = setInterval (()=> {
            setTimer(currTime => currTime -1);
        }, 1000)
    }, []);
   
    const handleAnswerButtonClick = (answerOption) => {
        if (answerOption === questions[currentQuestion].correct_answer){
            const newPoints = points + 1
            setPoints(newPoints);
        }
        else
        {
            didWon(false)
        }
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
        setTimer(5)
    };
    const decodeHtml = (html) => {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    };
        if (questions !== undefined){
            if (currentQuestion < questions.length) {
                let availableAnswers = undefined
                availableAnswers = questions[currentQuestion].incorrect_answers 
                if (!availableAnswers.includes(questions[currentQuestion].correct_answer)){
                    availableAnswers.push(questions[currentQuestion].correct_answer)
                }        
                return (
                    <div>
                    <div className='question-section'>
                    <div className='question-count'>Question {currentQuestion+1}/{questions.length}</div>
                    <Question className='question-text' question={decodeHtml(questions[currentQuestion].question)}/>
                    </div>
                    <Player name={props.name} />
                    <Score points={points} />
                    <div className='timer-text'>Time: {timer}</div>
                    <div className='answer-section'>
                    {availableAnswers.map((answerOption, index) => (
                        <button className = 'answer' onClick={() => handleAnswerButtonClick(answerOption)}>{decodeHtml(answerOption)}</button>
                    ))}
                </div>
                    </div>
                    )  
            } else {
                if (won){
                    return (
                    <div>
                        You won!
                    </div>
                    )
                }
                else{
                    return (
                    <div>
                        <div>You didn't succeed this time</div>
                        <div>You achived {points} points out of {questions.length}</div>
                        </div>
                    );
                }
            }
        }
        else{
                return (
                    <div>
                        <div>Welcome to Tues-Trivia</div>
                        <div>Loading Game</div>
                    </div>
                );
        }
}
export default QuestionScreen;
