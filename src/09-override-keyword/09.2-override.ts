/* 💡 Example 2 */
class Animal {
  speak(): void {
    console.log('Animal makes a sound');
  }
}

const animal = new Animal();
animal.speak(); // Animal makes a sound

class Dog extends Animal {
  override speak(): void {
    console.log('Dog barks');
  }
}

const dog = new Dog();
dog.speak(); // Dog barks


class Cat extends Animal {
  /* ❌ Non-existent method cannot be overrided */
  override jump(): void {
    /* ... */
  }

  /* ❌ Override type cannot be changed */
  override speak(): string {
    console.log('Cat meows');
  }

  /* ✅ Correct override */
  override speak(): void {
    super.speak();
    console.log('Cat meows');
  }
}

const cat = new Cat();
cat.speak(); // Animal makes a sound, Cat meows
