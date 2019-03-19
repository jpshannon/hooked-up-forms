import React, {useContext} from 'react';
import { FormContext } from '../FormContext';
import { getValue } from '../utils';
import { addError, setPathValue, reset } from '../reducers';

export function useFormState() {
	const { dispatch } = useContext(FormContext);
	const formState = dispatch({}) as any;

	return [
		formState,
		{
			getValue: (path, orDefault) => getValue(formState.value, path, orDefault),
			setValue: (path, value) => dispatch({ type: setPathValue.actionType, path: path, value: value }),
			setError: (error) => dispatch({ type: addError.actionType, errors: error }),
			getErrors: (path) => getValue(formState.errors, path, []),
			getTouched: (path) => getValue(formState.touched, path, false),
			getValid: (path) => getValue(formState.valid, path, true) && getValue(formState.touched, path, true)
			, reset: dispatch({ type: reset.actionType })
		}
	];
}