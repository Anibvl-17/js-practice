export class HashMap {
  loadFactor;
  capacity;

  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = new Array(this.capacity).fill(null);
  }

  // NOTE: This hash function can cause collisions with very long keys!
  hash(key) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
 
    return hashCode;
  }

  increaseCapacity() {
    this.capacity *= 2;
    const buckets = new Array(this.capacity);

    console.log(`Increased capacity to ${this.capacity}`);

    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        const hashCode = this.hash(bucket.key);
        const index = hashCode % this.capacity;
        buckets[index] = bucket;
      }
    });

    this.buckets = buckets;
  }
  
  // NOTE: The value should be implemented as a linked list to handle collisions!
  set(key, value) {
    if (this.length() >= this.capacity * this.loadFactor) {
      this.increaseCapacity();
    }

    const item = { key, value };

    const hashCode = this.hash(key);
    const index = hashCode % this.capacity;

    if (this.buckets[index] !== null && this.buckets[index]?.key !== key) {
      // NOTE: Collisions aren't handled, the item is just not added.
      console.log(`Collision detected for key: ${key}, item not added`);
      return;
    }

    this.buckets[index] = item;
  }

  get(key) {
    const hashCode = this.hash(key);
    const index = hashCode % this.capacity;
    return this.buckets[index].value;
  }

  has(key) {
    const hashCode = this.hash(key);
    const index = hashCode % this.capacity;
    return this.buckets[index] !== null;
  }

  remove(key) {
    if (this.has(key)) {
      const hashCode = this.hash(key);
      const index = hashCode % this.capacity;
      this.buckets[index] = null;
      return true;
    }
    return false;
  }

  length() {
    return this.buckets.filter( (bucket) => bucket !== null ).length;
  }

  clear() {
    this.buckets = new Array(this.capacity);
  }

  keys() {
    const keys = [];

    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        keys.push(bucket.key);
      }
    });

    return keys;
  }

  values() {
    const values = [];

    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        values.push(bucket.value);
      }
    });

    return values;
  }

  entries() {
    const entries = [];

    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        entries.push([bucket.key, bucket.value]);
      }
    });

    return entries;
  }
}