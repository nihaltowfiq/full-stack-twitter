import { sidebarData } from '@utils/constants';
import { FC } from 'react';
import { SidebarItem } from './SidebarItem';
import { SidebarLogo } from './SidebarLogo';

export const Sidebar: FC = () => {
	return (
		<nav className="col-span-1 h-full pr-4 md:pr-6">
			<div className="flex flex-col items-end">
				<div className="space-y-2 lg:w-[230px]">
					<SidebarLogo />

					{sidebarData?.map((el, i) => (
						<SidebarItem key={i} {...el} />
					))}
				</div>
			</div>
		</nav>
	);
};
