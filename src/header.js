import React from 'react';
import styled from 'styled-components';
import Navbar from './navbar';
import {ReactSVG} from 'react-svg';

const Hero = styled.div`
    z-index: 1;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${props => props.color || "#383838"};
    .stars {
        z-index: 1;
        overflow: hidden;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: opacity 1s ease-in-out;
    }
    @keyframes starsAnimation {
        from {
        transform: translateY(-4000px);
        }
        to {
        transform: translateY(0px);
        }
    }
    & .arrow{
        display: none;
        position: absolute;
        left: 50%;
        width: 2.5vw;
        height: 2.5vw;
        transform: rotate(270deg) translate(-1.25vw, -1.25vw);
        animation: arrowdown 1.7s ease infinite;
    }
    & .arrow path{
        fill: #f2f2f2;
    }
    & .arrow.bottom{
        opacity: 0;
        animation: arrowdown 1.7s ease infinite 1.7s;
    }
`

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return(
            <Hero color={this.props.color}>
                <div className="stars">
                    <div className="small"></div>
                    <div className="medium"></div>
                    <div className="big"></div>
                    <Navbar sections={this.props.section}/>
                </div>
                <ReactSVG className='arrow' src='./img/arrow.svg' />
                <ReactSVG className='arrow bottom' src='./img/arrow.svg' />
            </Hero>
        );
    }
}

export default Header;
