type MapFunction = {
  <T, U>(
    collection: T[],
    iterateeFn: (value: T, index: number, collection: T[]) => U,
  ): U[];

  <T, U, K extends string | number>(
    collection: Record<K, T>,
    iterateeFn: (value: T, index: K, collection: Record<K, T>) => U,
  ): U[];
};

/**
 * Please don't put this elsewhere, oh my god. We need to just use a library
 * for these.
 */
export const map: MapFunction = (collection, iterateeFn) => {
  if (collection === null || collection === undefined) {
    return collection;
  }

  if (Array.isArray(collection)) {
    const result: unknown[] = [];
    for (let i = 0; i < collection.length; i++) {
      result.push(iterateeFn(collection[i], i, collection));
    }
    return result;
  }

  if (typeof collection === 'object') {
    const result: unknown[] = [];
    for (const i in collection) {
      if (Object.hasOwn(collection, i)) {
        result.push(iterateeFn(collection[i], i, collection));
      }
    }
    return result;
  }

  throw new Error(`map() can't iterate on type ${typeof collection}`);
};
