import React,{useState} from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number:'040-123456' }
  ]) 
  const [ newName, setNewName ] = useState('')
    const [newNumber,setNewNumber] = useState('')

  const handleNc1=(event)=>{
      setNewName(event.target.value)
  }

  const handleNc3=(event)=>{
    setNewNumber(event.target.value)
}

  const aN1=(event)=>{
    event.preventDefault()
    const v1=persons.some((variable)=>{return variable.name===newName})
    if(v1===true)
    {
      alert(`${newName} is already added to phonebook` )
    }
    else{
    const p3={
      name:newName,
      number:newNumber
    }
    setPersons(persons.concat(p3))
    setNewNumber('')
    setNewName('')
  }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={aN1}>
        <div>
          name: <input value={newName} onChange={handleNc1}/>
          number: <input value={newNumber} onChange={handleNc3}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          persons.map(p5=>{return(
            <h3 key={p5.name}>{p5.name} {p5.number}</h3>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default App