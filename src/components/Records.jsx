import { Component } from "react";
import "./css/Records.css"

export default class Records extends Component {
    render() {
        return (
            <div className="recordatorio">
                <h3>Selección anterior: {this.props.selectedOption}</h3>
                <h4>Historial de opciones elegidas: </h4>
                <ul>{
                    this.props.history.map((record, index) => <li key={index}>{record}</li> )
                }</ul>
            </div>
        )
    }
}


