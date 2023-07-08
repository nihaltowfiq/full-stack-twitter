import { Layout } from '@components/Layout';
import store from '@store';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import '../../public/scss/app.scss';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Toaster />

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}
