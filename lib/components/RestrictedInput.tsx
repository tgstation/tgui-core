import type { ComponentProps } from 'react';
import { NumberInput } from './NumberInput';

type Props = ComponentProps<typeof NumberInput>;

/**
 * ## RestrictedInput
 * Creates an input which rejects improper keys.
 *
 * @deprecated Use `NumberInput` instead.
 *
 * This will server as a wrapper for NumberInput until removal. This decision was
 * made because it's poor UX. Users should be allowed to type in whatever they
 * want, but have the UI notify them it's invalid after it's entered.
 */
export function RestrictedInput(props: Props) {
  return <NumberInput {...props} />;
}
