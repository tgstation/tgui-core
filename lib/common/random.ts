import { clamp } from './math';

/**
 * Returns random number between lowerBound exclusive and upperBound inclusive
 */
export function randomNumber(lowerBound: number, upperBound: number): number {
  return Math.random() * (upperBound - lowerBound) + lowerBound;
}

/**
 * Returns random integer between lowerBound exclusive and upperBound inclusive
 */
export function randomInteger(lowerBound: number, upperBound: number): number {
  const lower = Math.ceil(lowerBound);
  const upper = Math.floor(upperBound);
  return Math.floor(Math.random() * (upper - lower) + lower);
}

/**
 * Returns random array element
 */
export function randomPick<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Return 1 with probability P percent; otherwise 0
 */
export function randomProb(probability: number): boolean {
  const normalized = clamp(probability, 0, 100) / 100;
  return Math.random() <= normalized;
}
