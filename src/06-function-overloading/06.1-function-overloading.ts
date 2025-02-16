/* 💡 Example 1: Function overloading with different input types */
type InputDataType = number | string | object;

{
  function add(value1: InputDataType, value2: typeof value1): typeof value1 {
    switch (typeof value1) {
      case 'number': {
        return value1 + value2; // ❌ Error: Type mismatch, need to handle types properly
        // Fix: return (value1 as number) + (value2 as number);
      }
      case 'string': {
        return value1.concat(value2); // ❌ Error: Type mismatch again
        // Fix: return value1.concat(value2 as string);
      }
      case 'object': {
        return {
          ...structuredClone(value1),
          ...structuredClone(value2),
        }; // ❌ Error: Type mismatch again
        // Fix: value2 as object
      }
    }
  }

  const result = add(1, '2'); // ⚠️ New problem: second value type needs to match the first one!
  result.toFixed(2); // 🚨 Not strictly typed, could cause runtime issues
}

{
  function add(value1: number, value2: number): number;
  function add(value1: string, value2: string): string;
  function add(value1: object, value2: object): object;

  // or: function add<T>(value1: T, value2: T): T;

  function add(value1: InputDataType, value2: InputDataType): InputDataType | undefined {
    switch (true) {
      case (typeof value1 === 'number' && typeof value2 === 'number'): {
        return value1 + value2;
      }
      case (typeof value1 === 'string' && typeof value2 === 'string'): {
        return value1.concat(value2);
      }
      case (typeof value1 === 'object' && typeof value2 === 'object'): {
        return { ...structuredClone(value1), ...structuredClone(value2) };
      }
    }
  }

  const result1 = add(1, 2);
  result1.toFixed(2); // ✅ Strictly typed result

  const result2 = add('foo', 'bar');
  result2.includes('foo'); // ✅ Works properly

  const result3 = add({ a: 1 }, { b: 2 });
  Object.keys(result3); // ✅ Merged objects work fine
}
