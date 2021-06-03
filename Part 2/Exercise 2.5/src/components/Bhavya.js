import React from 'react'

const Header = ({ obj }) => {
    return (
        <h2>{obj.name}</h2>
    )
}

const Part = (iden) => {
    return (
        <p>
            {iden.part.name} {iden.part.exercises}
        </p>
    )
}

const Content = ({ obj }) => {
    return (
        <div>
            {obj.parts.map((part) => <Part part={part} />)}
        </div>
    )
}

const Total = ({ obj }) => {
    const sum = obj.parts.reduce((total, part) => total + part.exercises, 0)
    return (
        <strong>Number of exercises {sum}</strong>
    )
}

const Bhavya = ({ obj }) => {
    return (
        <>
            <Header obj={obj} />
            <Content obj={obj} />
            <Total obj={obj} />
        </>
    )
}

export default Bhavya