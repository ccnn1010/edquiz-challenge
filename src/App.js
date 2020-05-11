import React from 'react';
import './App.css';
/* import Questions from './components/questions'; */
import Quiz from './components/Quiz'
import { QuizData } from './components/QuizData';

function App() {
  return (
    <div className="App">
 {/*      <Questions /> */}
      <QuizData />
      <Quiz />
    </div>
  );
}

export default App;













/* import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
      super();
 */
     /*  this.state ={ */
        /* loading: true, */
     /*    trivia: []   */
            /* {
              id: '1',
              question: "What alcoholic drink is made from molasses?",
              correct_answer: "Rum",
              incorrect_answers: [
              "Gin",
              "Vodka",
              "Whisky"]

            },
                  id: '2',
                  question: "How many colors are there in a rainbow?",
                  correct_answer: "7",
                  incorrect_answers: [
                  "8",
                  "9",
                  "10"
                  ]
                 }, 
                 
              {
                id: '3',
                question: "Who is depicted on the US hundred dollar bill?",
                correct_answer: "Benjamin Franklin",
                incorrect_answers: [
                "George Washington",
                "Abraham Lincoln",
                "Thomas Jefferson"
                ]
              }


        ]
      
      }  */
   /*    };
  }
 */

  /* getQuestions = () => {
    fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ questions: resp.results }, function() {
         this.props.history.push("/questions/1"); 
        });
      });
  };

  getUserAnswer = (e, id) => {
    let questions = [...this.state.questions];
    questions[id].user_answer = e.target.value;
    this.setState({ questions });
  };
 */






/* CompountDidMount is used because of our class component,  We are fetch from URL, taking a response and converting to JSON format so that JAvascript can understand use, take the users and set monsters to that array of users returns a promise */
 /* componentDidMount() {
  fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
  .then(response => response.json()) 
  .then(response => this.setState({ questions: response.results }));
}  



  render(){

    return (
      <div className="App">
      {this.state.trivia.map( trivia => (
        <p key={trivia.id}> {trivia.question}</p>
      )

      )}
        <h1>edquiz</h1>
        <h2>question</h2>
        <p>A</p>
        <p>B</p>
        <p>C</p>
        <p>D</p>
        <h2>Next</h2>

      </div>
  
 
  	);

  }
}

export default App;
 */