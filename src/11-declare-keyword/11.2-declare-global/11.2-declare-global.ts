/* Overriding existing types */
const obj = { a: 1, b: 2 };

Object.keys(obj).forEach((key) => {
  console.log(obj[key]);
});

Object.keys([1, 2]).forEach((key) => {
  console.log(key);
});

Object.keys('test').forEach((key) => {
  console.log(key);
});

Object.keys(12).forEach((key) => {
  console.log(obj[key]);
});


/* Adding new types */
// ❌ Incorrect ways
window.qux();
window.baz = 1;
(window as any).qux();
(window as any).baz = 1;

// @ts-ignore
const url = API_URL;
// @ts-ignore
const color = COLORS.primary;

// @ts-ignore
someFunc();

// ✅ Correct ways
window.foo();
window.bar = 1;

const baseUrl = API_BASE_URL;
const primaryColor = COLOR_SCHEME.primary;

myFunc();

const selectors: D3.Event = { x: 10, y: 50 };

console.log(d3);
