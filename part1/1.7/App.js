import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const B1=()=>{setGood(good+1)}
  const B2=()=>{setNeutral(neutral+1)}
  const B3=()=>{setBad(bad+1)}
  const t1= good+neutral+bad
  const a1=good-bad/t1
  const p1=good*100/t1
  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <button onClick={B1}>good</button><button onClick={B2}>neutral</button><button onClick={B3}>bad</button>
      </p>
      <h2>Staistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>
        
        all:{t1}<br/>
        average:{a1}<br/>
        positive:{p1}%
      
      </p>
    </div>
  )
}

export default App