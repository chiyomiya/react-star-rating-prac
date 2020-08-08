import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FaStar } from 'react-icons/fa';

const StarIcon = ({ isRated, color }) => (
	<FaStar fill={isRated ? color : '#cacaca'} />
);

export const StarRating = ({ 
	starts = 5,
	color = '#ebc03f',
	size = '25px',
	onRatingClick = () => {}
}) => {
	const [starSelection, setStarSelection] = useState(0);
	const [rating, setRating] = useState(0);

	const rate = ratingAmount => () => {
		// Has the rating been reset by the user
		const isCanceled = rating === 1 && ratingAmount === 1;
		const amount = isCanceled ? 0 : ratingAmount;
		setRating(amount);

		if (typeof onRatingClick === 'function') {
			onRatingClick(amount);
		}
	};

	return (
		<IconContext.Provider value={{ color, size }}>
			<div className="rating-container">
				{Array.from({ length: starts }, (v, idx) => (
					<span
						key={idx} 
						className="star-span"
						onMouseOver={() => setStarSelection(idx + 1)}
						onMouseOut={() => setStarSelection(null)}
						onClick={rate(idx + 1)}
					>
						<StarIcon 
							color={color}
							isRated={starSelection ? idx < starSelection : idx < rating }
						/>
					</span>
				))}
			</div>
		</IconContext.Provider>
	);
};

StarRating.propTypes = {
	starts: PropTypes.number,
	color: PropTypes.string,
	size: PropTypes.string,
	onRatingClick: PropTypes.func
};

export default StarRating;