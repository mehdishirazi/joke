import React from 'react'
import Joke from "./Joke"
import "./App.css"
import jokeData from "./JokeData"
    

function App() {
    const jokeComponents = jokeData.map(item => <Joke id={item.id} questions={item.questions} answer={item.answer}/>)

    return (
        <div className="App">
            {jokeComponents}
        </div>
    )
}

export default App
