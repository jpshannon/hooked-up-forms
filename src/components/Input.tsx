import React from 'react';
import { useFormFieldState } from '../hooks/useFormFieldState';

export const Input = ({ id, type, name, ...props }) => {
	const [value, { setValue, setError }] = useFormFieldState(name);
	const handleChange = (e) => {
		e.preventDefault();
		if (e.target.willValidate) e.target.checkValidity();
		setValue(e.target.value);
	};
	const handleInvalid = () => {
		setError('required!')
	}
	return (
		<input type={type} id={id||name} name={name} value={value || ''} {...props} onChange={handleChange} onInvalid={handleInvalid} />
	)
}