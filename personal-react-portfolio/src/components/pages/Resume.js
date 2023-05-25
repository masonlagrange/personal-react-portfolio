import React from 'react';
import resume from '../../images/resume-placeholder.png'

export default function Resume() {
  return (
    <div>
      <h2 style={{margin: "2%"}}>Resume</h2>
      <h5 style={{marginLeft: "3%"}}>Download my <a href={resume} download>resume</a></h5>
      <ul style={{marginLeft: "2%"}} className='resume-list'>
        <h4>Front-End Proficiencies</h4>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Handlebars</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <ul style={{marginLeft: "2%"}} className='resume-list'>
        <h4>Back-End Proficiencies</h4>
        <li>REST APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}
