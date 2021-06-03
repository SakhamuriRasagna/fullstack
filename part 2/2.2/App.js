import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id:1,
    parts: [
      {
        id:1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id:2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id:3,
        name: 'State of a component',
        exercises: 14
      },
      {
        id:4,
        name: 'Redux',
        exercises: 11
      },

    ]
  }
  
  

  return (
    <div>
    < Course a1={course}/>
    </div>
  )
}
const Course = ({a1})=>
{
  return(
    <div>
    <Header b1={a1.name}/>
    <Content c1={a1.parts}/>
    <Total c1={a1.parts}/>

    </div>
  )
}

const Header=({b1})=>{
  return(
    <h2>{b1}</h2>
  )
}

const Content=({c1})=>{
  return(
    <div>
      {
        c1.map(d1=>{
          return(
            <Part key={d1.id} e1={d1.name} f1={d1.exercises}></Part>
          )
        }
        )
      }

    </div> 
  )
    }
  const Part=({e1,f1})=>{
    return(
      <p>{e1} {f1}</p>
    )
  }

  const Total=({c1})=>{
    let x=0
    for(const j of c1)
    {
      x+=j.exercises
    }
    return(
      <p>total of {x} exercises</p>
    )
  }
export default App