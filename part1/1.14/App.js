
 import React, { useState } from 'react'

 const App = () => {
   const anecdotes = [
     'If it hurts, do it more often',
     'Adding manpower to a late software project makes it later!',
     'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
     'Premature optimization is the root of all evil.',
     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
   ]
    
   const [selected, setSelected] = useState(0)
   const [closed,setClosed]=useState(Array(6).fill(0))
   
   
   
   const close=()=>{
     const copy=[...closed]
     copy[selected]+=1
     setClosed(copy)
   }
   const g2=()=>{setSelected(Math.floor((Math.random() * 5)))}
  
   return (
     <div>
       <h1>Anectode of the day</h1>
       <Display message={anecdotes[selected]} count={closed[selected]}/>
       <p><Button fun={close} text='votes'/>&nbsp;
       <Button fun={g2} text='nextanecdote'/></p>
       <h3>Anecdote with most votes</h3>
       <Max  messages={anecdotes} votes={closed} />
     </div>
   )
 }
 
 const Display=({message,count})=>
 {
   return(
     <div>
       <h3>{message}<br/>
       has {count} votes</h3>
     </div>
   )
 }
 
 const Button=({fun,text})=>{
   return(
       <button onClick={fun}>{text}</button>
   )
 }
 
 const Max=({messages,votes})=>{
   const m2=Math.max(...votes)
   const w2=votes.indexOf(m2)
   return(
     <Display message={messages[w2]} count={votes[w2]}/>
   )
 
 }
 
 export default App