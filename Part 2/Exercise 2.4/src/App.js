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
    const sum = parameter.parts.reduce((total, part) => total + part.exercises, 0)
    return (
        <strong>Number of exercises {sum}</strong>
    )
}

const Course = ({ parameter }) => {
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
    <>
      <h1>Web development curriculum</h1>
      {courses1.map(parameter => <Course parameter={parameter} />)}
    </>
  )
}

export default App