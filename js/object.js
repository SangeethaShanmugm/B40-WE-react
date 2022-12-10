// const avenger = {
//   name: "Tony Stark",
//   house: "🏠",
//   networth: "💰💰💰💰",
//   power: " 🤖",
//   phrase: "💖 you 2022",
// };

// const {
//   name,
//   networth,
//   power = "🤖",
//   skill = ["genius", "billionaire", "playboy", "philanthropist"],
// } = {
//   name: "Tony Stark",
//   house: "🏠",
//   networth: "💰💰💰💰",
//   phrase: "💖 you 2022",
// };

// console.log(networth, power, skill);
// //💰💰💰💰
// //💿
// //["genius", "billionaire", "playboy", "philanthropist"]

const avg = {
  name: "Tony Stark",
  house: "🏠",
  networth: "💰💰💰💰",
  power: " 🤖",
  phrase: "💖 you 2022",
};

const avg1 = { ...avg, nation: "US", power: "💿" };
console.log(avg);
console.log(avg1);

const avg2 = { nation: "US", power: "💿", ...avg };
console.log(avg2);

// nation: "US", power: "🤖", name: "Tony Stark",house: "🏠",networth: "💰💰💰💰",phrase: "💖 you 2022",
//name: "Tony Stark",
// house: "🏠",
// networth: "💰💰💰💰",
// power: " 🤖",
// phrase: "💖 you 2022",

const age = 20;
const batch = "B40WE";

// const student = {
//   name: "Bhuva",
//   age: age,
//   batch: batch,
// };
//Shorthand
//object shorthand

const student = {
  name: "Bhuva",
  age,
  batch,
};
console.log(student);
