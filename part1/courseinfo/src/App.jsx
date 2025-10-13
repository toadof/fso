const Header=(course)=>{
  console.log(course)
  return(
    <div>
      <h1> {course.name}</h1>
      </div>
  )
}

const Contents=(prop)=>{
  
  return(
  <div>
    <Part name={prop.parts[0].name} exercises={prop.parts[0].exercises}/>
    <Part name={prop.parts[1].name} exercises ={prop.parts[1].name}/>
    <Part name={prop.parts[2].name} exercises={prop.parts[2].name}/>
  </div>
  )
}
const Total=(prop)=>{
  return(
    <div>
     <p> Number of exercises {prop.part[0].exercises+prop.part[1].exercises+prop.part[2].exercises}</p>
    </div>
    )
}
const Part=(prop)=>{
  return(
    <div>
      <p> {prop.name} {prop.exercises} </p>
    </div>)
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { name :'Fundamentals of React',exercises:10},
    {name:'Using props to pass data',exercises: 7},
    {name:'State of a component',exercises: 14}
]
  return (
    <div>
      <Header name={course}/>
      <Contents parts={parts}/>
      <Total part={parts}/>
 </div>
  )
}

export default App