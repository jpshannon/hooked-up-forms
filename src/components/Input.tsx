import React from 'react';
import { useFormFieldState } from '../hooks/useFormFieldState';

export const Input = ({ id, type, name, ...props }) => {
	const [field, api] = useFormFieldState(name);

	return (
		<input
			type={type}
			id={id||name}
			name={name}
			{...props}
			{...field}
		/>
	)
}