import { useRouter } from 'next/router';
import { FC, useCallback } from 'react';
import { BiArrowBack } from 'react-icons/bi';

export const Header: FC<PropsType> = ({ label, showBackArrow }) => {
	const router = useRouter();

	const handleBack = useCallback(() => {
		router.back();
	}, [router]);

	return (
		<div className="border-b-[1px] border-neutral-800 p-5">
			<div className="flex flex-row items-center gap-2">
				{showBackArrow && (
					<BiArrowBack
						onClick={handleBack}
						color="white"
						className="cursor-pointer hover:opacity-70 transition mt-1"
					/>
				)}
				<h1 className="text-white text-xl font-semibold">{label}</h1>
			</div>
		</div>
	);
};

interface PropsType {
	label: string;
	showBackArrow?: boolean;
}
