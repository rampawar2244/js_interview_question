// Q Factorial in js
// function fact(n){
//     if(n === 0){
//         return 1
//     }else{
//         return n * fact(n - 1)
//     }
// }
// console.log(fact(5))

// Q string is palindrome or not
 
// function isPalindrome(str) {
//     str = str.toLowerCase() 
//     let reverseStr = str.split('').reverse().join('')
//     return str === reverseStr
// }
 

// console.log(isPalindrome("aba"));

// Q Reverse Each and Every word in string without built in method
// function reverseString(input){
//     let strText = "";
//     for(let i = input.length - 1; i>= 0; i--){
//         strText += input[i]
         
//     }
//     return strText
// }
// const result = "this is hello world"
// const out = reverseString(result)

// console.log(out)

// Q Implement a function to find the first non-repeating character in a string.
// function firstNonR(str){
//     for(const char of str){
//         if(str.indexOf(char) === str.lastIndexOf(char)){
//             return char
//         }
//     }
//     return null
// }
// const output = "Hello"
// const result = firstNonR(output)
// console.log(result,"first non-repeting")

// Q check the given object is empty or not
// function isObjectEmpty(obj) {
//     return Object.keys(obj).length === 0
//   }
//   const isEmpty = {}
//   const isObjectEmpty1 = {key:'value'}
//   console.log(isObjectEmpty(isObjectEmpty1))
//   console.log(isObjectEmpty(isEmpty))

// Q Write a simple example of using Promises.?
// function promiseEx(){
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=>{
//            const sucess = true
//            if(sucess){
//             console.log('Data fetch successfully')
//            }else{
//          console.log('error in fetching');
//            }
//         }, 2000)
//     })
// }
// console.log('start the script');
// promiseEx().then((data)=>{
//     console.log('promise Resolve:' ,data);
// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log('finally block called');
// })
// console.log('end script');



// function isPrime(num) {
//   if(num <= 1) return false
//   for(let i = 2; i<= Math.sqrt(num); i++){
//     if(num % i === 0){
//       return false
//     }
//   }
//   return true
//   // body...
// }
// console.log(isPrime(5))

// function evenNum(num) {
//   return num.filter((a)=> a % 2 === 0)
// }
// const number = [3,4,5,63,2]
// console.log(evenNum(number))

// function isPalindrome(str) {
//   return str === str.split("").reverse().join("")
// }
// console.log(isPalindrome("madam"))

// function findMax(num){
//   return Math.min(...num)
// }
// const number = [8,3,4,5,6]
// const out = findMax(number)
// console.log(out)

// function reverseStr(str) {
//   var newStr = ""
//   for (var i = str.length - 1; i >= 0; i--) {
//     newStr += str[i]
//   }
//   return newStr
// }
// console.log(reverseStr("hello"))

//fibonancy series
// object key match
// const input1 = { a: 1, b: 3, c: 7, d:8}
// const input2 = { a: 1, b: 9, c: 7, d: 89}
// const result = {}
// for(let key in input1){
//   if(input1[key] === input2[key]){
//     result[key] = input1[key] 
//   }
// }
// console.log(result)

// use flat method
// const arr = [1,2,3,[7,6,5],[4,5,[6,7,8]]]
// console.log(arr.flat(Infinity))

// feting api 
// const func = async () =>{
//   try{
//     const res = await fetch('')
//     if(res.ok){
//       console.log('ok')
//     }else{
//       console.log('err')
//     }
//   }
//   catch(err){
//     console.lo(err)
//   }
// } 

// let num = 0;
// console.log(num++)
// console.log(++num)

//check number is prime or not
// function isPrime(number){
//   if(number < 2){
//     return false
//   }
//   for(let i = 2; i < Math.sqrt(number); i++){
//     if(number % i === 0){
//       return false
//     }
//   }
//   return true
// }
// console.log(isPrime(16))

// function demo2(){
//   console.log(hi,"xyz")
//   return hi
//   var hi = "hello world"
// }
// console.log(demo2())

// var x = 10;
// function demo() {
//   console.log(x)
//   var x = 20;
 
// }
// demo()