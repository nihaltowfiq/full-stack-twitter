import { FollowBar, Sidebar } from '@components/Includes';
import { AuthPopup } from '@components/UI';
import { FC, Fragment, ReactNode } from 'react';

export const Layout: FC<PropsType> = ({ children }) => {
	return (
		<Fragment>
			<section className="h-screen bg-black">
				<div className="container h-full mx-auto xl:px-30 max-w-6xl">
					<div className="grid grid-cols-4 h-full">
						<Sidebar />
						<div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">{children}</div>
						<FollowBar />
					</div>
				</div>
			</section>

			<AuthPopup />
		</Fragment>
	);
};

interface PropsType {
	children?: ReactNode;
}
