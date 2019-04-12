import React, {useContext} from 'react';
import { FormContext } from '../FormContext';
import { getValue } from '../utils';
import { addError, setPathValue, reset } from '../reducers';

export function useFormState() {
	const context = useContext(FormContext);

	return [
		context.state,
		createFormApi(context)
	];
}

function createFormApi(context) {
	const {dispatch,state} = context;

	return {
		getValue: (path, orDefault) => getValue(state.value, path, orDefault),
		setValue: (path, value) => dispatch({ type: setPathValue.actionType, path: path, value: value }),
		setError: (error) => dispatch({ type: addError.actionType, errors: error }),
		getErrors: (path) => getValue(state.errors, path, []),
		getTouched: (path) => getValue(state.touched, path, false),
		getValid: (path) => getValue(state.valid, path, true) && getValue(state.touched, path, true),
		reset: dispatch({ type: reset.actionType })
	};
}