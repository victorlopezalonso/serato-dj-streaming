export const copy = (param) => JSON.parse(JSON.stringify(param));

export const hasMissingProperties = (object) =>  Object.values(object).some(x => x === null || x === '');

export const isEmpty = (object) => Object.values(object).every(x => x === null || x === '');