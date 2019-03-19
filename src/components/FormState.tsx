import React from 'react';
import { useFormState } from '../hooks/useFormState';

export const FormState = () => {
	const [formState,] = useFormState();
	return (
		<pre><code>{JSON.stringify(formState)}</code></pre>
	);
};