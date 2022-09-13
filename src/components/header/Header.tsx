import {FC} from 'react';
import classes from './Header.module.scss';
import { HiOutlineChevronDoubleRight} from "react-icons/hi";
import { FiBookOpen,FiUnlock } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Header:FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.headerLeft}>
        <span className={classes.forwardIcon}><HiOutlineChevronDoubleRight /></span>
        <span className={classes.bookIcon}><FiBookOpen/> Main / Getting Started / Front-end developer test proje...</span>
      </div>
      <div className={classes.headerRight}>
        <span><FiUnlock /> Editing</span>
        <span>|</span>
        <span>Publish Space <IoIosArrowDown /></span>
      </div>
    </div>
  )
}

export default Header;