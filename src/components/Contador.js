import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    background-color:blue;
    padding-top:30px;
    padding-bottom:40vh;

    div{
        border:solid blue;
        width:50%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
 
    }
    button{
        background-color:yellow;
        color:white;
        border:none;
        width:20%;
        padding-top:30px;
        padding-bottom:30px;
        font-size:80px;
        @media(max-width:768px){
            width:70%;
        }
    }
    h2{
        font-size:40px;
        padding-bottom:30px;
        padding-top:30px;
    }
    h1{
        padding-bottom:30px;
        font-size:70px;
    }
    img{
        padding-top:20px;
    }
   
`
const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'yellow'
  };
export default class Contador extends React.Component {
    state = {
        number: 0
    }
    Add = () => {
        this.setState({
            number: this.state.number + 1
        })
    }
    Remove = () => {
        if (this.state.number > 0) {
            this.setState({
                number: this.state.number - 1
            })
        }

    }
    render() {
        return (
            <Container>

                <div>
                    <h1>Counter</h1>
                    <button onClick={this.Add}>+   </button>
                    <h2>{this.state.number}</h2>
                    <button onClick={this.Remove}>    - </button>
                </div>
                <Link to="/" style={linkStyle}>Back</Link>


            </Container>

        )
    }
}