import React, { useState, useRef, useEffect } from 'react';
import classes from './Content.module.scss';
import DropDown from './DropDown/DropDown';
import TextContent from './TextContent/TextContent';

const Content = () => {
	//inputValue stores the value we get when we type in the input field.
	//setInputValue is the function we use to change the value of inputValue, for we cannot directly change the value of inputValue.
	const [inputValue, setInputValue] = useState('');

	//isHeading simply keeps track of what type of element we want to create when we type in the input field. Is is a p or h1 tag?
	//by defaut, the type of tag we create is the p tag, unless we set isHeading to true. A p tag is created when we type and hit enter in the input field.
	const [isHeading, setIsHeading] = useState(false);

	//Here elements is initialized to an array of HTML elements. Remember if we want to add elements to the array we use the setElement function.
	//React.ReactNode[], simply tells us that the type of elements in this array will be virtual representation of a DOM nodes/elements
	const [elements, setElements] = useState<React.ReactNode[]>([]);

	//useRef allows us to directly create a reference to a DOM element. In this case we are creating a reference to our inputfield for later use.
	const ref = useRef<HTMLInputElement>(null);

	const createH1Element = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			const createdH1Element = <h1>{inputValue}</h1>;
			setElements((prevElements) => [...prevElements, createdH1Element]);
			setInputValue('');
			setIsHeading(false);
			event.preventDefault();
		}
	};

  function createPTag (event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
			const createdPElement = <p>{inputValue}</p>;
			setElements((prevElements) => [...prevElements, createdPElement]);
			setInputValue('');
			event.preventDefault();
		}
  }

	//this function here simply focuses the input field when we load our page in the browser.
	useEffect(() => {
		ref.current?.focus();
	}, []);

	return (
		<div className={classes.container}>
			<h1 className={classes.title}>Front-end developer test project</h1>
			<p>
				Your goal is to make a page that looks exactly like this one, and has the ability to create H1 text
				simply by <br /> typing / then 1, then typing text, and hitting Enter/RETURN.
			</p>
			<TextContent elements={elements} />

			{/* we want to conditionally render type of input field based on what type of element we want to create */}
      {/* if isHeading is true we render an input field that creates H1 elements for us. If false, we render an input field that creates p tags */}
			{isHeading ? (
				<input
					type="text"
					placeholder="Heading 1"
					value={inputValue}
					ref={ref}
					className={`${classes.textInput} ${classes.headingTextInput}`}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
					onKeyDown={createH1Element}
				/>
			) : (
				<input
					type="text"
					placeholder="Type / for blocks, @ to link docs or people"
					className={classes.textInput}
					ref={ref}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
					value={inputValue}
          onKeyDown={createPTag}
				/>
			)}
			<DropDown
				textvalue={inputValue}
				setIsHeading={setIsHeading}
				setInputValue={setInputValue}
				headingInputReference={ref}
			/>
		</div>
	);
};

export default Content;
