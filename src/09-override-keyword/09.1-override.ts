/* 💡 Example 1 */
class Foo {
  someMethod(): number {
    return 123;
  }
}

class Bar extends Foo {
  /* ✅ Works */
  override someMethod(): number {
    return 456;
  }
}

const bar = new Bar();
bar.someMethod(); // 456
