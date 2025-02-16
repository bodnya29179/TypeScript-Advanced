/* Simple tuples: fixed types and order */
const foo: [number, string] = [1, 'test']; // ✅ Correct

const bar: [number, string] = [1, 'test', true]; // ❌ Error


/* Optional tuple elements: allow undefined for specific positions */
const buzz: [number, string, number?] = [1, 'test']; // ✅ Correct

const qux: [number, string, number?] = [1, 'test', 2]; // ✅ Correct


/* Rest tuples: flexible length but fixed types for the first and last elements */
let quux: [number, ...boolean[], string];

quux = [1, 'test']; // ✅ Correct
quux = [1, true, false, 'test']; // ✅ Correct
