import { FC } from 'react';
import classes from './Menu.module.scss';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import { FiBookOpen, FiUnlock } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';

const Header: FC = () => {
	return (
		<div className={classes.container}>
			<div className={classes.leftSideOfMenu}>
				<HiOutlineChevronDoubleRight color="black" className={classes.forwardIcon} />
				<FiBookOpen size={18} className={classes.bookIcon} />
				<span>
					<b>Main</b> &nbsp;/ &nbsp; Getting Started &nbsp; / &nbsp; Front-end developer test proje...
				</span>
			</div>

			<div className={classes.rightSideOfMenu}>
				<span>
					<FiUnlock className={classes.lockIcon} />
					Editing
				</span>
				<b>
					Publish Space <IoIosArrowDown className={classes.downArrow} size={18} />
				</b>
			</div>
		</div>
	);
};

export default Header;
