import React, {Component} from "react";
import axios from 'axios'
import './header/Header.scss'

class Question extends Component {
  state = {
    question: {
      text: "",
      answer: true
    }
  };

  // componentDidMount() {
  //   axios({
  //     method: "post",
  //     url: `localhost:3000/questions/`
  //   })
  //     .then(response => {
  //     })

  //     .catch(error => {
  //       console.log("Request failed");
  //     });
  // }
  handleChangeT = event => {
    const name = event.target.name;
    const userInput = event.target.value;
    const newFormData = Object.assign(this.state.question);
    newFormData[name] = userInput;
    this.setState({
      question: newFormData
    });
    
  };

  handleChangeO = event => {
    const name = event.target.name;
    console.log(event.target.value)

    if(event.target.value === 'true') {
      const userInput = true;
    const newFormData = Object.assign(this.state.question);
    newFormData[name] = userInput;
    this.setState({
      question: newFormData
    });
    }
    else{
      const userInput = false;
    const newFormData = Object.assign(this.state.question);
    newFormData[name] = userInput;
    this.setState({
      question: newFormData
    });
    }
    
    
  };

  submitHandling = event => {
    event.preventDefault();
    axios({
      method: "post",
      url: `http://localhost:3000/questions/`,
      data:this.state
    })
      .then(response => {
        console.log(response.data.question)

      })

      .catch(error => {
        console.log("Request failed");
      });

    this.setState({
      text: "",
      option: ""
    });
  };

  render() {
    return (
      <div className='form'>
        <form  onSubmit={this.submitHandling}>
          <br />
          <label>text</label>
          <br />
          <input
            name="text"
            onChange={this.handleChangeT}
            value={this.state.question.text}
          />
          <br />
          <label>right answer</label>
          <br />
          <select name="answer"
          onChange={this.handleChangeO}
          value={this.state.question.option}>
            <option value='true'>True</option>
            <option value='false'>False</option>
          </select>
          <br />
          <br />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default Question;
