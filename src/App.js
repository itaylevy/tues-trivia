import React from "react"
import "./App.css"
import QuestionScree from './components/questionScreen'

const App = () => {
    return (
      <div className="App">
        <header className="App-header">
          <QuestionScree 
          name='Itay Levy'
           />
        </header>
      </div>
    );
}

export default App
