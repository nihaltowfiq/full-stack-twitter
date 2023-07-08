import { Modal } from '@components/Common';
import { useDispatch, useSelector } from '@store';
import { getAppState, updatePopup } from '@store/actions';
import { FC, useCallback, useState } from 'react';
import { Register } from './Register';
import { SignIn } from './SignIn';

export const AuthPopup: FC = () => {
	const [isLoading, setLoading] = useState(false);
	const { popup } = useSelector(getAppState);
	const dispatch = useDispatch();

	const onToggle = useCallback(() => {
		dispatch(updatePopup({ isActive: true, type: popup?.type === 'register' ? 'signin' : 'register' }));
	}, [popup, dispatch]);

	const footerContent = (
		<div className="text-neutral-400 text-center">
			<p>
				<span className="mr-2">
					{popup?.type === 'register' ? 'Already have an account?' : 'First time using Twitter?'}
				</span>

				<span
					onClick={onToggle}
					className="
            text-white 
            cursor-pointer 
            hover:underline
          "
				>
					{popup?.type === 'register' ? 'Sign in' : 'Create an account'}
				</span>
			</p>
		</div>
	);

	return (
		<Modal
			footer={footerContent}
			disabled={isLoading}
			isOpen={popup.isActive}
			onClose={() => dispatch(updatePopup({ isActive: false, type: null }))}
			title={popup?.type === 'register' ? 'Register' : 'Sign In'}
		>
			{popup?.type === 'register' ? <Register /> : <SignIn />}
		</Modal>
	);
};
