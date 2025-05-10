import createFuzzySearch from '@nozbe/microfuzz';
import { useCallback, useState } from 'react';

interface UseFuzzySearchProps<T> {
  /** An input array to match */
  searchArray: T[];
  /**
   * The matching strategy to use. `off` - don't use fuzzy search.
   * `smart` - ignore low density matches. `agressive` - accept
   * any match avaliable.
   */
  matchStrategy?: 'off' | 'smart' | 'aggressive';
  /** The input string to match */
  getSearchString: (item: T) => string;
}

/**
 * A simple hook prooviding fuzzy searching - approximate rather
 * than exact pattern matching.
 */
export function useFuzzySearch<T>({
  searchArray,
  matchStrategy = 'smart',
  getSearchString,
}: UseFuzzySearchProps<T>) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<T[]>([]);

  const fuzzySearch = useCallback(
    createFuzzySearch(searchArray, {
      getText: (item: T) => [getSearchString(item)],
      strategy: matchStrategy,
    }),
    [searchArray, getSearchString],
  );

  const handleSearch = (value: string) => {
    setQuery(value);

    if (value.trim() === '') {
      setResults([]);
      return;
    }

    const searchResults = fuzzySearch(value);
    setResults(searchResults.map((result) => result.item));
  };

  return {
    query,
    setQuery: handleSearch,
    results,
  };
}
