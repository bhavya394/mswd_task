
const Header = (props) => {
  return (
    <div>
      <p> {props.course}</p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <p> {props.part},{props.exercises}</p>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}
const App = () => {
  const course = 'full Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 13
  const part2 = 'Using props to pass data'
  const exercises2 = 10
  const part3 = 'State of a component'
  const exercises3 = 6

  return (
    <div>
      <Header course={course} />
      <Content  part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} /> 
      <Content part={part3} exercises={exercises3} /> 
      <Total total= {exercises1 + exercises2 + exercises3} />
    </div>
  )
}
export default App