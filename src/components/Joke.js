import React from 'react'
import "./Joke.css"

function Joke (props) {
    debugger
    function ClassName() {
        let ids =[]
        ids.push(props.id)
        for (let i=0; i < ids.length; i++){
            if (ids[i]%2 == 0){
                props.ClassName = "jokeRed"
            }
            else{
                props.ClassName = "jokeBlue"
            }
        }
    }
    return (
        <div className={ClassName()}>
            <p>Questions: What do you call a boomerang that won’t come back?</p>
            <p>Answer: A stick.</p>
        </div>
    )
}

export default Joke
