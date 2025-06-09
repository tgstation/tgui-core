/**
 * Mocked act function from tgui.
 *
 * ### Making a mock backend
 *
 * Run your game in tgui-dev in order to get the backend state of the UI.
 * Copy the entire "data" field.
 *
 * You can then use this to mock game data in a ui - just create a useBackend
 * function that returns the data and the above act().
 *
 * Example:
 *
 * ```ts
 * import { act } from '../act';
 *
 * const data = {
 *  powered: 1,
 *  charge: 100,
 * }; // This is the copied data
 *
 * export function useBackend() {
 *   return {
 *     act,
 *     data,
 *   };
 * }
 * ```
 *
 * You're not required to, but putting the mocked useBackend function in a
 * `backend.ts` file means you won't have to change the import paths as much.
 */
export function act(str: string, obj?: Record<string, any>) {
  console.log(str, obj);
}
