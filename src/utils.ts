import { get, set } from 'lodash-es';

export function createValue(path, value) {
	return set({}, path, value)
}

export function getValue(obj, path, defaultValue:any = null) {
	return get(obj, path, defaultValue);
}