export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode
    }

    return newNode;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    return newNode;
  }

  size() {
    if (this.head === null) {
      return 0;
    }

    let size = 0;
    let currentNode = this.head;
    
    while (currentNode !== null) {
      size++;
      currentNode = currentNode.next;
    }

    return size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    if (index < 0 || index >= this.size()) {
      console.log('Error: Index out of bounds. Size ' + this.size() + ', requested: ' + index);
      return null;
    }

    if (this.head === null) {
      console.log('List is empty.');
      return null;
    }

    let currentNode = this.head;
    for (let i = 0; i <= index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  pop() {
    if (this.head === null) {
      console.log('List is empty.');
      return null;
    }

    let currentNode = this.head;
    let previousNode = null;
    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = null;
    this.tail = previousNode;
    return this.tail;
  }

  contains(value) {
    if (this.head === null) {
      console.log('List is empty.');
      return false;
    }

    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === value) return true;
      currentNode = currentNode.next;
    }

    return false;
  }

  find(value) {
    if (this.head === null) {
      console.log('List is empty.');
      return null;
    }

    let currentNode = this.head;
    for (let index = 0; currentNode.next !== null || index < this.size(); index++) {
      if (currentNode.data === value) return index;
      currentNode = currentNode.next;
    }

    return null;
  }

  insertAt(value, index) {
    if (index < 0 || index >= this.size()) {
      console.log('Error: Index out of bounds');
      return null;
    }

    const newNode = new Node(value);

    let currentNode = this.head;
    let previousNode = null;

    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = newNode;
    newNode.next = currentNode;

    return newNode;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      console.log('Error: Index out of bounds');
      return null;
    }

    if (this.head === null) {
      console.log('List is empty.');
      return null;
    }

    let currentNode = this.head;
    let previousNode = null;
    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (previousNode === this.tail) {
      this.tail = previousNode;
      this.tail.next = null;
      return;
    }

    previousNode.next = currentNode.next;
    return;
  }

  toString() {
    if (this.head === null) {
      console.log('List is empty.');
      return '';
    }
    
    let str = '';
    let currentNode = this.head;
    while (currentNode !== null) {
      str += `( ${currentNode.data} ) -> `;
      currentNode = currentNode.next;
    }

    str+= 'null';
    return str;
  }
}

export class Node {
  data;
  next;

  constructor(value) {
    this.data = value;
    this.next = null;
  }
}