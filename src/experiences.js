import React from 'react';
import styled from 'styled-components';
import { db } from './configs/fire';
import PerfectScrollbar from 'react-perfect-scrollbar'; 

const Container = styled.div`
    position: absolute;
    top: 1vw;
    left: 1vw;
    width: 88vw;
    height: 38vw;
`
const Timeline = styled.div`
    position: relative;
    width: 88vw;
    height: 36vw;
    background-color: transparent;
    &::before{
        content: '...';
        position: absolute;
        top: 0vw;
        left: 0vw;
        width: 88vw;
        height: auto;
        text-align: center;
        font-size: 3.2rem;
        font-weight: 1000;
        color: #f2f2f2;
    }
    &::after{
        content: '';
        position: absolute;
        top: 1.5vw;
        left: 43.9vw;
        width: .2vw;
        height: 40vw;
        background-color: white;
        z-index: 5;
    }
    & span::before{
        content: '';
        position: absolute;
        top: 1.5vw;
        left: 43.65vw;
        width: .2vw;
        height: 1vw;
        background-color: white;
        transform: rotate(30deg);
    }
    & span::after{
        content: '';
        position: absolute;
        top: 1.5vw;
        left: 44.15vw;
        width: .2vw;
        height: 1vw;
        background-color: white;
        transform: rotate(330deg);
    }
`
const Link = styled.a`
    text-decoration: none;
    color: #f2f2f2;
    font-size: 2.5rem;
    position: relative;
    float: right;
    width: 42.6vw;
    height: 3rem;
    transition: all .5s ease;
    margin-top: 2vw;
    line-height: 3.2rem;
    margin-bottom: 3rem;
    & h3{
        font-size: 2rem;
        color: rgba(256, 256, 256, .7);
        transition: all .5s ease;
    }
    & p{
        border-bottom: 2px solid #E57853;
        width: fit-content;
        display: inline;
    }
    &:nth-of-type(1){
        margin-top: 3vw;
    }
    &:hover{
        color: #E57853;
    }
    &:hover h3{
        color: #E57853;
    }
    &.left{
        margin-right: 45.4vw;
        text-align:right;
    }
    &.left::after{
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        width: .8vw;
        height: .8vw;
        border-radius: 50%;
        transform: translate(1.9vw, .2vw);
        background-color: #383838;
        border: .1vw solid white;
        z-index: 6;
    }
    &.right{
        margin-right: 0vw;
    }
    &.right::after{
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: .8vw;
        height: .8vw;
        border-radius: 50%;
        transform: translate(-1.9vw, .2vw);
        background-color: #383838;
        border: .1vw solid white;
        z-index: 6;
    }

`

class Experiences extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            links: []
        };
    }
    componentDidMount(){
        var expRef = db.collection("experiences");
        var links = [];

        expRef.onSnapshot(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                links.push(doc.data());
            });            
        });
        this.setState({links: links});
    };

    render() {
        return(
            <Container>
                <PerfectScrollbar>
                    <Timeline>
                        <span></span>
                        {this.state.links.map((item, index) => (
                            <Link key={index} className={index%2 === 0 ? 'left' : 'right'} href={item.link}><h3>{item.title}</h3><p>{item.text}</p></Link>
                        ), this.state.sem)}
                    </Timeline>
                </PerfectScrollbar>
            </Container>
        );
    }
}

export default Experiences;


