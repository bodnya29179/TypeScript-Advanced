/* Read-only in interfaces */
interface User {
  readonly id: string;
  name: string;
  age: number;
  readonly createdAt: number;
  readonly updatedAt?: number;
}

const user: User = {
  id: 'fake-id',
  name: 'fake-name',
  age: 25,
  createdAt: Date.now(),
};

user.age = 30; // ✅ Allowed
user.id = 'another-id'; // ❌ Error


/* Read-only in classes */
class Foo {
  readonly bar!: string[]; // Immutable array reference, but content can be changed

  baz!: readonly string[]; // Immutable array content, but reference can be changed

  readonly quz!: readonly string[]; // Immutable reference and content

  method(): void {
    this.bar = []; // ❌ Error
    this.bar.push('1', '2', '3'); // ✅ Allowed

    this.baz = ['1', '2', '3']; // ✅ Allowed
    this.baz.push('4'); // ❌ Error

    this.quz = []; // ❌ Error
    this.quz.push('4'); // ❌ Error
  }
}


/* Read-only variables */
const arr: readonly string[] = ['a', 'b', 'c'];

arr[0] = 'd'; // ❌ Error
arr = []; // ❌ Error
arr.unshift('e'); // ❌ Error
