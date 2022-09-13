import React from 'react'
import classes from './TextInput.module.scss'


const TextInput = () => {
  return (
    <div>
      <input type="text" placeholder='Type / for blocks, @ to link docs or people' className={classes.textInput} />
    </div>
  )
}

export default TextInput