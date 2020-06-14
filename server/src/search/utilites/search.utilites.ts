export const storage = new Map();
export const queue: Array<string[] | Object> = [];

/**
 * Checking for data type Object
 * 
 * @param  {Object|Array<string>} data
 * @param  {string} key
 * @returns boolean
 */

export function isObject(data: Object | string[], key: string): boolean {
  const target = data[key];

  return typeof target === 'object';
}


/**
 * Checking for data type Array
 * 
 * @param  {Object|string[]} data
 * @param  {string} key
 * @returns boolean
 */

export function isArray(data: Object | string[], key: string): boolean {
  const target = data[key];

  return Array.isArray(target);
}


/**
 * Getting a value by key to the storage
 * 
 * @param  {string} key
 * @returns Array
 */

export function returnValue(key: string): Array<string> {
  const value = storage.get(key);

  return value ? value : `Key isn't available`;
}


/**
 * Iterating through an array and pass each item to iteratingObject method
 * 
 * @param  {Array<Object>} array
 * @returns void
 */

export function iteratingArray(array: Array<Object>): void {
  array.forEach(item => {
    iteratingObject(item);
  });
}


/**
 * Passes through the tree
 * 
 * @param  {Object} obj
 * @returns void
*/

export function walkTree(obj: Object): void {
  if (Array.isArray(obj)) {
    iteratingArray(obj);
  } else if (typeof obj === 'object') {
    iteratingObject(obj);
  }

  while (queue.length !== 0) {
    dive(queue);
  }
}


/**
 * Iterating through an object and check type of data and set value to storage
 * 
 * @param  {Object} data
 * @returns void
 */

export function iteratingObject(data: Object): void {
  for (const key in data) {
    if (isObject(data, key)) {
      setProperty(key, data[key]);
      queue.push(data[key]);
    } else if (isArray(data, key)) {
      queue.push(data[key]);
    } else {
      setProperty(key, data[key]);
    }
  }
}


/**
 * Passes through the queue and deletes already iterated items
 * 
 * @param  {Array<Object|string[]>} queue
 * @returns void
 */

export function dive(queue: Array<Object | string[]>): void {
  queue.forEach((item, i) => {
    if (typeof item === 'object') {
      iteratingObject(item);
      queue.splice(i, 1);
    } else {
      iteratingArray(item);
      queue.splice(i, 1);
    }
  });
}


/**
 * Checks property and set it in storage
 * 
 * @param  {string} key
 * @param  {string} value
 * @returns void
 */
export function setProperty(key: string, value: string): void {
  if (storage.has(key)) {
    storage.get(key).push(value);
  } else {
    storage.set(key, [value]);
  }
}
