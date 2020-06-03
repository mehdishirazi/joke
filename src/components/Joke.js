import React from 'react'
import "./Joke.css"

function Joke (props) {

    function ClassName() {
        let ids = props.content.id
            if (ids%2 == 0){
                return "jokeRed"
            }else{
                return "jokeBlue"
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
