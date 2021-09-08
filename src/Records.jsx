import { Component } from "react";

export default class Records extends Component {
    render(){
        return (
            <div className="recordatorio">
                <h3>Selección anterior: {this.props.selectedOption}</h3>
                <h4>Historial de opciones elegidas: </h4>
                <ul></ul>
            </div>
        )
    }
}


