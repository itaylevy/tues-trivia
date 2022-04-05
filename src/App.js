import React from "react"
import "./App.css"
import QuestionScree from './components/questionScreen'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <QuestionScree 
          question='Hi' 
          name='Itay'
           points='1'
            answer='Lion'/>
        </header>
      </div>
    )
  }
}

export default App
