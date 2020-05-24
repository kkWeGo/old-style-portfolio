import React from 'react';
import styled from 'styled-components';
import CurrentSect from './context';

const StyledButton = styled.button`
    position: ${props => props.isNavbar ? 'relative' : 'absolute'};
    outline: none;
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    color: ${props => props.isNavbar ? '#f2f2f2' : '#383838'};
    text-align: center;
    font-size: 2rem;
    height: ${props => props.isNavbar ? '100%' : '4vh'};
    width: ${props => props.isNavbar ? '100%' : '4vh'};
    top: ${props => props.isNavbar ? 'auto' : '0'};
    left: ${props => props.isNavbar ? 'auto' : '0'};
    cursor: pointer;
`

class Button extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return(
            <CurrentSect.Consumer>
                {({ setPage }) => (
                    
                <StyledButton onClick={() => setPage(this.props.label)} isNavbar={this.props.isNavbar}>
                    {this.props.label}
                </StyledButton>
                )}
            </CurrentSect.Consumer>
        );
    }
}

export default Button;
