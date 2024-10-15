// main.js
import { yearUntilRetirement } from './ageModule.js';
import { addNumber } from './numberModule.js';
import { calculateArea } from './areaModule.js';
import { makeAjaxRequest } from './requestModule.js';

// yearUntilRetirement usage
yearUntilRetirement({ year: 1987, firstName: 'John' });

// addNumber usage
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// calculateArea usage
let radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// makeAjaxRequest usage
makeAjaxRequest('www.google.com');
