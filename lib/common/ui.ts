import type { BoxProps } from 'lib/components/Box';
import { CSS_COLORS } from './constants';
import { classes } from './react';

/**
 * Coverts our rem-like spacing unit into a CSS unit.
 */
export function unit(value: unknown) {
  if (typeof value === 'string') {
    // Transparently convert pixels into rem units
    if (value.endsWith('px')) {
      return `${Number.parseFloat(value) / 12}rem`;
    }
    return value;
  }
  if (typeof value === 'number') {
    return `${value}rem`;
  }
}

/**
 * Same as `unit`, but half the size for integers numbers.
 */
export function halfUnit(value: unknown): string | undefined {
  if (typeof value === 'string') {
    return unit(value);
  }
  if (typeof value === 'number') {
    return unit(value * 0.5);
  }
}

function isColorCode(str: unknown): boolean {
  return !isColorClass(str);
}

function isColorClass(str: unknown): boolean {
  return typeof str === 'string' && CSS_COLORS.includes(str as any);
}

const mapRawPropTo = (attrName) => (style, value) => {
  if (typeof value === 'number' || typeof value === 'string') {
    style[attrName] = value;
  }
};

const mapUnitPropTo = (attrName, unit) => (style, value) => {
  if (typeof value === 'number' || typeof value === 'string') {
    style[attrName] = unit(value);
  }
};

const mapBooleanPropTo = (attrName, attrValue) => (style, value) => {
  if (value) {
    style[attrName] = attrValue;
  }
};

const mapDirectionalUnitPropTo = (attrName, unit, dirs) => (style, value) => {
  if (typeof value === 'number' || typeof value === 'string') {
    for (let i = 0; i < dirs.length; i++) {
      style[attrName + dirs[i]] = unit(value);
    }
  }
};

const mapColorPropTo = (attrName) => (style, value) => {
  if (isColorCode(value)) {
    style[attrName] = value;
  }
};

// String / number props
export const stringStyleMap = {
  align: mapRawPropTo('textAlign'),
  bottom: mapUnitPropTo('bottom', unit),
  fontFamily: mapRawPropTo('fontFamily'),
  fontSize: mapUnitPropTo('fontSize', unit),
  fontWeight: mapRawPropTo('fontWeight'),
  height: mapUnitPropTo('height', unit),
  left: mapUnitPropTo('left', unit),
  maxHeight: mapUnitPropTo('maxHeight', unit),
  maxWidth: mapUnitPropTo('maxWidth', unit),
  minHeight: mapUnitPropTo('minHeight', unit),
  minWidth: mapUnitPropTo('minWidth', unit),
  opacity: mapRawPropTo('opacity'),
  overflow: mapRawPropTo('overflow'),
  overflowX: mapRawPropTo('overflowX'),
  overflowY: mapRawPropTo('overflowY'),
  position: mapRawPropTo('position'),
  right: mapUnitPropTo('right', unit),
  textAlign: mapRawPropTo('textAlign'),
  top: mapUnitPropTo('top', unit),
  verticalAlign: mapRawPropTo('verticalAlign'),
  width: mapUnitPropTo('width', unit),

  lineHeight: (style, value) => {
    if (typeof value === 'number') {
      style.lineHeight = value;
    } else if (typeof value === 'string') {
      style.lineHeight = unit(value);
    }
  },
  // Margin
  m: mapDirectionalUnitPropTo('margin', halfUnit, [
    'Top',
    'Bottom',
    'Left',
    'Right',
  ]),
  mb: mapUnitPropTo('marginBottom', halfUnit),
  ml: mapUnitPropTo('marginLeft', halfUnit),
  mr: mapUnitPropTo('marginRight', halfUnit),
  mt: mapUnitPropTo('marginTop', halfUnit),
  mx: mapDirectionalUnitPropTo('margin', halfUnit, ['Left', 'Right']),
  my: mapDirectionalUnitPropTo('margin', halfUnit, ['Top', 'Bottom']),
  // Padding
  p: mapDirectionalUnitPropTo('padding', halfUnit, [
    'Top',
    'Bottom',
    'Left',
    'Right',
  ]),
  pb: mapUnitPropTo('paddingBottom', halfUnit),
  pl: mapUnitPropTo('paddingLeft', halfUnit),
  pr: mapUnitPropTo('paddingRight', halfUnit),
  pt: mapUnitPropTo('paddingTop', halfUnit),
  px: mapDirectionalUnitPropTo('padding', halfUnit, ['Left', 'Right']),
  py: mapDirectionalUnitPropTo('padding', halfUnit, ['Top', 'Bottom']),
  // Color props
  color: mapColorPropTo('color'),
  textColor: mapColorPropTo('color'),
  backgroundColor: mapColorPropTo('backgroundColor'),
} as const;

// Boolean props
export const booleanStyleMap = {
  bold: mapBooleanPropTo('fontWeight', 'bold'),
  fillPositionedParent: (style, value) => {
    if (value) {
      style.position = 'absolute';
      style.top = 0;
      style.bottom = 0;
      style.left = 0;
      style.right = 0;
    }
  },
  inline: mapBooleanPropTo('display', 'inline-block'),
  italic: mapBooleanPropTo('fontStyle', 'italic'),
  nowrap: mapBooleanPropTo('whiteSpace', 'nowrap'),
  preserveWhitespace: mapBooleanPropTo('whiteSpace', 'pre-wrap'),
} as const;

export function computeBoxProps(props): Record<string, any> {
  const computedProps: Record<string, any> = {};
  const computedStyles: Record<string, string | number> = {};

  // Compute props
  for (const propName of Object.keys(props)) {
    if (propName === 'style') {
      continue;
    }

    const propValue = props[propName];

    const mapPropToStyle =
      stringStyleMap[propName] || booleanStyleMap[propName];

    if (mapPropToStyle) {
      mapPropToStyle(computedStyles, propValue);
    } else {
      computedProps[propName] = propValue;
    }
  }

  // Merge computed styles and any directly provided styles
  computedProps.style = { ...computedStyles, ...props.style };

  return computedProps;
}

export function computeBoxClassName(props: BoxProps): string {
  const color = props.textColor || props.color;
  const { backgroundColor } = props;

  return classes([
    isColorClass(color) && `color-${color}`,
    isColorClass(backgroundColor) && `color-bg-${backgroundColor}`,
  ]);
}