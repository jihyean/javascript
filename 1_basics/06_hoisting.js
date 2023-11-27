/**
 * Hoisting
 */
console.log('Hello');
console.log('World');
console.log('----------');

// console.log(name);
// var name = '코드팩토리';
// console.log(name);

/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */

// var name;
// console.log(name);
// name = '코드팩토리';
// console.log(name);

console.log(name);
var name = '코드팩토리';
console.log(name);

/**
 * let 의 경우에는 초기화 전에 접근할 수 없다는 에러 발생
 * 함수에도 호이스팅이 적용됨
 */

console.log(yuJin);
const yuJin = '안유진';