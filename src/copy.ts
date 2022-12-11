export default function Copy<T extends object>(origin: T, toChange?: T): T {
  const strings = JSON.stringify(origin);
  const newObj = new Object(JSON.parse(strings));
  return newObj as any;
}