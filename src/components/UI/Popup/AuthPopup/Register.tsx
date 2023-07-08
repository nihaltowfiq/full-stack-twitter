import { Button } from '@components/Common';
import { useSelector } from '@store';
import { getAppState } from '@store/actions';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { IRegister } from './constants';

export const Register: FC<PropsType> = () => {
	const { popup } = useSelector(getAppState);
	const { register, handleSubmit } = useForm<IRegister>({
		defaultValues: { email: '', name: '', password: '', username: '' },
	});

	return (
		<form className="flex flex-col gap-4 -my-10" onSubmit={handleSubmit((d) => console.log(d))}>
			<input
				className="input"
				{...register('email')}
				// disabled={isLoading}
				placeholder="Email"
				//   value={email}
				//   onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				className="input"
				{...register('name')}
				// disabled={isLoading}
				placeholder="Name"
				//   value={name}
				//   onChange={(e) => setName(e.target.value)}
			/>
			<input
				className="input"
				{...register('username')}
				// disabled={isLoading}
				placeholder="Username"
				//   value={username}
				//   onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				className="input"
				{...register('password')}
				// disabled={isLoading}
				placeholder="Password"
				type="password"
				//   value={password}
				//   onChange={(e) => setPassword(e.target.value)}
			/>

			<Button
				// disabled={disabled}
				label={'Register'}
				secondary
				fullWidth
				large
				// onClick={handleSubmit}
			/>
		</form>
	);
};

interface PropsType {
	isLoading?: boolean;
}
