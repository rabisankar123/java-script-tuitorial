// normal funtion
sayHiFun("normal");
function sayHiFun(user) {
  console.log("Hiii", user);
}

// arrow funtion
let sayHi = user => {
  console.log("Hii.." + user);
};
sayHi("Arrow");
