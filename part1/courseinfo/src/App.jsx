const Header=(prop)=>{
 
  return(
    <div>
      <h1> {prop['name']}</h1>
      </div>
  )
}

const Contents=(prop)=>{
  console.log(prop)
  return(
  <div>
    <Part name={prop.parts[0].name} exercises={prop.parts[0].exercises}/>
    <Part name={prop.parts[1].name} exercises ={prop.parts[1].exercises}/>
    <Part name={prop.parts[2].name} exercises={prop.parts[2].exercises}/>
  </div>
  )
}
const Total=(prop)=>{
  console.log(prop)
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
  const course = {
    name: 'Half Stack application development',
    parts: [
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
}  
  return (
    <div>
      <Header name={course['name']}/>
      <Contents parts={course['parts']}/>
      <Total part={course['parts']}/>
 </div>
  )

}

export default App