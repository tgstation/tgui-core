import { KEY } from '../common/keys';
import type { BoxProps } from './Box';
import { NumberInput } from './NumberInput';

type Props = {
  value: number;
} & Partial<{
  allowFloats: boolean;
  autoFocus: boolean;
  autoSelect: boolean;
  disabled: boolean;
  fluid: boolean;
  maxValue: number | null;
  minValue: number | null;
  onBlur: (e: Event, value: number) => void;
  onChange: (e: Event, value: number) => void;
  onEnter: (e: Event, value: number) => void;
}> &
  BoxProps;

/**
 * ## RestrictedInput
 * Creates an input which rejects improper keys.
 *
 * @deprecated Use `NumberInput` instead.
 *
 * This will server as a wrapper for NumberInput until removal. This decision was
 * made because it's poor UX. Users should be allowed to type in whatever they
 * want, but have the UI notify them it's invalid after it's entered.
 *
 * It also gives a false sense of security. It's just an annoying input.
 */
export function RestrictedInput(props: Props) {
  const { minValue, maxValue, onChange, onEnter, onBlur, ...rest } = props;

  return (
    <NumberInput
      {...rest}
      minValue={minValue ?? 0}
      maxValue={maxValue ?? Number.POSITIVE_INFINITY}
      onChange={(value) => {
        onChange?.({} as Event, value);
      }}
      onKeyDown={(e) => {
        if (e.key === KEY.Enter) {
          // @ts-expect-error
          onEnter?.({} as Event, Number(e.currentTarget.value));
        }
      }}
      step={1}
    />
  );
}
