import React, {useReducer, useRef, useImperativeHandle, forwardRef} from 'react';

import { FormContext, initFormState } from '../FormContext';
import { formReducer } from '../reducers';
import { useFormState } from '../hooks/useFormState';

 const _Form = ({as, value, children, meta, validator, ...props }, ref) => {
	const [,formApi] = useFormState();
	const [state, dispatch] = useReducer(formReducer, value, initFormState);
	useImperativeHandle(ref, () => {
		return formApi;
	});


	const TheForm = as || 'form';
	const myformState = {
		dispatch: dispatch,
		validator: validator,
		state: state
	};

	return (
		<FormContext.Provider value={myformState}>
			<TheForm {...props}>
				{ children }
			</TheForm>
		</FormContext.Provider>
	)
};

export const Form = forwardRef(_Form);