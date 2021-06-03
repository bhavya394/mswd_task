import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({ simple, average, tough, }) => {
 
  return (
    <table>
      <tbody>
        <tr><Statistic feedback="simple" value={simple} /></tr>
        <tr><Statistic feedback="average" value={average} /></tr>
        <tr><Statistic feedback="tough" value={tough} /></tr>
      </tbody>
    </table>
  )
}

const Statistic = ({ feedback, value }) => {
  return (
    <td>{feedback} {value}</td>
  )
}

const App = () => {
  const [simple, setsimple] = useState(0)
  const [average, setModerate] = useState(0)
  const [tough, setDifficult] = useState(0)

  const handleEasyClick = () =>
    setsimple(simple + 1)

  const handleModerateClick = () =>
    setModerate(average + 1)

  const handleDifficultClick = () =>
    setDifficult(tough + 1)

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleEasyClick} text="simple" />
      <Button handleClick={handleModerateClick} text="average" />
      <Button handleClick={handleDifficultClick} text="tough" />
      <h1>statistics</h1>
      <Statistics simple={simple} average={average} tough={tough} />
    </>
  )
}

export default App