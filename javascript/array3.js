// 5가지의 배열 순회 탐색 메서드

// 1. forEach
// 모든 요소를 순회하고, 각각 요소의 모든 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function(item, idx, arr) {
    console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item * 2);
})

console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1,2,3];
let isInclude= arr2.includes(44);

console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스를 찾아서 반환하는 메서드
let arr3 = [1,2,3];
let index = arr3.indexOf(3);

console.log(index);
console.clear();
// 4. findIndex
// 모든 요소를 순회하며, 특정 콜백함수를 만족하는 그런 요소
// 특정 요소의 인덱스를 반환하는 메서드
let arr4 = [1,2,3,4];
const findedIndex = arr4.findIndex(
    (item) => item === 3
);

console.log(findedIndex);

let arr5 = [
    {name: "김"},
    {name: "이"},
]

const test = arr5.findIndex(item => item.name === "김");
console.log(test);

// 5. find
// 모든 요소를 순회하며, 특정 콜백함수를 만족하는 요소를 찾고 그대로 반환
let arr6 = [
    {name: "김"},
    {name: "이"},
]

const finded = arr6.find(item => item.name === "김");
console.log(finded);