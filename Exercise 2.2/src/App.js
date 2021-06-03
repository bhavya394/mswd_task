import React from 'react'

const Header = ({ parameter }) => {
  return (
      <h2>{parameter.name}</h2>
  )
}

const Part = (props1) => {
  return (
      <p>
          {props1.part.name} {props1.part.exercises}
      </p>
  )
}

const Content = ({ parameter }) => {
  return (
      <div>
          {parameter.parts.map((part) => <Part part={part} />)}
      </div>
  )
}


const Total = ({ parameter }) => {
const sum=parameter.parts[0].exercises + parameter.parts[1].exercises + parameter.parts[2].exercises
return (
   <strong>total of {sum} exercises</strong>
		
	);
}

const Course1 = ({ parameter }) => {
  return (
      <>
          <Header parameter={parameter} />
          <Content parameter={parameter} />
          <Total parameter={parameter} />
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
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
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