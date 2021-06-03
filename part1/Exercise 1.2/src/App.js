const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 8
const part2 = 'Data structures'
const exercises2 = 9
const part3 = 'State of a component'
const exercises3 = 24
const Header = (props) => {
  return (
    <div>
      <p> {props.course}</p>
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

  const Part = (props) => {
    return(
      <p>
        {props.part} {props.exercises}
      </p>
    )
  }

const Content = () => {
  return(
    <div>
      <Part part={part1} exercises={exercises1}/>
      <Part part={part2} exercises={exercises2}/>
      <Part part={part3} exercises={exercises3}/>
    </div>
  )
}



const App = () => {
  

  return (
    <div>
      <Header course={course} />
      <Content/>
      <Total total= {exercises1 + exercises2 + exercises3} />
    </div>
  )
}


export default App