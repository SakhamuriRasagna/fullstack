import React,{useState} from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
    

  const handleNc1=(event)=>{
      setNewName(event.target.value)
  }

  const aN1=(event)=>{
    event.preventDefault()
    const p3={
      name:newName
    }
    setPersons(persons.concat(p3))
    setNewName('')
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={aN1}>
        <div>
          name: <input value={newName} onChange={handleNc1}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          persons.map(p5=>{return(
            <h3 key={p5.name}>{p5.name}</h3>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default App