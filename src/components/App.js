import React from 'react'
import Joke from "./Joke"
import "./App.css"

function App() {
    return (
        <div className="App">
            <Joke content={
                    {
                        id:"1", 
                        questions:"What do you call a boomerang that won’t come back?",
                        answer:"A stick"
                    }
                }
            />
            <Joke content={
                    {
                        id:"2",
                        questions:"What does a cloud wear under his raincoat?",
                        answer:"Thunderwear"
                    }
                }
            />
            <Joke content={
                    {
                        id:"3",
                        questions:"Two pickles fell out of a jar onto the floor. What did one say to the other?",
                        answer:"Dill with it"
                    }
                }
            />
            <Joke content={
                    {
                        id:"4",
                        questions:"",
                        answer:"Time to get a new clock"
                    }
                }
            />
        </div>
    )
}

export default App
