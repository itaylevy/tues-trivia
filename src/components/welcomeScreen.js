import React, { useState } from "react";

const WelcomeScreen = ({onSubmit}) => {
    const [name, setName] = useState("");
    return (
        
        <form onSubmit={() => onSubmit(name)}>
        <div>Welcome to Tues-Trivia</div>
        <label>Please enter your name:</label>
        <input onChange={(e) => setName(e.target.value)}/>
        </form>
    )
}
export default WelcomeScreen;