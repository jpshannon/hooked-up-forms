import { get, set, cloneDeep, merge } from 'lodash-es';

export function createValue(path, value) {
	return set({}, path, value)
}

export function getValue(obj, path, defaultValue:any = null) {
	return get(obj, path, defaultValue);
}

export function cloneAndMerge(src, target) {
	return merge(cloneDeep(src), target);
}