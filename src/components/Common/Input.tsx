import { FC, HTMLAttributes } from 'react';

export const Input: FC<PropsType> = ({ disabled, label, ...rest }) => {
	return (
		<div className="w-full">
			{label && <p className="text-xl text-white font-semibold mb-2">{label}</p>}
			<input
				disabled={disabled}
				{...rest}
				className="
                    w-full
                    p-4 
                    text-lg 
                    bg-black 
                    border-2
                    border-neutral-800 
                    rounded-md
                    outline-none
                    text-white
                    focus:border-sky-500
                    focus:border-2
                    transition
                    disabled:bg-neutral-900
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                "
			/>
		</div>
	);
};

interface PropsType extends HTMLAttributes<HTMLInputElement> {
	disabled?: boolean;
	label?: string;
}
