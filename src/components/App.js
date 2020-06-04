import React from 'react'
import Joke from "./Joke"
import "./App.css"
import jokeData from "./JokeData"
    

function App() {
    debugger
    let mehdi = jokeData
    console.log(jokeData)
    const jokeComponents = mehdi.map(item => <Joke questions={mehdi.questions} answer={mehdi.answer}/>)
    debugger
    console.log(jokeComponents)

    return (
        <div className="App">
            {jokeComponents}
        </div>
    )
}

export default App
