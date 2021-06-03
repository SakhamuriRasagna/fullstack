
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
      }
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

export default App