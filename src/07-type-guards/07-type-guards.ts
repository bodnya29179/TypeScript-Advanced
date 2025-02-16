/* Type guards - Operator "is" */
interface Car {
  type: 'car'; // 🔍 Discriminant property
  wheels: number;
}

interface Bike {
  type: 'bike'; // 🔍 Discriminant property
  pedals: number;
}

function getVehicleInfo(vehicle: Car | Bike) {
  if (isCar(vehicle)) {
    console.log(`Car with ${ vehicle.wheels } wheels.`);
  } else {
    console.log(`Bike with ${ vehicle.pedals } pedals.`);
  }
}

getVehicleInfo({ type: 'car', wheels: 4 });  // Output - 🚘- Car with 4 wheels.
getVehicleInfo({ type: 'bike', pedals: 2 }); // Output - 🚴- Bike with 2 pedals.

// ❌ This implementation won't work correctly as it returns `boolean`, not `is Car`.
function isCar(vehicle: Car | Bike): boolean {
  return 'wheels' in vehicle;
}

// ✅ Custom Type Guard using "is"
// function isCar(vehicle: Car | Bike): vehicle is Car {
//   return 'wheels' in vehicle;
//   // or: return (vehicle as Car).wheels !== undefined;
//   // or: return vehicle.type === 'car';
// }
