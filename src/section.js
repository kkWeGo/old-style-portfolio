import React from 'react';
import styled from 'styled-components';
import CurrentSect from './context'

const Container = styled.div`
    position: fixed;
    top: ${props => props.top};
    left: ${props => props.left};
    width: 90vw;
    height: 40vw;
    transition: all 1s ease;
    background-color: ${props => props.color || "rgba(86, 86, 86, .3)"};
    z-index: 3;
    transform: ${props => props.hide ? 'translateY(-100vh)' : 'translateY(0)'};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

class Section extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: props.type,
            top: props.top,
            left: props.left,
            hide: false,
            status: 'hide',
        };
    }

    componentDidUpdate() {
        var top = '';
        var left = '';
        if (this.context.page === this.state.page && this.state.status === 'hide'){
            top = '12%';
            left = '5%';
            this.setState({left, top, status: 'visible'});
        }
        if (this.context.page !== this.state.page && this.state.status === 'visible'){
            if(this.state.page === 'BIO'){
                top = '-100%';
                left = '-100%';
            }
            if(this.state.page === 'SKILLS'){
                top = '100%';
                left = '-100%';
            }
            if(this.state.page === 'PROJECTS'){
                top = '100%';
                left = '100%';
            }
            if(this.state.page === 'EXPERIENCES'){
                top = '-100%';
                left = '100%';
            }
            this.setState({left, top, status: 'hide'});
        }
        if (this.context.type !== 'head' && !this.state.hide){
            this.setState({ hide: true });
        }
        if (this.context.type === 'head' && this.state.hide){
            this.setState({ hide: false });        
        } 
    }
    
    shouldComponentUpdate(nextProps, nextState) { 
        if (nextState.status === 'visible' && nextState.semaphore) { 
            return true;
        }
        if (nextState.status === 'hide' && !nextState.semaphore) { 
            return true;
        }
        return true;
    }

    render() {
        return(
            <Container hide={this.state.hide} left={this.state.left} top={this.state.top}>
                { this.props.children }
            </Container>
        );
    }
}
Section.contextType = CurrentSect;

export default Section;
