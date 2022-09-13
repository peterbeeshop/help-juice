import React, {useState} from 'react'
import classes from './Content.module.scss';

const Content = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className={classes.container}>
        <h1>Front-end developer test project</h1>
        <p>Your goal is to make a page that looks exactly like this one, and has the ability to create H1 text simply by <br /> typing / then 1, then typing text, and hitting enter.</p>
        <input type="text" placeholder='Type / for blocks, @ to link docs or people' className={classes.textInput} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} />
        <DropDown textvalue={inputValue} />
    </div>
  )
}

type DropDownProps = {
  textvalue?: string;
}
const DropDown = ({textvalue}: DropDownProps) => {
  return (
    <div  className={`${textvalue === '/1' ? classes.dropDown : classes.hideDropdown}`}>
      <section className={classes.section}>
        <b>Add blocks</b>
        <p className={classes.filter}>Keep typing to filter, or escape to exit</p>
        <p className={classes.keyword}>Filtering keyword <span>1</span></p>
      </section>

      <section className={classes.dropDownMenu}>

        <div className={classes.dropDownItem}>
          <span className={classes.letterT}>𝚃</span>
          <div className={classes.description}>
            <h4 className={classes.heading}>Heading 1</h4>
            <span>Shortcut: type # + space</span>
          </div>
        </div>

        <div className={classes.dropDownItem}>
          <span className={classes.letterT}>𝚃</span>
          <div className={classes.description}>
            <h4 className={classes.heading}>Expandable Heading 1</h4>
            <span>Shortcut: type {'>>#'} + space</span>
          </div>
        </div>

      </section>

    </div>
  )
}
 
export default Content