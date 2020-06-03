import React from 'react'
import Joke from "./Joke"
import "./App.css"
import "./Joke.css"

function ClassNames() {
    if (document.getElementById("1").id == 1){
        let even = document.getElementById("1");
        even.className = "jokeRed"
    }
}

function App(){
    return (
        <div className="App">
            <Joke id="1"/>
            <Joke id="2"/>
        </div>
    )
}

export default App
