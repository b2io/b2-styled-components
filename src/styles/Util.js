export const isNil = value => (value === undefined || value === null);
export const stripUnits = value => (isNil(value) ? value : parseFloat(value));
