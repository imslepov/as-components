export function toggleValue(arr: Array<unknown>, value: unknown) {
  let cloned = arr.slice();

  if (cloned.includes(value)) {
    cloned = cloned.filter(v => v !== value);
  } else {
    cloned.push(value);
  }

  return cloned;
}
