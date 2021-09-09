import { Component } from "react";
import "./css/Options.css";

export default class Options extends Component {
    render() {
        return (
            <div className="opciones">
                <div className="opcion">
                    <button id="A" className="botones" onClick={() => this.props.handleClick("A")}>A</button> 
                    <h2>{this.props.optionA}</h2>
                </div>
                <div className="opcion">
                    <button id="B" className="botones" onClick={() => this.props.handleClick("B")} >B</button>
                    <h2>{this.props.optionB}</h2>
                </div>
            </div>
        )
    }
}

