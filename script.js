const person = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "Peachfield",
    city: "Budapest",
    country: "Hungary",
  },
};

const p1 = { ...person };
console.log("p1: ", p1);
let nums = [2, 3]
let nums2 = [1,...nums,4]

const p2 = Object.assign({}, person);

p2.firstName = "Jane";
p1.address.street = "Main Street";

console.log("person ", person);
console.log("p2: ", p2);

const p3 = JSON.parse(JSON.stringify(person));
console.log("p3: ", p3);
p3.firstName = "Jane";
p3.address.street = "Main Street";

console.log("person: ", person)
console.log("p3: ", p3)
