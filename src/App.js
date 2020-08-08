import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaRegSadCry, FaRegMeh, FaRegLaugh, FaRegLaughBeam, FaRegLaughSquint } from 'react-icons/fa';

import { switchcase } from './utils/misc-helpers';

import StarRating from './components/StarRating';

import './App.css';

function App() {
	const [score, setScore] = useState(0);

	const scoreIcon = switchcase({
		1: <FaRegSadCry />,
		2: <FaRegMeh />,
		3: <FaRegLaugh />,
		4: <FaRegLaughBeam />,
		5: <FaRegLaughSquint />
	})('Please rate !')(score);

	const onRatingClick = rating => setScore(rating);

	return (
		<div className="App">
			<article className="rating-area">
				<header>
					<h1>React Star Rating Practice</h1>
				</header>

				<StarRating onRatingClick={onRatingClick} />

				<IconContext.Provider value={{ color: '#ebc03f', size: '80px' }}>
					<div className="rating-score">{scoreIcon}</div>
				</IconContext.Provider>
			</article>
		</div>
	);
}

export default App;
