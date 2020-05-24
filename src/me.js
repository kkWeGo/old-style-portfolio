import React from 'react';
import styled from 'styled-components';
import UlList from './list';

const Myself = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 90vw;
    height: 40vw;
    background-color: transparent;
`
const MyImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 20vw;
    height: 20vw;
    margin: 10vw 12.5vw 10vw 12.5vw;
`
const MyP = styled.p`
    position: relative;
    top: 0;
    left: 45vw;
    width: 32.5vw;
    height: 20vw;
    margin: 10vw 10vw 0vw 0vw;
    color: #f2f2f2;
    font-size: 3rem;
    line-height: 3.5rem;
    text-align: left;
`

class Me extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }

    render() {
        //console.log(this.props);
        return(
            <Myself>
                <MyImg src={this.props.img} alt='Image of myself'/>
                <MyP>{this.props.text}</MyP>
                <UlList list={this.props.contacts}/>
            </Myself>
        );
    }
}

export default Me;


