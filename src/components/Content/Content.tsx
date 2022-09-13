import React from 'react'
import classes from './Content.module.scss';
import TextInput from './textInput/SearchInput';

const Content = () => {
  return (
    <div className={classes.container}>
        <h1>Front-end developer test project</h1>
        <p>Your goal is to make a page that looks exactly like this one, and has the ability to create H1 text simply by <br /> typing / then 1, then typing text, and hitting enter</p>
        <TextInput />
    </div>
  )
}

export default Content