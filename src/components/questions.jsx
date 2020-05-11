import React, { Component } from 'react';
import './questions.css';
  
class Questions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trivia: [], 
            isLoading: false,
            error: null,
           /*  data: null */
      /*   }
    } */

    //fetching results from API, from general questions multiple choice
    componentDidMount() {
        this.setState({ isLoading: true })
        /* this.setState({ question: true }); */
        

         fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
          .then(response => {
              if (response.ok) {
                  return response.json();
              } else {
                  throw Error("Error fetching trivia!")
              }
          })
          .then(trivia => {

            this.setState({ trivia, isloading: false });
     })
        .catch(error => this.setState({ error
        }))
}
    

    render() { 

         const { error, /* isLoading,  */ trivia } = this.state;

         if (error) {
            return <p>{ error.message }</p>
        } 
        /* if (isLoading) {
            return <p>Loading...</p>
          }  */
         
        return ( 
            <div>
                <h1>edquiz</h1>
               {/* {{trivia.map(trivia =>(
                    <>
                    <h3>{ trivia.question }</h3>
                    <p>{ trivia.correct_answer }</p>
                    <p>{ trivia.incorrect_answers }</p>
                    </>
                ))}}
 */}

            </div>
         ); 
    }

}
export default Questions;

/* 
<div className = 'questions'>
{props.trivia.map(trivia => (
<Card key= {trivia.id} trivia={trivia} />
))}
</div>
 */