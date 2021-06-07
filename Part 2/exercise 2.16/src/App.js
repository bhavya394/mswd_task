import React, { useState,useEffect } from 'react'
import EService from './services/Persons'
import PersonInformation from './components/PersonInformation'
import Filters1 from './components/Filters1'
import PersonForms from './components/PersonForms'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    
    EService.getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response)
        console.log(response)
      })
  }, [])

const EDetails=(event)=>{
  event.preventDefault()
  if(persons.find(persons=>persons.content===newName)){
    alert(newName+" is already added to the phonebook")
  }
  else if(persons.find(persons=>persons.number===newNumber)){
    alert(newNumber+" is already added to the phonebook")
  }
  else{
  const nameObject={
    content:newName,
    number:newNumber,
  }
  EService.create(nameObject)
   .then(response=>{
  setPersons(persons.concat(response))
  setNewName('')
  setNewNumber('')
   })
}
}


const handleChange=(event)=>{

  setNewName(event.target.value)
}
const handleChangeNumber=(event)=>{

  setNewNumber(event.target.value)
}
const handleFilterChange = (e) => {
  setFilter(e.target.value)

}
const display=persons.filter((filtered)=>{
    if(filter==='')
    {
      return persons
    }
    else if(filtered.content.toLowerCase().includes(filter.toLowerCase()))  {
        return filtered
    }

  })

  return (
    <div>
      <h2>Phonebook</h2>
      <Filters1 onChange={handleFilterChange}/>
      <PersonForms onSubmit={EDetails} valueName={newName} onChangeName={handleChange} valueNumber={newNumber} onChangeNumber={handleChangeNumber}/>
      <h2>Numbers</h2>
       {display.map(sort=>
        <PersonInformation key={sort.id} sort={sort} />
        )}
    </div>
  )
}

export default App