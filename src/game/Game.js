import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {getQuestions,getQuestionsById,creatGuesse,getGuesse,sendScore} from "./api"
import './Game.scss'
let array = [1]
class Game extends Component {
    state = {
        listOfQuestions: [],
        question: {},
        index: null,
        id: null,
        score: 0,
        correct: null,
        fullMark: null
    }
    
    componentWillMount(){

        getQuestions(this.props.user)
       
        .then(response =>{
    
            // this.state.listOfQuestions = 
            array = response.data.questions.map(question => {
                return question._id
            })
            this.setState({
                listOfQuestions: array,
                index: Math.floor(Math.random()*array.length),
                fullMark: array.length - 1
            })
            
            this.setState({
                id: this.state.listOfQuestions[this.state.index],
                listOfQuestions: array,
            })

            array = array.filter(id => id !== this.state.id)

            this.setState({index: Math.floor(Math.random()*array.length)})

            getQuestionsById(this.props.user,this.state.id)
            .then(response => {
                console.log(response.data.question)
                this.setState({
                    question: response.data.question
                })
            })
            .catch(error => {
                console.log(error)
            })
        }
        
        )
        .catch(error => {
            console.log(error)
        })
}

    

        
        
      submitHandling = event => {
        event.preventDefault();
       
        let choice = event.target.value
        // console.log(choice)
        if(this.state.listOfQuestions.length>=1){
        if(choice == 'true'){
            
            // console.log(`dddd: ${this.state.id}` )
            let choice = true

            creatGuesse(this.props.user,this.state.id,choice)
                .then(response => {
                  console.log(response.data.guesse)

                    this.setState({
                        // guesseId: response.data.,
                        listOfQuestions: array,
                        index: Math.floor(Math.random()*array.length),
                    })
                    
                    this.setState({
                        id: this.state.listOfQuestions[this.state.index],
                        listOfQuestions: array,
                    })
        
                    array = array.filter(id => id !== this.state.id)
        
                    this.setState({index: Math.floor(Math.random()*array.length)})
        
                    getQuestionsById(this.props.user,this.state.id)
                    .then(response => {
                        console.log(response.data.question)
                        this.setState({
                            question: response.data.question
                        })  
                    })
                    .catch(error => {
                        console.log(error)
                    }) 
                    getGuesse(this.props.user,response.data.guesse._id)
                    .then(response => {
                        this.setState({
                            correct: response.data.guesse.correct
                        })
                        if(this.state.correct === true){
                            this.setState({
                                score: this.state.score+1
                            })
                        }
                        if (this.state.listOfQuestions.length===1)
                        sendScore(this.props.user,this.props.user.email,this.state.score)
                        .then(response =>{
                            console.log(response)
                        })
                        .catch( error => {
                                console.log(error)
                        })
                    })
                    
                })
                .catch(error => {
                  console.log(error);
                });

                
                
            
        }
        else {
            
            // console.log(`dddd: ${this.state.id}` )
            // console.log(this.state.guesse)
            let choice = false
        
            creatGuesse(this.props.user,this.state.id,choice)
                .then(response => {
                  console.log(response.data.guesse)

                    this.setState({
                        listOfQuestions: array,
                        index: Math.floor(Math.random()*array.length),
                    })
                    
                    this.setState({
                        id: this.state.listOfQuestions[this.state.index],
                        listOfQuestions: array,
                    })
        
                    array = array.filter(id => id !== this.state.id)
        
                    this.setState({index: Math.floor(Math.random()*array.length)})
        
                    getQuestionsById(this.props.user,this.state.id)
                    .then(response => {
                        console.log(response.data.question)
                        this.setState({
                            question: response.data.question
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    getGuesse(this.props.user,response.data.guesse._id)
                    .then(response => {
                        this.setState({
                            correct: response.data.guesse.correct
                        })
                        if(this.state.correct === true){
                            this.setState({
                                score: this.state.score+1
                            })
                        }
                        if (this.state.listOfQuestions.length === 1)
                        sendScore(this.props.user,this.props.user.email,this.state.score)
                        .then(response =>{
                            console.log(response)
                        })
                        .catch( error => {
                                console.log(error)
                        })
                    })
                })
                .catch(error => {
                  console.log(error);
                });
                
           

        }
        
       
       
        
    
       
    }
    console.log("this.state.listOfQuestions")
    console.log(this.state.listOfQuestions.length)
    

        
        
      };
      playAgain = () => {
        array=[1]
        this.setState({
            listOfQuestions: [],
            question: {},
            index: null,
            id: null,
            score: 0,
            correct: null,
        })
        getQuestions(this.props.user)
       
        .then(response =>{
    
            // this.state.listOfQuestions = 
            array = response.data.questions.map(question => {
                return question._id
            })
            this.setState({
                listOfQuestions: array,
                index: Math.floor(Math.random()*array.length),
            })
            
            this.setState({
                id: this.state.listOfQuestions[this.state.index],
                listOfQuestions: array,
            })

            array = array.filter(id => id !== this.state.id)

            this.setState({index: Math.floor(Math.random()*array.length)})

            getQuestionsById(this.props.user,this.state.id)
            .then(response => {
                console.log(response.data.question)
                this.setState({
                    question: response.data.question
                })
            })
            .catch(error => {
                console.log(error)
            })
        }
        
        )
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        return(
            <div className="question">
            { array.length > 0 ?<div>
                <h1>{this.state.question.text}</h1>
                  
                    <button className="question-true-button" value='true' onClick={this.submitHandling} >True</button>
                    <button className="question-false-button" value='false' onClick={this.submitHandling}  >False</button>
                    </div>
            :<div className="Game-over">
                <h1>GAME OVER</h1>
                <h1>{this.state.score}/{this.state.fullMark}</h1>
                <button className="question-playagine-button" onClick={this.playAgain}>Play Again</button>
            </div>}
               
            </div>
        )
    }
}

export default withRouter(Game)