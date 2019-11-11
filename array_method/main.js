console.log("Arraya method");
// push method
console.log("================push method================");

let pushArr = new Array();
console.log("Check length before pushing :::", pushArr.length);
pushArr.push("1");
pushArr.push("3");
pushArr.push("5");
console.log("check length after pushing ::: ", pushArr.length);
console.log("whole array ::: ", pushArr);

// pop
console.log("================pop method================");
pushArr.pop();
console.log("Check array after poping ::: ", pushArr);

// shift
console.log("====================shift method=======================");
let shiftArr = ["1", "2", "3", "4"];
console.log("Before shift ::: ", shiftArr);
shiftArr.shift();
console.log("After shift ::: ", shiftArr);

// unshift
console.log("================unshift=========================");
let unShiftArr = ["1", "2", "3", "4"];
unShiftArr.unshift("1");
console.log("After unshift :::: ", unShiftArr);

// splice
console.log("==================splice===================");
let spliceArr = ["1", "2", "3", "4", "5"];
// splice(fromIndex, toIndex)
spliceArr.splice(0, 1);
// splice(toIndex)
spliceArr.splice(2);
console.log("After splice array ::: ", spliceArr);

// concat
let fuirts = ["apple", "banana"];
console.log("before concat ::: ", fuirts);
fuirts = fuirts.concat(spliceArr);
console.log("After concat ::: ", fuirts);

// forEach 1
let eachArr = ["1", "2", "3", "4", "5"];
console.log("Foreach array ::: ", eachArr);
eachArr.forEach((item, index, eachArr) => {
  console.log(
    item + " is in " + index + "th element of this " + eachArr + " array"
  );
});

// forEach 2
eachArr.forEach(getElement());
function getElement(item, index) {
  console.log("foreach funtion ");
}
