export default function Copy<T extends Object>(origin: T, toChange?: T): T {
  const strings = JSON.stringify(origin);
  const newObj = new Object(JSON.parse(strings));
  if (Object.values(toChange).length) {
    for (let prop in toChange) {
      newObj[prop as string] = toChange[prop];
    }
  }
  return newObj as T;
}