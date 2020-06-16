const storage = new Map();
const queue: Array<string[] | Object> = [];


/**
 * Getting a value by key to the storage
 * 
 * @param  {string} key
 * @returns Array
 */
export function getValueFromStorage(key: string): Array<string> {
  const value = storage.get(key);

  return value ? value : `Key isn't available`;
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
 * Passes through the queue and deletes already iterated items
 * 
 * @param  {Array<Object|string[]>} queue
 * @returns void
 */
function dive(queue: Array<Object | string[]>): void {
  queue.forEach((item, i) => {
    if (typeof item === 'object') {
      iteratingObject(item);
    } else {
      iteratingArray(item);
    }
    queue.splice(i, 1);
  });
}


/**
 * Iterating through an array and pass each item to iteratingObject method
 * 
 * @param  {Array<Object>} array
 * @returns void
 */
function iteratingArray(array: Array<Object>): void {
  array.forEach(item => iteratingObject(item));
}


/**
 * Iterating through an object and check type of data and set value to storage
 * 
 * @param  {Object} data
 * @returns void
 */
function iteratingObject(data: Object): void {
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'object') {
      setProperty(key, value);
      queue.push(value);
    } else if (Array.isArray(value)) {
      queue.push(value);
    } else {
      setProperty(key, value);
    }
  }
}


/**
 * Checks property and set it in storage
 * 
 * @param  {string} key
 * @param  {unknown} value
 * @returns void
 */
function setProperty(key: string, value: unknown): void {
  if (storage.has(key)) {
    storage.get(key).push(value);
  } else {
    storage.set(key, [value]);
  }
}
