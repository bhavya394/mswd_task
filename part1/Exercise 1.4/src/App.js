import React from 'react';

const Header = ( count ) => {
	return (
		<div>
			<h1>{ count.name}</h1>
		</div>
	);
};

const Content1 = (count) => {
	return (
		<div>
      <p>
          {count.parts[0].name}  {count.parts[0].exercises}
          </p>
          <p>
          {count.parts[1].name}  {count.parts[1].exercises}
          </p>
          <p>
          {count.parts[2].name}  {count.parts[2].exercises}
      </p>
		
		</div>
	);
};

const Total = (count) => {
	return (
		<div>
			<p>
				Number of exercises {count.parts[0].exercises + count.parts[1].exercises + count.parts[2].exercises}
			</p>
		</div>
	);
};



const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


return (
  <div>
  
    <Header name={course} />
    <Content1 parts={parts} />
    <Total parts={parts} />
    
  </div>
);
};



export default App