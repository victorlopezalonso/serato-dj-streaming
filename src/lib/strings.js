export const copy = (param) => JSON.parse(JSON.stringify(param));

export const hasMissingProperties = (object) =>  Object.values(object).some(x => x === null || x === '');

export const isEmpty = (object) => Object.values(object).every(x => x === null || x === '');

export const dateToString = (dt = new Date()) => (`${dt.getFullYear().toString().padStart(4, '0')}-${dt.getDate().toString().padStart(2, '0')}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`);

export const dateTimeToString = (dt = new Date()) => (`
    ${(dt.getMonth() + 1).toString().padStart(2, '0')}-
    ${dt.getDate().toString().padStart(2, '0')}-
    ${dt.getFullYear().toString().padStart(4, '0')}_
    ${dt.getHours().toString().padStart(2, '0')}:
    ${dt.getMinutes().toString().padStart(2, '0')}:
    ${dt.getSeconds().toString().padStart(2, '0')}`
);