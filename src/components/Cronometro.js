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
        width:30%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
    }
    button{
        width:30%;
        padding-bottom:5vh;  
        padding-top:05vh;  
    }
    p{
         font-size:30px;
        padding-bottom:20vh;  
    }
    h1{
        padding-bottom:20vh;  
    }
    img{
        padding-top:10vh;     
    }
    
    `
  
export default class Cronometro extends React.Component {
    state = {
        number: 0,

    }
    
    Start = () => {
        
        const num = setInterval(() => {

            if (this.state.number < 100) {
                this.setState({

                    number: this.state.number + 1,
                })
            }
        }, 500)


        this.Stop = () => {
            clearInterval(num)
        }
        this.Reset = () => {
            clearInterval(num)
            this.setState({
                number: 0
            })
        }
    }
    render() {
        return (
            <Container>
                <h1>
                    Cronômetro
                </h1>
                <p>{this.state.number}</p>
                <div>

                    <button onClick={this.Start}> Start</button>


                    <button onClick={this.Stop}>Stop
                    </button>

                    <button onClick={this.Reset}> Reset</button>



                </div>
                <Link  to="/"><img src="https://img.icons8.com/material-sha" alt="Back"/></Link>

            </Container>)

    }
}