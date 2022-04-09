import {React, useEffect, useState} from 'react';
import Player from './player';
import Score from './score';
import Question from './question';
// import AnswerButton from './answerButton';
import axios from 'axios'



const QuestionScreen = (props) => {
    const [questions, setQuestions] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [points, setPoints] = useState(0);
    // const [timer, setTimer] = useState(60);
    useEffect(() => {
        async function fetchData() {
            const questionsResponse = await axios.get('https://opentdb.com/api.php?amount=100')
            console.log("on start");
            setQuestions(questionsResponse);
        }
        fetchData();
    }, []);
    
    const handleAnswerButtonClick = (answerOption) => {
        if (answerOption === questions.data.results[currentQuestion].correct_answer){
            const pointsDict = {
                'easy': 1,
                'medium': 5,
                'hard': 10
            }
            const newPoints = points + pointsDict[questions.data.results[currentQuestion].difficulty];
            setPoints(newPoints);
        }
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
        console.log(questions.data.results[currentQuestion])
    };
        if (questions !== undefined){
            console.log('inside if');
            if (currentQuestion < questions.data.results.length) {
                let availableAnswers = undefined
                if (questions.data.results[currentQuestion].incorrect_answers !== undefined){
                    availableAnswers = questions.data.results[currentQuestion].incorrect_answers 
                    availableAnswers.push(questions.data.results[currentQuestion].correct_answer)
                }
    
                return (
                    <div>
                        <div>Question {currentQuestion+1}</div>
                    <Question question={questions.data.results[currentQuestion].question}/>
                    <Player name={props.name} />
                    <Score points={points} />
                    <div className='answer-section'>
                    {availableAnswers.map((answerOption, index) => (
                        <button onClick={() => handleAnswerButtonClick(answerOption)}>{answerOption}</button>
                    ))}
                </div>
                    </div>
                    )
                

            } else {
                return <div>{points}</div>
            }
        }
        else{
                return (
                    <div>Loading..</div>
                )
            
            
        }
}
export default QuestionScreen;
