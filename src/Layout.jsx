import { Component } from "react";
import Records from "./Records";
import Options from "./Options.jsx";
import data from "./components/data.json"
import { queryAllByAltText } from "@testing-library/react";


export default class Layout extends Component {
    constructor(props){
        super(props)
        this.state = {
            contador: 0,
            selectedOption: "",
        }
        this.history = []
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidUpdate(prevState) {
        if (prevState.contador !== this.state.contador) {
            console.log(this.history);
            this.history.push(this.state.selectedOption)
        }
      }

    handleClick(op) {
        if(this.state.contador>=7){
            alert("FIN!");
            return;
        }

        let sum = op === "A" ? 1 : 2;
        const option = op === "A" ? "A" : "B";

        if(this.history.length > 0){
            sum = 2;
        }

        this.setState ({
            contador: this.state.contador + sum,
            selectedOption: option,
        })
    }

    render() {
        return (
            <div className="layout">
                <h1 className="historia">{data[this.state.contador].historia}</h1>
                <Options optionA={data[this.state.contador].opciones.a} optionB={data[this.state.contador].opciones.b} handleClick={this.handleClick} />
                <Records selectedOption={this.state.selectedOption} history={this.history}/>
            </div>
        )
    }
}