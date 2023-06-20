import { BsBellFill, BsHouseFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { IconType } from 'react-icons/lib/esm/iconBase';

export interface ISidebar {
	label: string;
	href: string;
	icon: IconType;
}

export const sidebarData: ISidebar[] = [
	{
		label: 'Home',
		href: '/',
		icon: BsHouseFill,
	},
	{
		label: 'Notifications',
		href: '/notifications',
		icon: BsBellFill,
	},
	{
		label: 'Profile',
		href: '/users/123',
		icon: FaUser,
	},
];
