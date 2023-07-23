import { StarRating } from '@components/Common/StarRating';
import { StarRating2 } from '@components/Common/StarRating2';
import { Header } from '@components/Includes';
import { Fragment, useState } from 'react';

export default function Home() {
	const [rating, setRating] = useState(0);

	return (
		<Fragment>
			<Header label="Header" showBackArrow />

			<StarRating />
			<div className="my-5 border border-b-2" />

			<div className="py-10 bg-white">
				<StarRating2 count={5} changeHandler={(value) => setRating(value)} />
			</div>
		</Fragment>
	);
}
