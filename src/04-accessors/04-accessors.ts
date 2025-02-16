/* 🔒 Private fields */
class Secret {
  #hidden = "This is a secret"; // 🔒 Truly private field (ES6)

  revealSecret() {
    console.log(this.#hidden); // ✅ Works inside the class
  }
}

const secret = new Secret();

secret.revealSecret(); // ✅ Works

secret['#hidden']; // ⚠️ JS allows, but TS blocks direct access to private fields

(secret as any)['#hidden']; // 🛠️ ...even it's private

console.log(secret.#hidden); // ❌ Error: Property '#hidden' is not accessible


/* 🔒 Protected fields */
class Employee {
  protected salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }

  protected getSalary(): number {
    return this.salary;
  }
}

class Manager extends Employee {
  constructor(salary: number) {
    super(salary);
  }

  public showSalary() {
    console.log(`Manager's salary is $${this.getSalary()}`); // ✅ Accessible inside subclass
    console.log(this.salary); // ✅ Accessible inside subclass
  }
}

const manager = new Manager(5000);

manager.showSalary(); // ✅ Works

console.log(manager.salary); // ❌ Error: Property 'salary' is protected

manager.getSalary(); // ❌ Error: Method 'getSalary' is protected
