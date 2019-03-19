import React, { Dispatch } from 'react';


const formState = {
	value: {},
	errors: {},
	touched: {},
	pristine: true,
	valid: true,
	meta: {}
};

export function initFormState(value:any) {
	return {
		...formState,
		value: value,
		reset: () => initFormState(value)
	};
}

let dispatch = {} as Dispatch<any>;
function validator(state:any) { return state as any; }
export const FormContext = React.createContext({dispatch, validator: validator });