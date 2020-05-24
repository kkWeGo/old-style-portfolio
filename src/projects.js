import React from 'react';
import styled from 'styled-components';
import ProjectButton from './projectbutton';
import CurrentSect from './context';
import topcenter from './reports/topcenter';

const AllProjects = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    width: 90vw;
    height: 40vw;
`
const OneProject = styled.li`
    position: relative;
    width: ${props => props.hover ? '15vw' : '18vw'};
    height: 40vw;
    float: left;
    transition: all .6s ease;
    z-index: 5;
    border-bottom: .25vw solid ${props => props.hover ? props.color : props.color};
    border-top: .25vw solid ${props => props.hover ? props.color : props.color};
    overflow: hidden;
    & img{
        position: absolute;
        top: 0vw;
        left: -13vw;
        height: 40vw;
        z-index: 5;
    }
    & span{
        position: absolute;
        top: 0vw;
        left: 0vw;
        height: 40vw;
        width: 30vw;
        z-index: 6;
        background-color: rgba(56, 56, 56, .9);
    }
    &:hover{
        width: ${props => props.hoverone ? '30vw' : ''};
        background-color: ${props => props.hoverone ? '#383838' : ''};
        border-bottom: .25vw solid ${props => props.hoverone ? props.color : props.color};
        border-top: .25vw solid ${props => props.hoverone ? props.color : props.color};
    }
    &::before, &::after{
        content: '';
        position: absolute;
        left: 0vw;
        width: 100%;
        background-color: ${props => props.hover ? props.color : '#383838'};
        transition: all .6s ease;
        z-index: 8;
        opacity: .2;
        height: ${props => props.hoverone ? '0vw' : '40vw'};
    }
    &::before{
        top: 0vw;
    }
    &::after{
        bottom: 0vw;
    }
    & h3{
        position: absolute;
        top: 7.5vw;
        left: 5vw;
        width: 20vw;
        height: 5vw;
        text-align: center;
        font-size: 4rem;
        color: #f2f2f2;
    }
    & p{
        position: absolute;
        top: 14vw;
        left: 5vw;
        width: 20vw;
        height: 5vw;
        text-align: center;
        font-size: 2.5rem;
        color: #f2f2f2;
    }
    & button, & h3, & p{
        z-index: 7;
        transform: translateY(40vw);
        transition: transform .6s ease .5s, background-color .3s ease 0s, color .3s ease 0s;
    }
    &:hover button, &:hover h3, &:hover p{
        transform: translateY(${props => props.hoverone ? '0vw' : '40vw'});
    }
`

class Project extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color,
            content: this.props.content,
            label: this.props.label,
            text: this.props.desc,
            hover: false,
            timer: '',
        }
        this.setHover = this.setHover.bind(this);
        this.setNotHover = this.setNotHover.bind(this);
        this.setHoverState = this.setHoverState.bind(this);
        this.setNotHoverState = this.setNotHoverState.bind(this);
    }

    setHover (){
        this.context.setProjectsTimer(true, setTimeout(() => {this.setHoverState()}, 20));
    }

    setNotHover (){
        this.context.setProjectsTimer(false);
        this.setState({hover: false});
        this.setNotHoverState();
    }

    setHoverState (){
        this.setState({hover: true});
        this.context.setProjects(true, this.state.color);
    }

    setNotHoverState (){
        this.setState({hover: false});
        this.context.setProjects(false, this.state.color);
    }

    render() {
        return(
            <OneProject 
                bordercolor={ this.state.color } 
                hover={ this.context.hoverProjects } 
                hoverone={ this.state.hover } 
                onMouseLeave={() => { this.setNotHover(); }} 
                onMouseEnter={() => { this.setHover(); }} 
                color={this.context.colorProjects}>
                <h3>{this.state.content}</h3>
                <p>{this.state.text}</p>
                {this.props.img}
                <ProjectButton color={this.state.color} label={this.state.label} text='MORE INFO HERE!'/>
            </OneProject>
        )}
}
Project.contextType = CurrentSect;

class Projects extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            color: '#E57853'
        }
    }
    
    render() {
        return(
            <CurrentSect.Consumer>
                {({ setProjects }) => (
                    <AllProjects onMouseLeave={() => setProjects(false, '#E57853') }>
                            <Project label={topcenter.id} content={topcenter.title} desc={topcenter.desc} color={topcenter.color} img={topcenter.img}/>
                            <Project label="prog2" content="I Centri Commerciali" color='#787CB5'/>
                            <Project label="prog3" content="I Centri Commerciali" color='#F0DB4F'/>
                            <Project label="prog4" content="I Centri Commerciali" color='#028FCC'/>
                            <Project label="prog5" content="I Centri Commerciali" color='#FFD43B'/>
                    </AllProjects>
                )}
            </CurrentSect.Consumer>
        );
    }
}


export default Projects;


