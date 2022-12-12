"use strict";
const printForecast = (data) => {
    let result = '';
    data.forEach((item, _, arr) => {
        if (arr.indexOf(item) === arr.length - 1) {
            result = result + `...${item}*C in one days.`;
            return;
        }
        result = result + `...${item}*C in one days, `;
    });
    return result;
};
console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
