import { Header } from '@components/Includes';
import { useSelector } from '@store';
import { getAppState } from '@store/actions';
import { Fragment } from 'react';

export default function Home() {
	const { isLoading, popup, isAuthenticate } = useSelector(getAppState);

	console.log({ isLoading, isAuthenticate, popup });

	return (
		<Fragment>
			<Header label="Header" showBackArrow />
		</Fragment>
	);
}
