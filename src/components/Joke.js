import React from 'react'
import "./Joke.css"

function Joke (props) {

    function ClassName() {
        let ids =[]
        ids.push(props.content.id)
        for (let i=0; i < ids.length; i++){
                debugger
            if (ids[i]%2 == 0){
                return "jokeRed"
            }
            else{
                debugger
                return "jokeBlue"
            }
        }
    }

    return (
        <div className={ClassName()}>
            <p>Questions: {props.content.questions}</p>
            <p>Answer: {props.content.answer}</p>
        </div>
    )
}

export default Joke
