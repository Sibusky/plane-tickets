if (!Array.prototype.map) {
  Array.prototype.map = function <T, U>(
    callback: (value: T, index: number, array: T[]) => U
  ): U[] {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
      arr.push(callback(this[i], i, this));
    }
    return arr;
  };
}

if (!Array.prototype.filter) {
  Array.prototype.filter = function <T>(
    callback: (value: T, index: number, array: T[]) => boolean
  ): T[] {
    const arr: T[] = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        arr.push(this[i]);
      }
    }
    return arr;
  };
}

if (!Array.prototype.sort) {
  Array.prototype.sort = function <T>(
    compareFunction?: (a: T, b: T) => number
  ): T[] {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (
          compareFunction
            ? compareFunction(this[j], this[j + 1]) > 0
            : this[j] > this[j + 1]
        ) {
          const temp = this[j];
          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }
    return this;
  };
}

if (!Array.prototype.includes) {
  Array.prototype.includes = function <T>(
    searchElement: T,
    fromIndex: number = 0
  ): boolean {
    const len = this.length;
    let k = fromIndex >= 0 ? fromIndex : Math.max(0, len + fromIndex);

    while (k < len) {
      if (
        this[k] === searchElement ||
        (Number.isNaN(this[k]) && Number.isNaN(searchElement))
      ) {
        return true;
      }
      k++;
    }
    return false;
  };
}

if (!Array.prototype.slice) {
  Array.prototype.slice = function <T>(start?: number, end?: number): T[] {
    const len = this.length;
    const result: T[] = [];

    let relativeStart = start || 0;
    if (relativeStart < 0) {
      relativeStart = Math.max(len + relativeStart, 0);
    }

    let relativeEnd = end === undefined ? len : end;
    if (relativeEnd < 0) {
      relativeEnd = Math.max(len + relativeEnd, 0);
    }

    relativeEnd = Math.min(relativeEnd, len);

    for (let i = relativeStart; i < relativeEnd; i++) {
      result.push(this[i]);
    }

    return result;
  };
}
