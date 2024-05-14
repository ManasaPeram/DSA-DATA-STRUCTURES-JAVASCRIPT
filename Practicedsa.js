/*************************LEARNING DSA IN JAVASCRIPT***********************/
//1. HOW DO YOU CREATE AN EMPTY ARRAY IN JAVASCRIPT?
const arr = [1, 2, 3];
const arr2 = new Array();
console.log(arr, arr2);

//MAP, FILTER AND REDUCE-POLYFILL
const employees = [
  { name: "jhon", age: 22 },
  { name: "Manu", age: 23 },
];

const mapwithEmployee = employees.map((emp) => emp.name);
console.log(mapwithEmployee);

//here using with polyfill function
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
const myemployee2 = employees.myMap(function (employee) {
  return employee.name;
});

console.log(myemployee2);

//Filter in Javascript
const products = [
  { name: "mango", price: 100, instock: true },
  { name: "apple", price: 200, instock: true },
  { name: "orange", price: 300, instock: false },
  { name: "banana", price: 400, instock: true },
  { name: "grapes", price: 500, instock: false },
  { name: "pineapple", price: 600, instock: true },
];
//method with arrow function
const availableProducts = products.filter((product) => product.instock);
console.log(availableProducts);

//method with normla function
const availableProductswithnormal = products.filter(function (x) {
  return x.instock;
});

console.log(availableProductswithnormal);

//Polyfill of filter function
Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
    return result;
  }
};

const myavailableProductswithnormal = products.myFilter(function (x) {
  return x.instock === true;
});
console.log(myavailableProductswithnormal);

//Reduce in javascript
const orders = [
  { product: "iphone", price: 999, quantity: 2 },
  { product: "ipad", price: 899, quantity: 1 },
  { product: "macbook", price: 1299, quantity: 1 },
  { product: "iphone", price: 999, quantity: 2 },
  { product: "ipad", price: 899, quantity: 1 },
  { product: "macbook", price: 1299, quantity: 1 },
];

const totalPrice = orders.reduce((acc, order) => {
  return acc + order.price * order.quantity;
}, 0);
console.log(totalPrice);

//question: GIven an array of string, find the longest word and retuen its length
const words = [
  "apple",
  "banana",
  "cherry",
  "cheese",
  "dragonfuitmyfav",
  "dragonfly",
];

const longestWordLength = words.reduce((maxlenght, word) => {
  const currentlenght = word.length;
  return currentlenght > maxlenght ? currentlenght : maxlenght;
}, 0);
console.log(longestWordLength);

//question 2- GIven an array of strings, find the longest word

const longestword = words.reduce((longestWord, word) => {
  return word.length > longestWord.length ? word : longestWord;
});
console.log(longestword);

//Question 4: Calculate the average score of students who scored above 90

const students = [
  { name: "John", score: 85 },
  { name: "Sarah", score: 92 },
  { name: "Michael", score: 88 },
  { name: "Emma", score: 95 },
  { name: "Daniel", score: 90 },
];

const above90StudentScore = students
  .filter((student) => student.score > 90)
  .reduce((acc, student, i, arr) => acc + student.score / arr.length, 0);
console.log(above90StudentScore);


//Question 5: Filter out books published before the year 2000 and return their titles

const books = [
    { title: 'Book 1', year: 1998 },
    { title: 'Book 2', year: 2003 },
    { title: 'Book 3', year: 1995 },
    { title: 'Book 4', year: 2001 },
];

// Expected Output: ['Book 2', 'Book 4']

const beforePublishBook = books.filter((book)=> {
    return book.year>2000
})
console.log(beforePublishBook);

//Question 6: Capitalize the first letter of each word in the array

const strings = ['hello world', 'i am openai', 'welcome to javascript'];

// Expected Output: ['Hello World', 'I Am Openai', 'Welcome To Javascript']
const capitalizeString = strings.map((string)=> {
    return string.charAt(0).toUpperCase()+ string.slice(1);
})
console.log(capitalizeString);


//BASICS//
/********************* */
//Question 1: Sum of all natural numbers from 1 to n
//Time Complexity -O(1)
const sumNaturalNumbers = function(num){
  return (num*(num+1))/2
}
const num =5
console.log(sumNaturalNumbers(num));

//Question 2: Sum of digits of a number
//Time Complexity -O(n)
const sumofDigits = function(n){
  return n.toString().split('').reduce((sum, digit)=> sum+parseInt(digit),0)
}
const n = 123
console.log(sumofDigits(n)); //6  i,e 1+2+3=6

//Question 3: Count the number of digits of a number
//Time Complexity -O(1)
const countDigits = n1=> `${n1}`.length
const nDigits = 1234
console.log(countDigits(nDigits)); //4

//Question 4: Check if a number is palindrome
//Time Complexity -O(n)
const isPalindrome = num1 =>{
  return num.toString().split('').reverse().join('') === num,toString()
}
const num1 = 121
console.log(isPalindrome(num1)); //true

//Question 5: Find nth Fibonacci number
//Time Complexity -O(n)
const nthFib = n2 => {
  if(n2<2){
    return n2
  }
  let prev =0, curr=1, next;
  for(let i=2; i<=n2;i++){
    next = prev+curr;
    prev=curr;
    curr=next
  }
  return next
}
const n2 =10
console.log(nthFib(n2)); //55

//Question 6: Missing Number in an Array
//Time Complexity -O(n)
const missingNum = num10 =>{
  const num = num10.length+1;
  const total = (num*(num+1))/2;
  const sum = num10.reduce((acc, num2) => acc+num2, 0);
  return total-sum;
}
const num10 = [1, 2, 4, 5, 6]
console.log(missingNum(num10)); //3