import React from 'react';
import styled from 'styled-components';
import GraphBar from './graphbar';

const Graph = styled.div`
    position: absolute;
    top: 5vw;
    left: 5vw;
    width: 80vw;
    height: 30vw;
    background-color: transparent;
    z-index: 5;
`
const Y = styled.span`
    position: absolute;
    top: 5vw;
    left: 5vw;
    width: .5rem;
    height: 30vw;
    margin: 0;
    background-color: white;
    & ul{
        position: absolute;
        top: 0;
        left: -2.5vw;
        height: 30vw;
        width: 1vw;
    }
    & ul li{
        position: relative;
        height: 10%;
        width: 2vw;
        font-size: 2rem;
        font-weight: bolder;
        color: #f2f2f2;
        text-align: right;
    }
`
const X = styled.span`
    position: absolute;
    top: 35vw;
    left: 5vw;
    width: 80vw;
    height: .5rem;
    margin: 0;
    background-color: white;
    &::before{
        content: 'Hover a bar if you want to know more';
        position: absolute;
        top: -34vw;
        left: 0;
        width: 80vw;
        height: .5rem;
        text-align: center;
        font-size: 2rem;
        color: #f2f2f2;
    }
`

class Skills extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }
        this.toggleOnHover = this.toggleOnHover.bind(this);
        this.toggleOffHover = this.toggleOffHover.bind(this);
    }
    
    toggleOnHover(){
        this.setState({hover: true});
        console.log(this.state.hover);
    }
    toggleOffHover(){
        this.setState({hover: false});
        console.log(this.state.hover);
    }

    render() {
        return(
            <>
                <Graph>
                    <GraphBar hover={this.state.hover} enter={this.toggleOnHover} leave={this.toggleOffHover} name='JS' value='89%' desc='lorem ipsum' color='#F0DB4F'/>
                    <GraphBar hover={this.state.hover} enter={this.toggleOnHover} leave={this.toggleOffHover} name='PHP' value='81%' desc='lorem ipsum' color='#787CB5'/>
                    <GraphBar hover={this.state.hover} enter={this.toggleOnHover} leave={this.toggleOffHover} name='HTML/CSS' value='27%' desc='lorem ipsum' color='#F16529'/>
                    <GraphBar hover={this.state.hover} enter={this.toggleOnHover} leave={this.toggleOffHover} name='F#' value='79%' desc='lorem ipsum' color='#028FCC'/>
                    <GraphBar hover={this.state.hover} enter={this.toggleOnHover} leave={this.toggleOffHover} name='Python' value='72%' desc='lorem ipsum' color='#FFD43B'/>
                    <GraphBar hover={this.state.hover} enter={this.toggleOnHover} leave={this.toggleOffHover} name='C' value='91%' desc='lorem ipsum'/>
                    <GraphBar hover={this.state.hover} enter={this.toggleOnHover} leave={this.toggleOffHover} name='JS' value='86%' desc='lorem ipsum'/>
                    <GraphBar hover={this.state.hover} enter={this.toggleOnHover} leave={this.toggleOffHover} name='HTML/CSS' value='36%' desc='lorem ipsum'/>
                    <GraphBar hover={this.state.hover} enter={this.toggleOnHover} leave={this.toggleOffHover} name='C' value='71%' desc='lorem ipsum'/>
                    <GraphBar hover={this.state.hover} enter={this.toggleOnHover} leave={this.toggleOffHover} name='Python' value='53%' desc='lorem ipsum'/>
                    <GraphBar hover={this.state.hover} enter={this.toggleOnHover} leave={this.toggleOffHover} name='PHP' value='40%' desc='lorem ipsum'/>
                    <GraphBar hover={this.state.hover} enter={this.toggleOnHover} leave={this.toggleOffHover} name='JS' value='78%' desc='lorem ipsum'/>
                    <GraphBar hover={this.state.hover} enter={this.toggleOnHover} leave={this.toggleOffHover} name='HTML/CSS' value='67%' desc='lorem ipsum'/>
                    <GraphBar hover={this.state.hover} enter={this.toggleOnHover} leave={this.toggleOffHover} name='C' value='79%' desc='lorem ipsum'/>
                </Graph>
                <Y>
                    <ul>
                        <li>100</li>
                        <li>90</li>
                        <li>80</li>
                        <li>70</li>
                        <li>60</li>
                        <li>50</li>
                        <li>40</li>
                        <li>30</li>
                        <li>20</li>
                        <li>10</li>
                    </ul>
                </Y>
                <X />
            </>
        );
    }
}

export default Skills;


