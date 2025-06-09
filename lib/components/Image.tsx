import { computeBoxProps } from '@common/ui';
import { useRef } from 'react';
import type { BoxProps } from './Box';

type Props = Partial<{
  /** True is default, this fixes DM icon rendering issues */
  fixBlur: boolean;
  /**
   * False by default. Good if you're fetching images on UIs that do not auto
   * update. This will attempt to fix the 'x' icon 5 times.
   */
  fixErrors: boolean;
  /** Fill is default. */
  objectFit: 'contain' | 'cover';
  src: string;
}> &
  BoxProps;

const maxAttempts = 5;

/**
 * ## Image
 *
 * A wrapper for the `<img>` element.
 *
 * By default, it will attempt to fix broken images by fetching them again.
 *
 * It will also try to fix blurry images by rendering them pixelated.
 */
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
    imageRendering: fixBlur ? 'pixelated' : 'auto',
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
      src={
        src ||
        /** Use transparent base64 pixel if there is no src. So we don't get broken image icon when using assets */
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
      }
      {...computedProps}
      alt="dm icon"
    />
  );
}
