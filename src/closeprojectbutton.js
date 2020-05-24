import React from 'react';
import styled from 'styled-components';
import CurrentSect from './context';

const StyledCloseProjectButton = styled.button`
    position: absolute;
    top: 1vw;
    right: ${props => props.show ? '1vw' : '-5vw'};
    width: 3vw;
    height: 3vw;
    z-index: 5;
    background: none;
    outline: none;
    border: none;
    transition: all 1s ease .5s;
    color: #383838;
    cursor: pointer;
    font-size: 3rem;
    font-weight: 1000;
`

class CloseProjectButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            type: 'projects',
            content: this.props.content
        };
    }

    render() {
        return(
            <CurrentSect.Consumer>
                {({ setContent }) => (
                <StyledCloseProjectButton show={this.props.show} color={this.props.color} onClick={() => setContent('head', 'head')}>
                    {this.props.label}
                </StyledCloseProjectButton>
                )}
            </CurrentSect.Consumer>
        );
    }
}


export default CloseProjectButton;
