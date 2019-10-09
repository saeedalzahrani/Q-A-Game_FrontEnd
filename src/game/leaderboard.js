import React, {Component} from 'react'
import {getScore} from "../game/api"
import './leaderboard.scss'


class leaderboard extends Component {
   state ={
       bigsscore : []
       
   }

   componentDidMount(){
            getScore()

            .then(res => {
                // let owners = []
                // let scores = []
                let bigsscore = []
                res.data.leaderboard.map(s => {bigsscore.push({owner: s.owner,
                score: s.score})
                                   })
                bigsscore.sort((a, b) => (a.score > b.score) ? -1 : 1)

                this.setState({
                    bigsscore : bigsscore  
                })
                // console.log(this.state.bigsscore)
            })
            .catch(error => console.log(error))
   }
    render(){
        
       
        return(
        <div className="top-players-div">
            <h2 className="top-players" >TOP PLAYERS</h2>
            <div className="top"> <h4 className="title">Email_Player</h4> <h4 className="title">Score</h4>  </div> 
            <hr/>
            
                {this.state.bigsscore.map((userScore, index) => index < 5 ?    (
                    <div className="div-score">
                    <div className="top"> <p className="top-players1">{userScore.owner}</p> <p className="top-players1">{userScore.score}</p>  </div> 
                     
                     <hr className="line"/>
                    </div>
                    
                ) : null)
            }
                
            </div>
          )     

       
    }
}


export default leaderboard;