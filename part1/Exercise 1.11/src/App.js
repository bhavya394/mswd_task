import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({ simple, average, tough, all, ave, positive }) => {
  if (simple === 0 & average === 0 & tough === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <table>
      <tbody>
        <Statistic text="simple" value={simple} />
        <Statistic text="average" value={average} />
        <Statistic text="tough" value={tough} />
        <Statistic text="all" value={all} />
        <Statistic text="ave" value= {ave} />
        <Statistic text="positive" value={positive + '%'} />
      </tbody>
    </table>
  )
}

const Statistic = ({ text, value }) => {
  return (
      <tr>
    <td> {text}</td> 
    <td> {value}</td>
    </tr>
  )
}

const App = () => {
  const [simple, setEasy] = useState(0)
  const [average, setModerate] = useState(0)
  const [tough, setDifficult] = useState(0)

  const handleEasyClick = () =>
    setEasy(simple + 1)

  const handleModerateClick = () =>
    setModerate(average + 1)

  const handleDifficultClick = () =>
    setDifficult(tough + 1)

    const all = simple + average + tough
    
    const ave = ((simple - tough) / all)

    const positive = (simple/ all) * 100


  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleEasyClick} text="simple" />
      <Button handleClick={handleModerateClick} text="average" />
      <Button handleClick={handleDifficultClick} text="tough" />
      <h1>statistics</h1>
      <Statistics simple={simple} average={average} tough={tough} all={all} ave={ave} positive={positive} />
    </>
  )
}

export default App