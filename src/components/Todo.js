import React from "react";
import styled, { ThemeConsumer } from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    background-color:blue;
    padding-top:30px;
    padding-bottom:10vh;

    div{
        border:solid blue;
        width:50%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding-top:30px;
        padding-bottom:10vh;
 
    }
    h1{
        font-size:50px;
        padding-bottom:20vh; 
        padding-top:90px;
    }
    input{
        width:70%;
        padding-top:5px;
        padding-bottom:5vh;
    }
    button{
        width:20%;
       margin-top:20px;
       padding-top:25px;
       padding-bottom:5vh;
       align-self:center ;
       display:flex;
       align-items:center;
       justify-content:center;
       flex-direction:row;
    }
    ul{
        padding-top:25px; 
    }
    
    `
const linkStyle = {
    textDecoration: "none",
    color: 'yellow'
};

export default class Todo extends React.Component {
    state = {
        task: "",
        list: [],
    }
    handleChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }
    addList = () => {
        if (this.state.task.length > 0) {
            this.setState({
                list: this.state.list.concat({
                    task: this.state.task,
                    id: Date.now()
                }),
                task: "",
            })
        }

    }


    render() {
        return (
            <Container>
                <div>
                    <h1>Todo</h1>
                    <input value={this.state.task} placeholder="Digite aqui" onChange={this.handleChange} />
                    <button onClick={this.addList}>Add</button>

                    <ul>
                        {this.state.list.map((item) => (
                            <li>{item.task}</li>
                        ))}

                    </ul>



                </div>

                <Link to="/" style={linkStyle}>Back</Link>
            </Container>
        )
    }
}