// regular synchronous code

console.log("List of the cities in Canada");
console.log("1. Toronto");
console.log("2. Vancouver");
console.log("3. Montreal");

// async code
console.log("List of the cities in USA");
console.log("1. New York");
setTimeout(() => {
  console.warn("2. Los Angeles");
}, 2000);
console.log("3. Chicago");

// Board example synchronous code

const firstName = "John";
const lastName = "Doe";

const concatName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

const fullname = concatName(firstName, lastName);
console.log(fullname);

// Board example asynchronous code
const userFirstName = "Jane";
const userLastName = "Doe";

const concatUserName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

setTimeout(() => {
  const userFullName = concatUserName(userFirstName, userLastName);
  console.log(userFullName);
}, 0);
