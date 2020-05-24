import React from 'react';

const CurrentSect = React.createContext( {
    navbar: true,
    page: 'home',
    lastpage: 'home',
    semaphore: false,
    type: 'head',
    content: 'head',
    hoverProjects: false,
    colorProjects: '#f2f2f2',
    timer: '',
    setPage: () => {},
    setContent: () => {},
    setProjects: () => {},
    setProjectsTimer: () => {}
});

export default CurrentSect;