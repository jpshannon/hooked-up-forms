import React, {useReducer} from 'react';

import { FormContext, initFormState } from '../FormContext';
import { formReducer } from '../reducers';

export const Form = ({ value, children, meta, validator, ...props }) => {
	const [state, dispatch] = useReducer(formReducer, value, initFormState);
	const TheForm = props.as || 'form';
	const myformState = {
		dispatch: dispatch,
		validator: validator
	};

	return (
		<FormContext.Provider value={myformState}>
			<TheForm>
				{ children }
			</TheForm>
		</FormContext.Provider>
	)
}