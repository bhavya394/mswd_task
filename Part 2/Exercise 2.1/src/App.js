import React from 'react'

const Header = ({ parameter }) => {
  return (
      <h2>{parameter.name}</h2>
  )
}

const Part = (props) => {
  return (
      <p>
          {props.part.name} {props.part.exercises}
      </p>
  )
}

const Content1 = ({ parameter }) => {
  return (
      <div>
          {parameter.parts.map((part) => <Part part={part} />)}
      </div>
  )
}


const Course1 = ({ parameter }) => {
  return (
      <>
          <Header parameter={parameter} />
          <Content1 parameter={parameter} />
         
      </>
  )
}
const App = () => {
  const courses1 = [
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
        
      ]
    },
    
  ]

  return (
    <>
      
      {courses1.map(parameter => <Course1 parameter={parameter} />)}
    </>
  )
}

export default App