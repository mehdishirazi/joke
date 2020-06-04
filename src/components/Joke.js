import React from 'react'
import "./Joke.css"

function Joke (props) {
    function ClassName() {
        let ids = props.id
            if (ids%2 == 0){
                return "jokeRed"
            }else{
                return "jokeBlue"
            }
    }
    
    const propsId =props.id
    return (
        <div className={ClassName()}>
            { propsId > 0 &&  <p id="question">Questions: {props.questions}</p>}
            <p>Answer: {props.answer}</p>
        </div>
    )
}

export default Joke
