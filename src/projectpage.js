import React from 'react';
import styled from 'styled-components';
import CurrentSect from './context';
import topcenter from './reports/topcenter';
import PerfectScrollbar from 'react-perfect-scrollbar'; 
import CloseProjectButton from './closeprojectbutton';


const Container = styled.div`
    position: fixed;
    top: ${props => props.show ? '0vh' : '120vh'};
    left: 0vw;
    width: 100vw;
    height: 100vh;
    display: block;
    transition: all 1s ease;
    background-color: #f2f2f2;
    z-index: 3;
    & .ps__rail-y:hover > .ps__thumb-y, .ps__rail-y:focus > .ps__thumb-y, .ps__rail-y.ps--clicking .ps__thumb-y {
        background-color: ${props => props.color || ""};
    }
    & .ps--active-x > .ps__rail-x, .ps--active-y > .ps__rail-y{
        margin:.2vw;
    }
`
const PageOfProject = styled.div`
    position: relative;
    width: 100vw;
    height: 0vh;
    opacity: ${props => props.show ? '1' : '0'};
    background-color: #f2f2f2;
    transition: opacity .5s ease;
    z-index: 4;
    &::after{
        content: '';
        position: absolute;
        top: 0vw;
        left: 0vw;
        width: 5vw;
        height: 205vw;
        padding-bottom: 5vw;
        background-color: ${props => props.color || "#383838"};
    }
    & h2, & h4, & h5, & h6, & p, & ul li, & i{
        position: relative;
        margin: 6vw 0 0 20vw;
        width: 60vw;
        height: auto;
        color: #383838;
        float: left;
        text-align: justify;
    } 
    & h2{
        text-align: center;
        font-weight: bolder;
        height: 6rem;
        font-size: 5rem;
    }
    & h4{
        margin-top: 2vw;
        height: 5rem;
        font-size: 4rem;
        font-weight: bold;
    }
    & h5{
        margin-top: 2vw;
        text-align: center;
    }
    & h5.sub {
        height: 5rem;
        font-size: 0rem;
    }
    & h5.sub::after{
        content: '${props => props.sub || ''}';
        position: relative;
        color: #383838
        width:auto;
        font-size: 2.5rem;
        border-bottom: .5rem solid ${props => props.color || '#383838'};
        padding-bottom: .5rem;
        margin: auto;
    }
    & h6{
        margin-top: 1vw;
        height: 5rem;
        font-size: 3.5rem;
        font-weight: bold;
    }
    & p{
        margin-top: 1vw;
        height: 2rem;
        font-size: 3rem;
        height: auto;
    } 
    & p.precit{
        margin-bottom: 1vw;
    } 
    & i{
        font-style: italic;
        margin-top: 0vw;
        margin-bottom: 1vw;
        font-size: 3rem;
        padding-left: 2vw;
        width: 58vw;
    }
    & i.question{
        font-style: normal;
        font-weight: bold;
    }
    & i.divcit{
        margin-top: 2vw;
    }
    & p b{
        font-weight: bold;
    }
    & p.nearimage{
        width: 27vw;
        margin-right: 2vw;
    }
    & img{
        margin-top: 1vw;
        margin-right: 21vw;
        width: 28vw;
        float: right;
        border-radius: 2rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        padding: 1vw;
        display: block;
    }
    & ul li{
        margin: 1vw 0 0 22vw;
        font-size: 3rem;
        height: auto;
        list-style-type: circle;
    }
`

class OneProjectPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            name: this.props.name,
        };
    }
    
    render() {
        return(
                <PageOfProject className={this.state.name} color={this.props.color} sub={this.props.sub} show={this.state.show}>
                    {this.props.text}
                </PageOfProject>
        );
    }
}
OneProjectPage.contextType = CurrentSect;


class ProjectPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            color: '',
            text: '',
            sub: '',
        };
    }
    
    componentDidUpdate(){
        //con un foreach controllo array con name di tutti i progetti 
        if (this.context.content === topcenter.id && this.state.name !== topcenter.id){
            this.setState({name: topcenter.id, color: topcenter.color, text: topcenter.body, sub: topcenter.sub});
            this._scrollBarRef.updateScroll();
        }
        if (this.context.content !== 'topcenter' && this.state.name === topcenter.id){
            setTimeout(() => {this.setState({name: 'npnasf', color: '#383838', text: 'asfasasfasffasasf', sub: 'afsasfasfsaasf'})}, 1000);
        }
        if(this.context.type === 'projects' && !this.state.show){
            this.setState({ show: true });
        }
        if(this.context.type !== 'projects' && this.state.show){
            this.setState({ show: false });
        }
    }
    
    render() {
        return(
            <>
                <CloseProjectButton label='X' show={this.state.show}/>
                <Container color={this.state.color} show={this.state.show}>   
                    <PerfectScrollbar ref = {(ref) => { this._scrollBarRef = ref; }}>
                        <OneProjectPage name={this.state.sub} color={this.state.color} text={this.state.text} sub={this.state.sub}/>
                    </PerfectScrollbar>
                </Container>
            </>
        );
    }
}
ProjectPage.contextType = CurrentSect;

export default ProjectPage;


