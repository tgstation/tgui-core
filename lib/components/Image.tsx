import { computeBoxProps } from '@common/ui';
import { useEffect, useRef } from 'react';
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
  /**
   * The image source.
   *
   * Use transparent base64 pixel if there is no src so we don't get a broken
   * image icon when using assets.
   */
  src: string;
}> &
  BoxProps;

const maxAttempts = 5;

type RetryState = {
  base: string;
  written: string;
  attempts: number;
};

/** Adds the attempt number to a url, keeping its query and fragment */
function withAttempt(url: string, attempt: number): string {
  const hash = url.indexOf('#');
  const head = hash < 0 ? url : url.slice(0, hash);
  const fragment = hash < 0 ? '' : url.slice(hash);
  const separator = head.includes('?') ? '&' : '?';
  return `${head}${separator}attempt=${attempt}${fragment}`;
}

const transparentImg =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

/**
 * ## Image
 *
 * A wrapper for the `<img>` element.
 *
 * It can attempt to fix broken images by fetching them again with `fixErrors`.
 *
 * It will also try to fix blurry images by rendering them pixelated.
 */
export function Image(props: Props) {
  const {
    fixBlur = true,
    fixErrors,
    objectFit = 'fill',
    src = transparentImg,
    ...rest
  } = props;
  const retry = useRef<RetryState>(null);
  const timer = useRef<NodeJS.Timeout>(null);

  const computedProps = computeBoxProps(rest);
  computedProps.style = {
    ...computedProps.style,
    imageRendering: fixBlur ? 'pixelated' : 'auto',
    objectFit,
  };

  function handleError(event: React.SyntheticEvent<HTMLImageElement>): void {
    const imgElement = event.currentTarget;
    const current = imgElement.getAttribute('src') || '';

    let state = retry.current;
    if (!state || (current !== state.base && current !== state.written)) {
      if (timer.current) clearTimeout(timer.current);
      timer.current = null;
      state = { base: current, written: current, attempts: 0 };
      retry.current = state;
    }

    if (!fixErrors || state.attempts >= maxAttempts) {
      if (timer.current) clearTimeout(timer.current);
      timer.current = null;
      return;
    }

    if (timer.current) return;

    timer.current = setTimeout(() => {
      timer.current = null;
      if (imgElement.getAttribute('src') !== state.written) return;
      state.written = withAttempt(state.base, state.attempts);
      state.attempts++;
      imgElement.src = state.written;
    }, 1000);
  }

  /** Cleans up any stray timers */
  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return (
    <img alt="dm icon" onError={handleError} src={src} {...computedProps} />
  );
}
