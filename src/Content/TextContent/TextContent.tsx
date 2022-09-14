import React from 'react';
import classes from './TextContent.module.scss';

type TextContentProps = {
	elements: React.ReactNode[];
};

const TextContent = ({ elements }: TextContentProps) => {
	return (
		<div className={classes.container}>
			{elements.map((ele) => (
				<div key={Math.random() * 10}>{ele}</div>
			))}
		</div>
	);
};

export default TextContent;
