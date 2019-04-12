import React, { useContext } from 'react';
import { setPathValue, addError } from '../reducers';
import { FormContext } from '../FormContext';
import { getValue, createValue } from '../utils';

export function useFormFieldState(path) {
	const context = useContext(FormContext);
	const api = createFieldApi(path, context)
	return [api.props, api.api] ;
}

function createFieldApi(path, context) {
	const { state, dispatch } = context;

	const api = {
		setValue: (value) => dispatch({ type: setPathValue.actionType, path: path, value: value }),
		setError: (error) => dispatch({ type: addError.actionType, errors: createValue(path, error) }),
		errors: getValue(state.errors, path),
		valid: getValue(state.valid, path, true) && getValue(state.touched, path, true),
		meta: getValue(state.meta, path, { name: path })
	}
	return {
		props: {
			value: getValue(state, path),
			onChange: e => { api.setValue(e.target.value) },
			onBlur: e => { if (e.target.willValidate()) e.target.checkValidity() },
			onInvalid: e => { if (!e.target.validity.valid) api.setError("Invalid") }
		},
		api
	}
}
