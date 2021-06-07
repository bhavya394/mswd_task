import React,{useState,useEffect} from "react";
import PhoneBooks from './components/PhoneBooks'
import Filters1 from './components/Filters1'
import PersonForms from './components/PersonForms'
import axios from 'axios'


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    console.log('effect')
    
      axios.get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        console.log(response.data)
      })
  }, [])

const addDetails=(event)=>{
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
  axios.post('http://localhost:3001/persons',nameObject)
  .then(response=>{
  setPersons(persons.concat(response.data))
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
      <PersonForms onSubmit={addDetails} valueName={newName} onChangeName={handleChange} valueNumber={newNumber} onChangeNumber={handleChangeNumber}/>
      <h2>Numbers</h2>
       {display.map(person=>
        <PhoneBooks key={person.id} person={person} />
        )}
    </div>
  )

}

export default App