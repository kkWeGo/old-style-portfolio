import React from 'react';
import styled from 'styled-components';
import {ReactSVG} from 'react-svg';

const MyUl = styled.ul`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 32.5vw;
    height: 10rem;
    margin: 10vw 12.5vw 10vw 12.5vw;
    border: 2px solid #f2f2f2;
    border-radius: 2rem;
    z-index: 5;
    color: white;
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 13rem;
        height: 2rem;
        font-size: 2rem;
        background-color: rgba(56, 56, 56, 1);
        transform: translate(6rem, -1rem);
        z-index: 6;
        padding: 0 0 0 1.5rem;
    }
    &::after{
        content: 'Contact me';
        position: absolute;
        top: 0;
        left: 0;
        width: 13rem;
        height: 2rem;
        font-size: 2rem;
        transform: translate(6rem, -1rem);
        z-index: 7;
        padding: 0 0 0 1.5rem;
    }
    & li{
        position: relative;
        float: left;
        height: 4rem;
        width: 6%;
        margin: 3rem 4.3% 3rem 4.3%;
    }
    & li svg{
        position: absolute;
        top: 0;
        left: 0;
        height 4rem;
        width: 4rem;
        padding: 0rem;
        z-index: 7;
        cursor:pointer;
    }
    & li::after{
        position: absolute;
        top: 2rem;
        left: 2rem;
        height 0rem;
        width: 0rem;
        content: '';
        padding: 0rem;
        z-index: 6;
        transform: translate (0rem, 0rem);
        background-color: #f2f2f2;
        border-radius: 3rem;
        transition: all .3s ease;
    }
    & li:hover::after{
        height 6rem;
        width: 6rem;
        content: '';
        padding: 0rem;
        transform: translate(-3rem, -3rem);
        cursor:pointer;
    }
    & li svg path{
        transition: all .3s ease;
        opacity: 1;
    }
    & li:nth-of-type(1){
        margin-left: 8.6%;
    }
    & li:nth-of-type(1):hover svg path{
        fill: #D32E2A !IMPORTANT;
    }
    & li:nth-of-type(2):hover svg path{
        fill: #475993 !IMPORTANT;
    } 
    & li:nth-of-type(3):hover svg path:nth-of-type(1){
        opacity: 0;
    } 
    & li:nth-of-type(3):hover svg path:nth-of-type(2){
        opacity: 0;
    } 
    & li:nth-of-type(3):hover svg circle:nth-of-type(1){
        opacity: 0;
    } 
    & li:nth-of-type(3) svg path:nth-of-type(3){
        opacity: 0;
    }
    & li:nth-of-type(3) svg path:nth-of-type(4){
        opacity: 0;
    }
    & li:nth-of-type(3) svg circle:nth-of-type(2){
        opacity: 0;
    }  
    & li:nth-of-type(3):hover svg path:nth-of-type(3){
        opacity: 1;
    }
    & li:nth-of-type(3):hover svg path:nth-of-type(4){
        opacity: 1;
    }
    & li:nth-of-type(3):hover svg circle:nth-of-type(2){
        opacity: 1;
    }
    & li:nth-of-type(4):hover svg path{
        fill: #76A9EA !IMPORTANT;
    } 
    & li:nth-of-type(5):hover svg path{
        fill: #0077B7 !IMPORTANT;
    } 
    & li:nth-of-type(6):hover svg path{
        fill: #9F1121 !IMPORTANT;
    } 

`
function ContactList(props) {
    const list = props.list;
    const listItems = list.map((item, index) =>
        <li key={index + '_li'}><ReactSVG src={item} /></li>
    );
    return (
        <MyUl>{listItems}</MyUl>
    );
}

class UlList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }

    render() {
        return(
            <ContactList list={this.props.list}/>
        );
    }
}

export default UlList;
