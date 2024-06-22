
import { Component } from 'react';
import PersonCard from './PersonCard';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      listaPersonas:[
        {
          nombre: "Jane",
          apellido: "Doe",
          edad: 45,
          hairColor: "Black"
        },
        {
          nombre: "John",
          apellido: "Smith",
          edad: 88,
          hairColor: "Brown"
        },
        {
          nombre: "Milllard",
          apellido: "Fillmore",
          edad: 50,
          hairColor: "Brown"
        },
        {
          nombre: "Maria",
          apellido: "Smith",
          edad: 62,
          hairColor: "Brown"
        }
      ]
    }
  }
  aumentarEdad =(i, edad)=>{
    // this.state.listaPersonas.findIndex((persona)=>{persona.edad===edad})
    // console.log(indice)
    this.setState({
        listaPersonas: [...this.listaPersonas]
    })
}


  render=()=>{
    return(
      <div>
      {this.state.listaPersonas.map((persona, index)=>{
        return(
        <>
        <PersonCard  key={index}  nombre={persona.nombre} apellido={persona.apellido} edad={persona.edad} hairColor={persona.hairColor}  />
        <button onClick={()=>this.aumentarEdad(index, persona.edad)} >Birthday Button for {persona.nombre}  {persona.apellido}</button>
        </>
      )})}
      </div>
    )
  }
}

export default App;
