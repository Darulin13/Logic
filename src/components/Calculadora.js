import React from "react";
import styled from "styled-components";

const Container = styled.section`
    width:100%;

`
export default class Calculadora extends React.Component {
    state = {
        result: "",
        symbol: "",
        n1: "",
        n2: "",
    }

    handleChange = (e) => {
        this.setState({
            n1: e.target.value,

        })

    }
    handleChange2 = (e) => {
        this.setState({
            n2: e.target.value,

        })
    }

    plus = () => {
        this.setState({
            result: Number(this.state.n1) + Number(this.state.n2),
            symbol: "+"
        })

    }
    minus = () => {
        this.setState({
            result: this.state.n1 - this.state.n2,
            symbol: "-"
        })

    }
    multiply = () => {
        if (this.state.n1 && this.state.n2 !== "") {
            this.setState({
                resul: Number(this.state.n1) * Number(this.state.n2),
                symbol: "*"
            });

        } else {
            this.setState({
                resul: "Nenhum valor foi digitado"
            });
        }
    };

division = () => {
    this.setState({
        result: this.state.n1 / this.state.n2,
        symbol: "/"
    })

}
render() {
    return (
        <Container>
            <div>
                <h1>Calculator</h1>
                <input value={this.state.n1} onChange={this.handleChange} />
                <p>{this.state.symbol}</p>
                <input value={this.state.n2} onChange={this.handleChange2} />
                <p>=</p>
                <h2>{this.state.result}</h2>
                <button onClick={this.plus}>+</button>
                <button onClick={this.minus}>-</button>
                <button onClick={this.multiply}>*</button>
                <button onClick={this.division}>/</button>


            </div>
        </Container>
    )
}

}