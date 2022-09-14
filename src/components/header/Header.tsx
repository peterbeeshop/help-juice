import React from 'react';
import classes from './Header.module.scss';
import easterBunny from './assets/easter-bunny.png';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FiArrowDownLeft, FiCloud } from 'react-icons/fi';
import { BsCheck2Circle } from 'react-icons/bs';
import { BiDotsVerticalRounded } from 'react-icons/bi';

function SubHeader() {
	return (
		<div className={classes.container}>
			<div className={classes.leftSideOfHeader}>
				<b>P</b>
				<span className={classes.clock}>
					<AiOutlineClockCircle color="#595252bb" />
					&nbsp;0min
				</span>
				<img src={easterBunny} alt="easter-bunny" height={20} />
				<span>
					<FiArrowDownLeft />
					&nbsp;0
				</span>
			</div>
			<div className={classes.rightSideOfHeader}>
				<BsCheck2Circle color="#595252bb" />
				<FiCloud color="green" />
				<BiDotsVerticalRounded />
			</div>
		</div>
	);
}

export default SubHeader;
