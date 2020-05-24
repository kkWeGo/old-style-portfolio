import React from 'react';
import styled from 'styled-components';

const Bar = styled.span`
    position: relative;
    top: 100%;
    float: left;
    display: block;
    width: 2.5vw;
    height: ${props => props.value || "0%"};
    transform: translateY(-100%);
    margin: 0 0 0 0;
    margin-left: ${props => props.hover ? '1.1vw' : '1.5vw'};
    margin-right: ${props => props.hover ? '1.1vw' : '1.5vw'};
    background-color: rgba(255, 255, 255, .5);
    z-index: 6;
    cursor: pointer;
    transition: all .4s ease;
    &:nth-of-type(1){
        margin-left: ${props => props.hover ? '2.2vw' : '3vw'};
    }
    &:hover{
        margin-right: 12vw;
    }
    &:hover{
        background-color: ${props => props.color};
    }
    &:hover::before{
        color: ${props => props.color};
    }
    &::before{
        content: '${props => props.name}';
        position: absolute;
        top: -2vw;
        left: -2vw;
        width: 6.5vw;
        text-align: center;
        font-size: 2rem;
        font-weight: bolder;
        color: #f2f2f2;
    }
    & p{
        position: absolute;
        top: 0vw;
        left: 0vw;
        width: 5.5vw;
        height: 100%;
        opacity: 0;
        text-align: left;
        font-size: 2rem;
        font-weight: bolder;
        color: #f2f2f2;
        transition: all .5s ease;
        z-index: 4;
        text-indent: 1.5vw;
    }
    &:hover p{
        opacity: 1;
        left: 2.5vw;
        width: 15vw;
    }
`

class GraphBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return(
            <Bar hover={this.props.hover} onMouseEnter={this.props.enter} onMouseLeave={this.props.leave} name={this.props.name} value={this.props.value} color={this.props.color}>
                <p>
                    {this.props.desc}
                </p>
            </Bar>
        );
    }
}

export default GraphBar;


