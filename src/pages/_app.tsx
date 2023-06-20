import { Layout } from '@components/Layout';
import type { AppProps } from 'next/app';
import '../../public/scss/app.scss';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
