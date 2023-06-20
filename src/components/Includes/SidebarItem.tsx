import { ISidebar } from '@utils/constants';
import { FC } from 'react';

export const SidebarItem: FC<PropsType> = ({ label, href, icon: Icon, onClick }) => {
	return (
		<div className="flex flex-row items-center">
			<div className="relative rounded-full h-14 w-14 flex items-center justify-center hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
				<Icon size={28} color="white" />
			</div>
		</div>
	);
};

interface PropsType extends ISidebar {
	onClick?: () => void;
}
