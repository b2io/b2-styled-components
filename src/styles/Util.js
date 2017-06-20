import { isNil } from 'lodash';

// eslint-disable-next-line import/prefer-default-export
export const stripUnits = value => (isNil(value) ? value : parseFloat(value));
