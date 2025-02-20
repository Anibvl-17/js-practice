import { HashMap } from "./hashmap.js";

const hashMap = new HashMap();

hashMap.set("a", "1");
hashMap.set("b", "2");
hashMap.set("c", "3");
hashMap.set("d", "4");
hashMap.set("e", "5");
hashMap.set("f", "6");
hashMap.set("g", "7");
hashMap.set("h", "8");
hashMap.set("i", "9");
hashMap.set("j", "10");
hashMap.set("k", "11");
hashMap.set("l", "12");

// The following keys will cause a collision with the current hash function
// and will not be added to the hashmap
hashMap.set("m", "13");
hashMap.set("n", "14");
hashMap.set("o", "15");

const getTest = hashMap.get("a");

console.log(getTest);

console.log(hashMap.has("c"));
console.log(hashMap.length());
console.log(hashMap.remove("d"));
console.log(hashMap.has("d"));
console.log(hashMap.length());

console.log(hashMap.keys());
console.log(hashMap.values());
console.log(hashMap.entries());