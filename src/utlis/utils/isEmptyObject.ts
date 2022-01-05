function isEmptyObject(obj: any = {}) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}

export default isEmptyObject;
