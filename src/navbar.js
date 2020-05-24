import React from 'react';
import styled from 'styled-components';
import Button from './button';
import CurrentSect from './context'

const StyledNav = styled.nav`
    position: fixed;
    top: ${props => props.top || '50%'};
    background-color: ${props => props.isActive ? 'transparent' : 'transparent'};
    left: 0;
    width: 100%;
    margin-left: 0%;
    height: 8.5vh;
    z-index: 1;
    padding-top: 2rem;
    transform: ${props => props.isActive ? 'translateY(0rem)' : 'translateY(-7rem)'};
    transition: all 1s ease
`
const NavList = styled.ul`
    width: 70%;
    height: 100%;
    margin-left: 15%;
    //background-color: white;
    border-bottom-left-radius: 0rem;
    border-bottom-right-radius: 0rem;
`
const NavItem = styled.li`
    position: relative;
    float: left;
    color: '#f2f2f2';
    width: 20%;
    height: 6rem;
    margin: 2rem 0 2rem 0;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;
    & span{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%
        height: 100%;
    }
    & span::before{
        background: rgba(242, 242, 242, 50%);
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 40%;
        height: .8rem;
        margin-left: 30%;
        transition: all .5s ease;
        border-radius: 1rem;
        z-index: 2;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    &:hover span::before{
        width: 60%;
        margin-left: 20%;
        transform: translateY(-12px);
    }
    & span::after{
        background: rgba(242, 242, 242, 50%);
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 40%;
        height: .8rem;
        margin-right: 30%;
        transform: translateY(40px);
        border-radius: 1rem;
        transition: all .5s ease;
        z-index: 2;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    &:hover span::after{
        width: 60%;
        margin-right:20%;
        transform: translateY(52px);
    }
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${props => props.active ? '40%' : '0%'};
        height: .8rem;
        margin-left: 30%;
        transform: translateY(0px);
        border-radius: 1rem;
        transition: all .5s ease;
        z-index: 3;
        background: linear-gradient(110deg, #A43A48, #E57853 100%);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    &:nth-of-type(3)::before{
        display: none;
    }
    &:hover::before{
        width: 60%;
        margin-left: 20%;
        transform: translateY(-12px);
    }
    &::after{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: ${props => props.active ? '40%' : '0%'};
        height: .8rem;
        margin-right: 30%;
        transform: translateY(40px);
        border-radius: 1rem;
        transition: all .5s ease;
        z-index: 3;
        background: linear-gradient(290deg, #A43A48, #E57853 100%); 
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    &:nth-of-type(3)::after{
        display: none;
    }
    &:hover::after{
        width: 60%;
        margin-right:20%;
        transform: translateY(52px);
    }
    & button{
        transition: all 1s;
        color: ${props => props.isActive ? 'rgba(242, 242, 242, 100%)' : 'rgba(242, 242, 242, 100%)'};
    }
    &:hover button{
        transform: scale(1);
        color: ${props => props.isActive ? 'rgba(242, 242, 242, 100%)' : 'rgba(242, 242, 242, 100%)'};
    }
`

const Title = styled(NavItem)`
    font-size: 4rem;
    font-weight: 10000;
    height: 10rem;
    color: ${props => props.isActive ? '#f2f2f2' : '#f2f2f2'};
    transform: translateY(-2rem);
    line-height: 5rem;
    cursor: default;
    background:white
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0s;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
    &:hover {
        background: -webkit-linear-gradient(110deg, #a43a48, #e57853);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`
class NavItems extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }
    componentDidUpdate() {
        if (this.context.page === this.props.label && !this.state.active){
            this.setState({active: true});
        }
        if (this.context.page !== this.props.label && this.state.active){
            this.setState({active: false});
        }
    }
    render(){
        return(
            <>
            <NavItem active={this.state.active} > 
                <span></span>
                <Button isNavbar={true} label={this.props.label}></Button>
            </NavItem>
            </>
        );
    }
}
NavItems.contextType = CurrentSect;

class Navbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            hide: false,
            top: '50%',
        };
    }
    componentDidUpdate() {
        if (this.context.type !== 'head'){
            if (!this.state.hide){
                this.setState({ hide: true, top: '-50%' });
            }
        } else {
            if (this.context.type === 'head' && this.state.hide){
                this.setState({ hide: false, top: '0%' });
            }
            if (!this.context.navbar && !this.state.active){
                this.setState({ active: true, top: '0%' });
            }
            if (this.context.navbar && this.state.active){
                this.setState({ active: false, top: '50%' });
            }
        }
    }
    render() {
        return(
            <StyledNav top={this.state.top} isActive={this.state.active}> 
                <NavList>
                    <NavItems label={this.props.sections[0]}/> 
                    <NavItems label={this.props.sections[1]}/> 
                    <Title isActive={this.state.active}>
                        NICOLA PASQUALINI
                    </Title>
                    <NavItems label={this.props.sections[2]}/> 
                    <NavItems label={this.props.sections[3]}/> 
                </NavList>
            </StyledNav>
        );
    }
}
Navbar.contextType = CurrentSect;

export default Navbar;
