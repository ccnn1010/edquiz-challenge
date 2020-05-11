import react, { Component } from 'react';
import { QuizData } from './QuizData';
/* import { render } from '@testing-library/react'; */
/* import './app.css'; */

export class Quiz extends Component{
    constructor(props){
        super(props)
        
        this.state = {

            userAnswer: null,
            answer:[],
            currentIndex: 0,
            correct_answer: '',
            incorrect_answers: [],
            quizEnd: false,
            score: 0,
            disabled: true

        }

    }


    /* "question": "Which one of the following rhythm games was made by Harmonix?",
    "correct_answer": "Rock Band",
    "incorrect_answers": [ */



    loadQuiz = () => {
        const {currentIndex} = this.state;
        this.setState(() => {
            return {
                question: QuizData[currentIndex].question,
                incorrect_answers: QuizData[currentIndex].incorrect_answers,
                correct_answer: QuizData[currentIndex].correct_answer,
                answer: QuizData[currentIndex].answer
            }
        })
    }



//This is to handleClick event for the next question
nextQuestionHandler = () => {
    const {userAnswer, incorrect_answers, correct_answer, score} = this.state
    if(userAnswer === incorrect_answers && correct_answer){
        this.setState({
                score: score + 1 
        })
    }
    this.setState(
        {
            currentIndex: this.state.currentIndex + 1,
            userAnswer: null
        }
    )
}



finishHandler = () => {
    if(this.state.currentIndex === QuizData.length-1){
        this.setState({
            quizEnd: true
        })
    }
}



componentDidMount(){
    this.loadQuiz();
}

/* Function to check the answer it selects an answer and assigns it to the user answer*/
//disabled equal to false indicates the button is enabled. When the component did update the question is disabled and the next button is enabled

checkAnswer = answer => {
    this.setState({
        userAnswer: incorrect_answers && correct_answer,
        disabled: false
    })
}


componentDidUpdate(/* prevProps, */ prevState){
    const {currentIndex} = this.state;
    if (this.state.currentIndex != prevState.currentIndex)
    //load a new question
    this.setState(() => {
        return {
            question: QuizData[currentIndex].question,
            incorrect_answers: QuizData[currentIndex].incorrect_answers,
            correct_answer: QuizData[currentIndex].correct_answer
        }
    });

}






//This indicates what renders on the html page/DOM
//make a function which declares all the states to minimize code
render() {
    const {question, incorrect_answer, correct_answer, currentIndex, userAnswer, quizEnd} = this.state

if(quizEnd) {
    return(
        <div>
            <h1>Quiz is finished! Final Score is {this.state.score} points</h1>
            {/* <p>The correct answers are:</p>
            <ul>
                {QuizData.map((item,index)=>
                <li> classname='options'
                key = {index}>
                {item.answer}</li>)}
            </ul> */}
        </div>
    )
}



    return (
        <div>
            <h2>{question}</h2>
            <span>{ `Question ${currentIndex + 1} of ${QuizData.length} `}</span>
            {
                incorrect_answer.map(incorrect_answer => 
                    <p key = {incorrect_answer.id} className={`options ${userAnswer === incorrect_answer? "selected" : null}`} 
                    onClick = {() => this.checkAnswer(incorrect_answer)} >

                            {incorrect_answer}

                    </p>
                )
            }
                {currentIndex < QuizData.length - 1 && <button disabled = {this.state.disabled} onClick = {this.nextQuestionHandler}>
                    Next Question
                </button>}
                
                {currentIndex === QuizData.length - 1 && <button onClick={this.finishHandler} 
                disabled = {this.state.disabled}>
                    Finish
                </button>} 
        </div>
    )
}

//button is only disabled after the user has selected the answer
//When you are at the end of the questions of the currentIndex a new button will be called to identify the end of the quiz


export default Quiz