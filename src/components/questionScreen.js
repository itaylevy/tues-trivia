import {React, useEffect, useState} from 'react';
import Player from './player';
import Score from './score';
import Question from './question';
import axios from 'axios'
import './answerButton.css';


const QuestionScreen = (props) => {
    const [questions, setQuestions] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [points, setPoints] = useState(0);
    const [maxPoints, addPoints] = useState(0);
    const [timer, setTimer] = useState(30);
    useEffect(() => {
        async function fetchData() {
            const questionsResponse = await axios.get('https://opentdb.com/api.php?amount=100')
            setQuestions(questionsResponse);
        }
        fetchData();

    }, []);
    
    useEffect(() => {
        const clock = () =>{
            const newTime = timer -1 
            setTimeout (()=> setTimer(newTime), 1000)
            if (timer == 0){
                const nextQuestion = currentQuestion + 1;
                setCurrentQuestion(nextQuestion);
                setTimer(30)
            }
        }
        clock();
    }, [timer, currentQuestion]);
   
    const handleAnswerButtonClick = (answerOption) => {
        const pointsDict = {
            'easy': 1,
            'medium': 5,
            'hard': 10
        }
        const newMaxPoints = maxPoints + pointsDict[questions.data.results[currentQuestion].difficulty]
        addPoints(newMaxPoints);
        if (answerOption === questions.data.results[currentQuestion].correct_answer){
            const newPoints = points + pointsDict[questions.data.results[currentQuestion].difficulty];
            setPoints(newPoints);
        }
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
        setTimer(30)
    };
    const decodeHtml = (html) => {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    };
        if (questions !== undefined){
            if (currentQuestion < questions.data.results.length) {
                let availableAnswers = undefined
                availableAnswers = questions.data.results[currentQuestion].incorrect_answers 
                if (!availableAnswers.includes(questions.data.results[currentQuestion].correct_answer)){
                    availableAnswers.push(questions.data.results[currentQuestion].correct_answer)
                }        
                return (
                    <div>
                    <div>Question {currentQuestion+1}</div>
                    <Question question={decodeHtml(questions.data.results[currentQuestion].question)}/>
                    <Player name={props.name} />
                    <Score points={points} />
                    <div>Time: {timer}</div>
                    <div className='answer-section'>
                    {availableAnswers.map((answerOption, index) => (
                        <button className = 'answer' onClick={() => handleAnswerButtonClick(answerOption)}>{decodeHtml(answerOption)}</button>
                    ))}
                </div>
                    </div>
                    )
                

            } else {
                if (points === maxPoints){
                    return <div>You won!</div>
                }
                else{
                    return <div>
                        <div>You didn't succeed this time</div>
                        <div>You achived {points} points out of {maxPoints}</div>
                        </div>

                }
            }
        }
        else{
                return (
                    <div>Loading Tues-Trivia..</div>
                )
            
            
        }
}
export default QuestionScreen;
