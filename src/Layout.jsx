import { Component } from "react";
import Records from "./Records";
import Options from "./Options.jsx";
import data from "./components/data.json"


export default class Layout extends Component {
    constructor(props){
        super(props)
        this.state = {
            history: [],
            contador: 0,
            selectedOption: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (op) => {
        const sum = op === "A" ? 1 : 2;
        const option = op === "A" ? "A" : "B";
        const newHistory = this.state.history.push(option)
        console.log(option, newHistory);
        this.setState ({
            contador: this.state.contador + sum,
            selectedOption: option
            //history: newHistory
        })
    }

    render() {
        return (
            <div className="layout">
                <h1 className="historia">{data[this.state.contador].historia}</h1>
                <Options optionA={data[this.state.contador].opciones.a} optionB={data[this.state.contador].opciones.b} handleClick={this.handleClick} />
                <Records selectedOption={this.state.selectedOption}/>
            </div>
        )
    }
}