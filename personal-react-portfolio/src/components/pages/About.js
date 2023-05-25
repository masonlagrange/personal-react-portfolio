import React from 'react';
import avatar from '../../images/avatar.png'

export default function About() {
  return (
    <div>
      <h2 style={{margin: "2%"}}>About Me</h2>
      <img src={avatar} alt='profile avatar' className='avatar' style={{marginLeft: "2%"}}/>
      <p style={{margin:"2%"}}>
        My name is Mason Lagrange and I am working to become a web developer! My previous education
        is an honours bachelor's degree of science, but I decided to shift my focus
        to what really interests me. This of course is computer science and web development.
        I hope to have a career in this field and I am excited to learn more about the field.
        Expanding my repertoire is a lot of fun, and I look forward to continuing my learning!
      </p>
    </div>
  );
}
