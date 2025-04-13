let person = {
    name: "kim",
    age: 27,
    hobby: "game",
}

let keys = Object.keys(person);
console.log(keys);

for(let key of keys) {
    const value = person[key];
    console.log(key, value);
}

let values = Object.values(person);
console.log(values);

for(let value of values) {
    console.log(value);
}

console.clear();

for(let key in person) {
    const value = person[key];
    console.log(key, value);
}