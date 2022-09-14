// let sales = 123_456_789; // sales is a number type var
// let course = 'TypeScript'; // course is a string type var
// let is_published = true; // is_published is a boolean type var
// let level; // level is an ANY type var

// function render(document) {
//   console.log(document);

// }


// let numbers: number[] = [];
// numbers.forEach(n => n.toExponential)


//////// TUPLES

// let user: [number, string, boolean, number] = [1, 'John', true, 0];
// user.push(1);

/////// ENUMS

// const small = 1;
// const medium = 2;
// const large = 3;

// const enum Size {
//   Small = 1,
//   Medium,
//   Large
// }
// let mySize: Size = Size.Medium;
// console.log(mySize);

//////// FUNCTIONS

// function calculateTax(income: number, taxYear = 2022): number {
//   if (taxYear < 2022) {
//     return income * 1.2;
//   } else {
//     return income * 1.3;
//   }
// }

// calculateTax(10_000);

//////// OBJECTS

// let employee: {
//   readonly id: number
//   name: string
//   retire: (date: Date) => void;
// } = {
//   id: 1, 
//   name: 'John',
//   retire: (date: Date) => {
//     console.log(date);
//   }
// };
// // employee.name = 'John'; // doesn't work in TS 
// // employee.id = 0;

/////// ADVANCED TYPES

// type Employee = {
//   readonly id: number
//   name: string
//   retire: (date: Date) => void;

// }

// let employee: Employee = {
//   id: 1, 
//   name: 'John',
//   retire: (date: Date) => {
//     console.log(date);
//   }
// };

////// UNION TYPES

// function kgToLbs(weight: number | string): number {
//   //Narrowing
//   if (typeof weight === 'number') {
//     return weight * 2.2;
//   } else {
//     return parseInt(weight) * 2.2;
//   }
// }

// kgToLbs(10);
// kgToLbs('10kg');

//////// INTERSECTION

// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void
// };

// type UIWidget = Draggable & Resizable

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {}
// }

//////// LITERAL TYPES

// Literal (exact or specific)
// type Quantity = 50 | 100;
// let quantity: Quantity = 100; // can be 50 or 100

// type Metric = 'cm' | 'inch';

/////// NULLABLE TYPES

// function greet(name: string | null | undefined) {
//   if (name) {
//     console.log(name.toUpperCase());
//   } else {
//     console.log('Hola!');
//   }
// }

// greet(null);

/////// OPTIONAL CHAINING

// type Customer = {
//   birthday?: Date
// };

// function getCustomer(id: number): Customer | null | undefined {
//   return id === 0 ? null : { birthday: new Date() };
// }

// let customer = getCustomer(0);
// // Optional property access operator (which is ?. )
// console.log(customer?.birthday?.getFullYear());

// // Optional element access operator
// // customers?.[0];

// //Optional call
// let log: any = null;
// log?.('a');