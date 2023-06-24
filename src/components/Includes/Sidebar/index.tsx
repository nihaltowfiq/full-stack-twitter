import { sidebarData } from '@utils/constants';
import { BiLogOut } from 'react-icons/bi';
import { SidebarItem } from './SidebarItem';
import { SidebarLogo } from './SidebarLogo';
import { TweetButton } from './TweetButton';

export const Sidebar = () => {
	return (
		<nav className="col-span-1 h-full pr-4 md:pr-6">
			<div className="flex flex-col items-end">
				<div className="space-y-2 lg:w-[230px]">
					<SidebarLogo />

					{sidebarData?.map((el, i) => (
						<SidebarItem key={i} {...el} />
					))}

					<SidebarItem label="Logout" icon={BiLogOut} onClick={() => {}} href="" />
					<TweetButton />
				</div>
			</div>
		</nav>
	);
};
