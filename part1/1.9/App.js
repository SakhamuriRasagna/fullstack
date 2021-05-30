import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const B1=()=>{setGood(good+1)}
  const B2=()=>{setNeutral(neutral+1)}
  const B3=()=>{setBad(bad+1)}
  
  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <button onClick={B1}>good</button><button onClick={B2}>neutral</button><button onClick={B3}>bad</button>
        </p>
      <h2>Statistics</h2>
       <Statistics g1={good} n1={neutral} b1={bad}/>
    </div>
  )
}
const Statistics=(props)=>{
  if (props.g1===0 && props.n1===0 && props.b1===0)
  return (
    <h2> No FeedBack Given</h2>
  )
  const t1=props.g1+props.n1+props.b1
  const a1=props.g1-props.b1/t1
  const p1=props.g1*100/t1
  return(
    <p>
      good {props.g1}<br></br>
      neutral {props.n1}<br></br>
      bad {props.b1}<br></br>
      all {t1}<br></br>
      average {a1}<br></br>
      positive {p1}<br></br>
    </p>
  )
}
export default App