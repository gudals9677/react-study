// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1,2,3];
const length = arr1.push(4, 5, 6);

console.log(arr1);
console.log(length);

// 2. pop
// 배열 맨 뒤 요를 제거하고, 반환
let arr2 = [1,2,3];
const popedItem = arr2.pop();

console.log(popedItem);
console.log(arr2);


// 3. shift
// 배열 맨 앞 요소를 제거하고, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr1.shift();

console.log(shiftedItem);
console.log(arr3);

console.clear();

// 4. unshift
// 배열 맨 앞에 새로운 요소를 추가
const arr4 = [1,2,3];
const length2 = arr4.unshift(0);

console.log(arr4,length2);

// 5. slice
// 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1,2,3,4,5];
const sliced = arr5.slice(2, 5);

console.log(sliced);

// 6. concat
// 두개의 서로 다른 배열을 붙여서 새로운 배열을 반환
let arr6 = [1,2];
let arr7 = [3,4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);