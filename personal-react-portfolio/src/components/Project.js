import React from 'react';
import '../styles/Project.css';
import Projects from '../projects';

function Project () {
    return(
        <div className='project-wrap'>
            {Projects.map(list => {
                return <div className='project' key={list.index}>
                    <img className='project-img' alt={list.title} src={list.img}/>
                    <a href={list.gitLink} className='repo-link hide'><img className='git-logo'alt='github logo' src={require('../images/github-logo.png')}/></a>
                    <a href={list.liveLink} className='live-link hide'>{list.title}</a>
                    <h2 className='tech-desc hide'>{list.techDesc}</h2>
                </div>
            })}
        </div>
    )
}

export default Project