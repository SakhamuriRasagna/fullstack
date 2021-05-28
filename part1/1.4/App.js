import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  
  

  return (
    <div>
     <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}
const Header=c=>{
  return(
    <h1>{c.course}</h1>
  )
}
const Content=(props)=>{
  const li=props.parts
  const Li=li.map((part)=>{
    return(<p>{part.name} {part.exercises}</p>)
      }
    )
    return(<div>{Li}</div>)
}
const Total=(props)=>{
  const li=props.parts
  let c1=0
  for(const r of li){
    c1+=r.exercises
  }
  return(
    <p>No:Of:Exercises:{c1}</p>
  )
}

export default App