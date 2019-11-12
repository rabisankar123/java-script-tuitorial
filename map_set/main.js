console.log("======================Map==========================");
let map = new Map();
map
  .set(1, "one")
  .set("two", 2)
  .set(true, 1);
console.log("Map size ::: ", map.size);
console.log("Map value using get(key) ::: ", map.get(true));
console.log("Key contain map value or not using has() ::: ", map.has(1));
console.log("Delete element from map ::: ", map.delete(1));
console.log("After delete map size ::: ", map.size);
map.clear();
console.log("For clear map ::: ", map.size);
console.log("======================Set==========================");
let set = new Set();
let rabi = { name: "sankar" };
let ajay = { name: "ajay" };
let deepankar = { name: "Bhai" };
let vikas = { name: "Bhai" };
set.add(rabi);
set.add(ajay);
set.add(deepankar);
set.add(vikas);

console.log("set ::: ", set);
console.log("set ::: ", set.size);
for (let value of set) {
  console.log(value.name);
}
set.clear();
console.log("set ::: ", set);
