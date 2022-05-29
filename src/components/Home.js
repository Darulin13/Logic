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
        @media(max-width:437px){
            width:100%;
         
        }

    }
    
   
    
`
const linkStyle = {
    padding:"05px",
    textDecoration: "none",
    color: 'yellow'
    
  };

export default class Home extends React.Component {


    render() {
        return (
            <Container>
                <div>
                    <Link to="/Cronometro"  style={linkStyle}>Stopwatch</Link>
                    <Link to="/Contador" style={linkStyle }>Counter</Link>
                     <Link to="/Calculadora" style={linkStyle }>Calculator</Link>
                    <Link to="/Todo" style={linkStyle}>Todo</Link>
                </div>  
            </Container>
        )
    }
}