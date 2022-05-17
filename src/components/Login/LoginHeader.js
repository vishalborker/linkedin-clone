import React from 'react'

function LoginHeader({ formTitle, formSubTitle }) {
  return (
    <header className='header'>
        <h1 className='title'>{formTitle}</h1>
        <div className='subtitle'>{formSubTitle}</div>
    </header>
  )
}

export default LoginHeader