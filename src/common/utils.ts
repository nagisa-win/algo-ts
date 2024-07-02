export function findInArray(array: Array<any>, key: any): any {
  return array.find(i => i === key);
}

export function runner(fn: Function, ...args: any[]) {
  console.time('fn');
  const ret = fn.call(this, args);
  console.timeEnd('fn');
  console.log(ret);
}
