import { useRef } from 'react';

import { type BoxProps, computeBoxProps } from './Box';

type Props = Partial<{
  className: string;
  /** True is default, this fixes an ie thing */
  fixBlur: boolean;
  /** False by default. Good if you're fetching images on UIs that do not auto update. This will attempt to fix the 'x' icon 5 times. */
  fixErrors: boolean;
  /** Fill is default. */
  objectFit: 'contain' | 'cover';
  src: string;
}> &
  BoxProps;

// at least one of these is required

const maxAttempts = 5;

export function Image(props: Props) {
  const {
    fixBlur = true,
    fixErrors = false,
    objectFit = 'fill',
    src,
    ...rest
  } = props;
  const attempts = useRef(0);

  const computedProps = computeBoxProps(rest);
  computedProps.style = {
    ...computedProps.style,
    '-ms-interpolation-mode': fixBlur ? 'nearest-neighbor' : 'auto',
    objectFit,
  };

  return (
    <img
      onError={(event) => {
        if (fixErrors && attempts.current < maxAttempts) {
          const imgElement = event.currentTarget;

          setTimeout(() => {
            imgElement.src = `${src}?attempt=${attempts.current}`;
            attempts.current++;
          }, 1000);
        }
      }}
      src={src}
      {...computedProps}
      alt="dm icon"
    />
  );
}
