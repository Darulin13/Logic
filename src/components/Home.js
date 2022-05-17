import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.section`
    background-color:blue;
    display:flex;
    width:100%;
    flex-direction:row;
    justify-content:center;
    div{
        width:80%;

        display:flex;
        flex-direction:row;
        justify-content:space-between;

    }
    p{
        color:yellow
    }
    
`

export default class Home extends React.Component {


    render() {
        return (
            <Container>
                <div>
                    <Link to="/Cronometro" >Cronômetro</Link>
                    <Link to="/Contador" >Contador</Link>
                     <Link to="/Calculadora" >Calculadora</Link>
                    <Link to="/Todo" >Todo</Link>
                </div>  
            </Container>
        )
    }
}