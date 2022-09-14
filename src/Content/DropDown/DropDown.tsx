import React from 'react';
import classes from './DropDown.module.scss';

type DropDownProps = {
	textvalue?: string;
	setIsHeading: (value: boolean) => void;
	setInputValue: (value: string) => void;
	headingInputReference: React.RefObject<HTMLInputElement>;
};
const DropDown = ({ textvalue, setIsHeading, setInputValue, headingInputReference }: DropDownProps) => {
    
	const handleHeading = () => {
		setIsHeading(true);
		setInputValue('');
		headingInputReference.current?.focus();
	};

	return (
		<div className={`${textvalue === '/1' ? classes.dropDown : classes.hideDropdown}`}>
			<section className={classes.section}>
				<b>Add blocks</b>
				<p className={classes.filter}>Keep typing to filter, or escape to exit</p>
				<p className={classes.keyword}>
					Filtering keyword <span>1</span>
				</p>
			</section>

			<section className={classes.dropDownMenu}>
				<div className={classes.dropDownItem} onClick={handleHeading}>
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
	);
};

export default DropDown;
