import { useRef } from 'react';
import { computeBoxProps } from '../common/ui';
import type { BoxProps } from './Box';

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

const maxAttempts = 5;

/**
 * ## Image
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
    '-ms-interpolation-mode': fixBlur ? 'nearest-neighbor' : 'auto',
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
        'https://e7.pngegg.com/pngimages/444/845/png-clipart-shrek-shrek-thumbnail.png'
      }
      {...computedProps}
      alt="dm icon"
    />
  );
}
