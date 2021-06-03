import React, {useState} from 'react'

const Person = ({ key1 }) => {
  return (
    <div>
      &nbsp;&nbsp;{key1.content}

    </div>
  )
}

const App = (props) => {
  const [ persons, setPersons ] = useState(props.persons)
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event1) => {
    console.log(event1.target.value)
    setNewName(event1.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      content: newName,
      id: persons.length + 1,
    }
  setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const namesToShow = persons
  
  
  return (
    <div>
      <h2>&nbsp;Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          &nbsp;name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          &nbsp;<button type="submit">add</button>
        </div>
      </form>
      <h2>&nbsp;&nbsp;Numbers</h2>
      {namesToShow.map(key1 =>
          <Person key={key1.id} key1={key1} />
        )}
      

    </div>
  )
}

export default App