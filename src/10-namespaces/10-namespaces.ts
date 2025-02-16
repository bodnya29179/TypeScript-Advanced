namespace MyNamespace {
  export interface User {
    id: number;
    name: string;
  }

  export const FOO = 123;

  const BAR = 456; // Not exported, so it remains private

  export namespace Static.Constants {
    export const MATH_PI = Math.PI;
  }

  export namespace MathOperations {
    export function add(x: number, y: number): number {
      return x + y;
    }

    function subtract(x: number, y: number): number {
      return x - y;
    }

    export function addBarToPi(): number {
      return Static.Constants.MATH_PI + BAR; // ✅ Accessible within the namespace
    }
  }
}

/* Accessing exported members */
const pi = MyNamespace.Static.Constants.MATH_PI;

const user: MyNamespace.User = {
  id: 1,
  name: 'Adam',
};

MyNamespace.MathOperations.add(1, 2);

MyNamespace.MathOperations.addBarToPi();

MyNamespace.FOO;
MyNamespace.BAR; // ❌ Error: 'BAR' is not exported
