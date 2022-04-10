import React, {useState} from "react"
import "./App.css"
import QuestionScree from './components/questionScreen'
import WelcomeScreen from "./components/welcomeScreen";

const App = () => {
  const [name, setName] = useState();
  console.log(name)
    return (
      <div className="App">
        <header className="App-header">
          {name ? 
          (<QuestionScree name={name}/>): (<WelcomeScreen onSubmit={setName} 
           />)}
          
        </header>
      </div>
    );
}

export default App
