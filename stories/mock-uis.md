# Making a mock UI

## Step one: Folder structure.

Loose rule is to create a folder for your copied UI with the following items:

- A backend.ts file for the mock backend
- A ui.tsx file (or directory) to import the real UI
- A story file to list the item in storybook, eg Powerthing.stories.tsx

## Step two: Get the data

Run your game in tgui-dev in order to get the backend state of the UI.
Copy the entire "data" field. You can then use this to mock game data in a ui -
just create a useBackend function that returns the data and the above act().

Example:
`interfaces/PowerThing/backend.ts`

```ts
import { act } from "../act";
// This is a mocked function that just console logs data

const data = {
  powered: 1,
  charge: 100,
}; // This is the copied data

export function useBackend<TData>() {
  return {
    act,
    data: data as TData, // This just casts the return data to the type.
  };
}
```

Note: You're not required to, but putting the mocked useBackend function in a
`backend.ts` file means you won't have to change the import paths as much.

## Step three: Copy the UI

Generally easy. Copy your entire UI into the new interface folder. For single
files, I prefer ui.tsx. For folders, it can be named ui as well. This makes
the imports for mock UIs standard and simplified.

You will need to change the import locations for most items.

Caveats: If you want added interactivity for actions that normally change game
state, you will need some [react knowledge](https://react.dev/reference/react/useState)
to rewire it as local state.

## Step four: Wire up a story.

Almost done. Most of the time, this is exactly like the others. You must export
default storybook items. However, you can customize this to add in more UI elements,
see APC's lock switch for instance (since it takes an ID swipe).
