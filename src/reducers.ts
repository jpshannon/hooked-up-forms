import { createValue, getValue, cloneAndMerge as merge } from './utils';

function formReducer(state, action) {
	switch (action.type) {
		case addError.actionType:
			return addError(state, action.errors, action.clear || false)

		case setPathValue.actionType:
			return setPathValue(state, action.path, action.value)

		case reset.actionType:
			return reset(state);

		default:
			return state;
	}
}

function addError(state, errors, clear = false) {
	const newError = clear === true ? errors : { ...state.errors, ...errors };
	return {
		...state,
		errors: newError,
		valid: !!newError
	}
}
addError.actionType = "ADD_ERROR";

function setPathValue(state, path, value) {
	return {
		...state,
		value: merge(
			(state.value), createValue(path, value)),
		touched: merge({ ...state.touched }, createValue(path, true)),
		pristine: false
	}
}
setPathValue.actionType = "SET_PATH_VALUE";

function reset(state) {
	return state.reset();
}
reset.actionType = 'RESET';

function validate(state, action) {
	if (state.validator)
		return formReducer(state, { type: addError.actionType, errors: state.validator(action.value || state), clear: true });
	return state;
}
validate.actionType = 'VALIDATE'

export {
	formReducer,
	addError,
	reset,
	setPathValue,
	validate
}
