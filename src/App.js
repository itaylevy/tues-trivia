import React from "react"
import "./App.css"
import QuestionScree from './components/questionScreen'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <QuestionScree 
          name='Itay'
           />
        </header>
      </div>
    )
  }
}

export default App
