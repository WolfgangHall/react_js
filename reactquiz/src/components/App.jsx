import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            questions: [
                {
                    id:1,
                    text: 'What is your name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Michael'
                        },
                        {
                            id: 'b',
                            text: 'Wolfgang'
                        },
                        {
                            id: 'c',
                            text: 'Steven'
                        },

                    ],
                    correct: 'b'
                },
                {
                    id:2,
                    text: 'What material is prominent in Wakanda?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Adamantium'
                        },
                        {
                            id: 'b',
                            text: 'Vibranium'
                        },
                        {
                            id: 'c',
                            text: 'Unobtanium'
                        },

                    ],
                    correct: 'b'
                },
                {
                    id:3,
                    text: 'What is your mother\'s name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Jackie'
                        },
                        {
                            id: 'b',
                            text: 'Ashton'
                        },
                        {
                            id: 'c',
                            text: 'Adina'
                        },

                    ],
                    correct: 'c'
                },
                {
                    id:4,
                    text: 'Which superhero uses a shield?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Captain America'
                        },
                        {
                            id: 'b',
                            text: 'Cyclops'
                        },
                        {
                            id: 'c',
                            text: 'Storm'
                        },

                    ],
                    correct: 'a'
                }
            ],
            score: 0,
            current: 1
        }
    }

    setCurrent(current){
        this.setState({current});
    }    

    setScore(score){
        this.setState({score});
    }

    render(){
        if(this.state.current > this.state.questions.length){
            var scorebox = '';
            var results = <Results {...this.state} />
        } else {
            var scorebox = <Scorebox {...this.state} />;
            var results = '';
        }
        return(
            <div>
                {scorebox}
                <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)}/>
                {results}
            </div>
        )
    }
}

export default App