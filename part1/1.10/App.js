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
        <Button f1={B1} m1='good'/>
        <Button f1={B2} m1='neutral'/>
        <Button f1={B3} m1='bad'/>
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
  <div>
    <Statistic c1={props.g1} text='good'/> 
    <Statistic c1={props.n1} text='neutral'/>
    <Statistic c1={props.b1} text='bad'/>
    <Statistic c1={t1} text='all'/>
    <Statistic c1={a1} text='average'/>
    <Statistic c1={p1} text='positive'/>
  </div>
  )
}
     const Button=(props)=>{
       return(
         <button onClick={props.f1}>{props.m1}</button>
       )
     }
const Statistic=(props)=>{
  return(
    <p> {props.text} {props.c1}</p>
  )
}     
export default App