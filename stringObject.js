const str = "a.b.c.d.e";
const strArr = str.split(".");

const lastValue = strArr.pop(); // removes "e" and returns it
const obj = strArr.reduceRight((acc, key) => ({ [key]: acc }), lastValue);

console.log(JSON.stringify(obj, null, 2));
