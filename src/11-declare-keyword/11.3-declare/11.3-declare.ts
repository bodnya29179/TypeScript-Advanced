declare const PI: number;

const radius = 10;
const circleArea = PI * radius ** 2;

declare global {
  type Calculations = number;
}

declare interface Info {
  date: Date;
}

let foo: Info;
