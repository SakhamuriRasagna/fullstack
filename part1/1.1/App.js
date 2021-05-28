import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header Course={course} />
      <Content b1={part1} b2={part2} b3={part3} d1={exercises1} d2={exercises2} d3={exercises3} />
      <Total total={exercises1+exercises2+exercises3}/>
    </div>  )
}

const Header=demo=>{
  return(
    <div>
      <h1>demo.Course}</h1>
    </div>
  );
}
const Content=demos=>{
  return(
    <div>
      <p>
        {demos.b1} {demos.d1}
      </p>
      <p>
        {demos.b2} {demos.d2}
      </p>
      <p>
        {demos.b3} {demos.d3}
      </p>
    </div>
  )
}

const Total=to=>{
  return(
    <div>
      <p>No:Of:Exercises:{to.total}</p>
    </div>
  )
}

export default App