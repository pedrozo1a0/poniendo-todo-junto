import { Component } from "react";

class PersonCard extends Component{
    constructor(props){
        super(props)
    }


    render= ()=>{
        return(
            <div>
            <h3>{this.props.apellido}, {this.props.nombre}</h3>
            <p>Age: {this.props.edad}</p>
            <p>Hair Color: {this.props.hairColor} </p>
            </div>
        )
    }
}

export default PersonCard;