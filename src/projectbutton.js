import React from 'react';
import styled from 'styled-components';
import CurrentSect from './context';

const StyledProjectButton = styled.button`
    position: absolute;
    bottom: 7.5vw;
    left: 5vw;
    width: 20vw;
    height: 3vw;
    z-index: 7;
    background: none;
    outline: none;
    border: none;
    background-color: #383838;
    border-radius: 2vw;
    border: .5rem solid ${props => props.color || '#f2f2f2'};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
    color: #f2f2f2;
    font-size: 1.8rem;
    font-weight: 600;
    &:hover {
        background-color: ${props => props.color || '#f2f2f2'};
        color: #383838;
    }
`

class ProjectButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            type: 'projects',
            label: this.props.label
        };
    }

    render() {
        return(
            <CurrentSect.Consumer>
                {({ setContent }) => (
                <StyledProjectButton className='btn' color={this.props.color} onClick={() => setContent(this.state.type, this.state.label)}>
                    {this.props.text}
                </StyledProjectButton>
                )}
            </CurrentSect.Consumer>
        );
    }
}


export default ProjectButton;
