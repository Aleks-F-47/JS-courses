const examle = {
  name: "Anton",
  age: 36,
  skills: ["Javascript", "HTML", "CSS"],
  salary: 80000,
};
const objDoc = {
  name: "Anton",
  age: 36,
  skills: ["Javascript", "HTML", "CSS"],
  salary: 80000,
};

let objJSONfromDoc = JSON.stringify(objDoc);
console.log(objJSONfromDoc);
