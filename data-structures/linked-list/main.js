import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('bird');
list.prepend('fish');

console.log('List : ' + list.toString());
console.log('Size : ' + list.size());
console.log('Head : ' + list.getHead().data);
console.log('Tail : ' + list.getTail().data);
console.log('At 2 : ' + list.at(2)?.data); // Expected 'bird'
console.log('At 5 : ' + list.at(5)?.data); // Error expected
console.log('At -1: ' + list.at(-1)?.data); // Error expected

list.removeAt(2);
console.log(' -- Removed at 2: \'cat\' --');

console.log('List: ' + list.toString());
console.log('Size: ' + list.size());
console.log('Contains cat? : ' + list.contains('cat'));

list.insertAt('lion', 1);
console.log(' -- Inserted at 1: \'lion\' --');

console.log('List: ' + list.toString());
console.log('Size: ' + list.size());
console.log('Contains lion? : ' + list.contains('lion'));
