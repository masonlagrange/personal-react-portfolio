import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  // state variable for form
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[message, setMessage] = useState('')
  const[errormsg, setErrormsg] = useState('')

  // input change detection and update
  const handleInputChange = (e) => {
    const {target} = e
    const inputType = target.name
    const inputValue = target.value

    if(inputType === 'email') {
      setEmail(inputValue)
      if(!validateEmail(inputValue)) {
        setErrormsg('Invalid Email.')
      } else {
        setErrormsg('')
      }
    } else if (inputType === "name") {
      setName(inputValue)
    } else {
      setMessage(inputValue)
    }
  }

  // loss of focus error message handler
  const handleFocusOut = (e) => {
    if (!name) {
      setErrormsg('Enter a name.')
      return
    }
    if(!validateEmail(email)) {
      setErrormsg('Invalid Email')
      return
    }
    if (!message) {
      setErrormsg('Enter a message')
      return
    }
    setErrormsg('')
  }

  // form submission handler, non-functional for now
  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      return
    }
    if(!validateEmail(email)) {
      return
    }
    if (!message) {
      return
    }
    setEmail('')
    setName('')
    setMessage('')
    setErrormsg('')
  }

  // html to return, with state variable used
  return (
    <div>
      <form className='contact-wrap' onBlur={handleFocusOut}>
      <h2>Contact</h2>
      <h5>Name:</h5>
      <input onChange={handleInputChange} 
        className='name-input' 
        id='name-input' 
        name='name' 
        value={name}
        ></input>
      <h5>Email Address:</h5>
      <input onChange={handleInputChange} 
        className='email-input' 
        id='email-input' 
        name='email'
        value={email}
      ></input>
      <h5>Message:</h5>
      <textarea onChange={handleInputChange} 
        id='message-input' 
        name='message' 
        className='message-input'
        value={message}
      />
      <h6>{errormsg}</h6>
      <button type='button' 
        className='submit-button' 
        onClick={handleFormSubmit}>Submit
      </button>
      </form>
    </div>
  );
}

export default Contact