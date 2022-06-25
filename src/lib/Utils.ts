export function objectToString(object: object): string {
  return encodeURIComponent(JSON.stringify(object));
}
export function stringToObject(srcString: string): object {
  return JSON.parse(decodeURIComponent(srcString));
}
