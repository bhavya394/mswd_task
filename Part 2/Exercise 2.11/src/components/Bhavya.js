import React from 'react'

const Header = ({ obj1 }) => {
    return (
        <h2>{obj1 .name}</h2>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Content = ({ obj1  }) => {
    return (
        <div>
            {obj1 .parts.map((part) => <Part part={part} />)}
        </div>
    )
}

const Total = ({ obj1 }) => {
    const sum = obj1.parts.reduce((total, part) => total + part.exercises, 0)
    return (
        <strong>Number of exercises {sum}</strong>
    )
}

const Bhavya = ({ obj1  }) => {
    return (
        <>
            <Header obj1 ={obj1 } />
            <Content obj1 ={obj1 } />
            <Total obj1 ={obj1 } />
        </>
    )
}

export default Bhavya