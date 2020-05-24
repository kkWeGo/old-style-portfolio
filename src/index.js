import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import CurrentSect from './context';
import Header from './header';
import Section from './section';
import Me from './me';
import Skills from './skills';
import Experiences from './experiences';
import Projects from './projects';
import ProjectPage from './projectpage';
import './css/reset.css';
import './css/index.css';
import './css/stars.css';
import 'react-perfect-scrollbar/dist/css/styles.css'
var bio = 'I\'m a student at Univesity of Trento (ITC), I love to develop informatic/design related projects and to ask questions about almost everything happens and exist near me. I\'ve got a big passion for technology since I was a child and nowadays i still want to keep it strong. I can help you in Web Development, React App Development, Desktop App Development and UX/UI Design';
const contacts = ['./img/mail.svg', './img/facebook.svg', './img/instagram.svg', './img/twitter.svg', './img/linkedin.svg', './img/pinterest.svg'];
const section = ['BIO', 'SKILLS', 'PROJECTS', 'EXPERIENCES'];
 
class Page extends React.Component {
    
    constructor(props) {
        super(props);
               
        this.state = {
            navbar: true,  
            page: 'home',
            lastpage: 'home',
            semaphore: false,
            type: 'head',
            content: 'head',
            hoverProjects: false,
            colorProjects: '#E57853',
            timer: '',
            setPage: this.setPage,
            setContent: this.setContent,
            setProjects: this.setProjects,
            setProjectsTimer: this.setProjectsTimer,
        };
    };

    getMousePos (){
        function printMousePos(event) {
            document.body.textContent =
              "clientX: " + event.clientX +
              " - clientY: " + event.clientY;
          }
          
          document.addEventListener("click", printMousePos);
    };

    setContent = (type, content) => {
        this.setState( { type: type, content: content } );
        console.log(this.state);
    };

    setProjects = (hover, color) => {
        if (hover && !this.state.hoverProjects){
            this.setState({ hoverProjects: true, colorProjects: color });
        } 
        if (hover){
            this.setState({ colorProjects: color });
        } 
        if (!hover && this.state.hoverProjects){
            this.setState({ hoverProjects: false, colorProjects: color });
        }
    };

    setProjectsTimer = (hovering, timer) => {
        if (!hovering){
            clearTimeout(this.state.timer);     
        } else {
            this.setState({timer: timer});
        }
    };

    setPage = page => {
        if (page === 'home' || this.state.page === page){
            this.setState( { navbar: true, lastpage: this.state.page, page: 'home', semaphore: false } );
        } else {
            this.setState( { navbar: false, lastpage: this.state.page, page: page, semaphore: true } );
        }
    };

    render(){
        return (
            <CurrentSect.Provider value={ this.state }>
                <Header color='#383838' section={ section }/>
                <Section color='green' type='BIO' top='-100%' left='-100%'>
                    <Me img='./img/imgbio.jpg' text={ bio } contacts={ contacts }/>
                </Section>
                <Section color='blue' type='SKILLS' top='100%' left='-100%'>
                    <Skills />
                </Section>
                <Section color='yellow' type='PROJECTS' top='100%' left='100%'>
                    <Projects />
                </Section>
                <Section color='grey' type='EXPERIENCES' top='-100%' left='100%'>
                    <Experiences />    
                </Section>
                <ProjectPage />
            </CurrentSect.Provider>
        )
    }
}

function FullPage(){
    const FullPage = (
        <Page />
    );
    
    ReactDOM.render(
        FullPage,
        document.getElementById('root')
    );
}

FullPage();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
