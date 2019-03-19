import React, { useContext } from 'react';
import { setPathValue, addError } from '../reducers';
import { FormContext } from '../FormContext';
import { getValue, createValue } from '../utils';

export function useFormFieldState(path) {
	const {dispatch} = useContext(FormContext);
	const formState = dispatch({}) as any;
	return [
		getValue(formState.value, path),
		{
			setValue:
				(value) => dispatch({ type: setPathValue.actionType, path: path, value: value }),
			setError:
				(error) => dispatch({ type: addError.actionType, errors: createValue(path, error) }),
			errors: getValue(formState.errors, path),
			valid: getValue(formState.valid, path, true) && getValue(formState.touched, path, true),
			meta: getValue(formState.meta, path, { name: path })
		}
	]
}
