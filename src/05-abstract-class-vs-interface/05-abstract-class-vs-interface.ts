/* 💡 Example 1: Creating an instance of the abstract class */
{
  abstract class User {}

  const user = new User(); ❌ // Error: Cannot create an instance of an abstract class.
}


/* 💡 Example 2: Methods and their implementation */
{
  /* Interface cannot include private fields and cannot have method implementation */
  interface IUser {
    name: string;
    permissions: string[];
    createdAt: Date;
    sayHi(): void;
    sayBye(): void;
  }

  abstract class User implements IUser {
    private readonly name: string;

    public abstract permissions: string[];

    public createdAt = new Date();

    constructor(name: string) {
      this.name = name;
    }

    sayHi(): void {
      console.log(`Hi! I'm ${ this.name }!`);
    }

    abstract sayBye(): void;
  }

  class Admin extends User {
    permissions: string[] = ['admin', 'user'];

    sayBye(): void {
      console.log('Bye!');
    }
  }

  const admin = new Admin('Adam');
  admin.sayHi(); // ✅ Hi! I'm Adam!
  admin.sayBye(); // ✅ Bye!
}


/* 💡 Example 3: Abstract class definition */
{
  abstract class Animal {
    constructor(public name: string) {}

    abstract makeSound(): void;

    move(): void {
      console.log(`${ this.name } is moving.`);
    }
  }

  class Dog extends Animal {
    makeSound(): void {
      console.log('Woof! Woof!');
    }
  }

  const myDog = new Dog('Buddy');
  myDog.makeSound(); // ✅ Woof! Woof!
  myDog.move(); // ✅ Buddy is moving.
}


/* 💡 Example 4: Interface definition */
{
  interface Vehicle {
    brand: string;
    speed: number;
    drive(): void;
  }

  class Car implements Vehicle {
    constructor(
      public brand: string,
      public speed: number,
    ) {}

    drive(): void {
      console.log(`${ this.brand } is driving at ${ this.speed } km/h.`);
    }
  }

  const myCar = new Car('Toyota', 120);
  myCar.drive(); // ✅ Toyota is driving at 120 km/h.
}


/* 💡 Example 5: Extending classes */
{
  abstract class A {}

  abstract class B extends A {}

  abstract class C extends B {}
}


/* 💡 Example 5: Extending interfaces */
{
  interface B {
    b: any;
  }

  interface C {
    c: any;
  }

  interface A extends B, C {
    a: any;
  }
}
