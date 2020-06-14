export const storage = new Map();
export const queue = [];

export function isObject(data: object, key: string): boolean {
  const target = data[key];

  return typeof target === 'object';
}

export function getKey(key: string) {
  const value = storage.get(key);

  return value ? value : `Key isn't available`;
}

export function isArray(data: object, key: string): boolean {
  const target = data[key];

  return Array.isArray(target);
}

export function walkArray(array: Array<any>): void {
  array.forEach(item => {
    walkObject(item);
  });
}

export function walkTree(obj: object): void {
  if (Array.isArray(obj)) {
    walkArray(obj);
  } else if (typeof obj === 'object') {
    walkObject(obj);
  }

  while (queue.length !== 0) {
    dive(queue);
  }
}

export function walkObject(obj: object): void {
  for (const key in obj) {
    if (isObject(obj, key)) {
      setProperty(key, obj[key]);
      queue.push(obj[key]);
    } else if (isArray(obj, key)) {
      queue.push(obj[key]);
    } else {
      setProperty(key, obj[key]);
    }
  }
}

export function dive(queue: Array<any>): void {
  queue.forEach((item, i) => {
    if (typeof item === 'object') {
      walkObject(item);
      queue.splice(i, 1);
    } else {
      walkArray(item);
      queue.splice(i, 1);
    }
  });
}

export function setProperty(key: string, value): void {
  if (storage.has(key)) {
    storage.get(key).push(value);
  } else {
    storage.set(key, [value]);
  }
}

//   function isPrimitive(data, key) {
//     const target = data[key];

//     switch(typeof target) {
//       case 'string':
//       case 'number':
//       case 'boolean':
//         return true;
//       default:
//         return false;
//     }
//   }
