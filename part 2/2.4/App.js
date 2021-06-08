import React from 'react'

const App = () => {
  
  const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
  
    ]

  return (
    <div>
    {
      courses.map((t1)=>{
        return(
          <Course key={t1.id} a1={t1}/>
        )
      }
      )
    }
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

  const Total=({c1})=> {
    const k1=c1.map((y)=>{return(y.exercises)})
    const sum=k1.reduce((a1,c1)=>{return a1+c1})
    return(
      <strong><p>total of{sum} exercises</p></strong>
    )
  }
export default App