const foo = void 'test'; // ✅ undefined

const bar = void (1 + 2); // ✅ undefined

const fn = () => 123;

const baz = void fn(); // ✅ undefined
