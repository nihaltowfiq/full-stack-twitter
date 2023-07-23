/* eslint-disable @next/next/no-img-element */
import { FC, Fragment, useState } from 'react';

const INACTIVE_STAR = '/assets/star-black.png';
const ACTIVE_STAR = '/assets/star-yellow.png';

export const StarRating2: FC<PropsType> = (props) => {
	const { count, changeHandler } = props;
	const [rating, setRating] = useState(null);
	const [hoverFill, setHoverFill] = useState(null);
	const [isAnimate, setAnimate] = useState(false);
	const stars = Array.from({ length: count }, () => INACTIVE_STAR);

	const handleChange = (value) => {
		setRating(value);
		changeHandler(value);
		setAnimate(true);
		setTimeout(() => setAnimate(false), 200);
	};

	return (
		<Fragment>
			<p className="font-semibold my-2">Rate & Review</p>
			{stars.map((el, i) => {
				const ratedValue = i + 1;

				return (
					<img
						key={i}
						alt="logo"
						onMouseLeave={() => setHoverFill(null)}
						onClick={() => handleChange(ratedValue)}
						onMouseEnter={() => setHoverFill(ratedValue)}
						src={ratedValue <= (hoverFill || rating) ? ACTIVE_STAR : el}
						style={{ display: 'inline-block', width: '35px', height: '35px' }}
						className={`p-1 ${isAnimate && ratedValue == rating ? 'animate-ping' : ''} `}
					/>
				);
			})}
		</Fragment>
	);
};

interface PropsType {
	count: number;
	changeHandler: (e: number) => void;
}
