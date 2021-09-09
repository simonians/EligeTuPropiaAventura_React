import { Component } from "react";
import Records from "./Records";
import Options from "./Options.jsx";
import data from "./data.json"
import "./css/Layout.css"


export default class Layout extends Component {
    constructor(props){
        super(props)
        this.state = {
            counter: 0,
            selectedOption: "",
        }
        this.history = []
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidUpdate(prevState) {
        if (prevState.counter !== this.state.counter) {
            this.history.push(this.state.selectedOption)
        } 
        
      }

    handleClick(click) {
        if(this.state.counter>=7){
            alert("FIN!");
            return;
        }

        let add = click === "A" ? 1 : 2;

        if(this.history.length>0){
            if (this.state.selectedOption === "A" && click === "B"){
                add = 3
            }
            else if (this.state.selectedOption === "B" && click ==="A"){
                add = 1
            } else {
                add = 2
            }
        }

        this.setState ({
            counter: this.state.counter + add,
            selectedOption: click
        })
    }

    render() {
        return (
            <div className="layout">
                <h1 className="historia">{data[this.state.counter].historia}</h1>
                <Options optionA={data[this.state.counter].opciones.a} optionB={data[this.state.counter].opciones.b} handleClick={this.handleClick} />
                <Records selectedOption={this.state.selectedOption} history={this.history}/>
            </div>
        )
    }
}