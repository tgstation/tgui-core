import { Component, type RefObject, createRef } from 'react';
import { zip } from '../common/collections';
import { Box, type BoxProps } from './Box';

type Props = {
  data: number[][];
} & Partial<{
  fillColor: string;
  rangeX: [number, number];
  rangeY: [number, number];
  strokeColor: string;
  strokeWidth: number;
}> &
  BoxProps;

type State = {
  viewBox: [number, number];
};

type Point = number[];
type Range = [number, number];

function normalizeData(
  data: Point[],
  scale: number[],
  rangeX?: Range,
  rangeY?: Range,
) {
  if (data.length === 0) {
    return [];
  }

  const zipped = zip(...data);

  const min = zipped.map((p) => Math.min(...p));
  const max = zipped.map((p) => Math.max(...p));

  if (rangeX !== undefined) {
    min[0] = rangeX[0];
    max[0] = rangeX[1];
  }

  if (rangeY !== undefined) {
    min[1] = rangeY[0];
    max[1] = rangeY[1];
  }

  const normalized = data.map((point) =>
    zip(point, min, max, scale).map(
      ([value, min, max, scale]) => ((value - min) / (max - min)) * scale,
    ),
  );

  return normalized;
}

function dataToPolylinePoints(data) {
  let points = '';
  for (let i = 0; i < data.length; i++) {
    const point = data[i];
    points += `${point[0]},${point[1]} `;
  }
  return points;
}

class LineChart extends Component<Props> {
  ref: RefObject<HTMLDivElement>;
  state: State;

  constructor(props: Props) {
    super(props);
    this.ref = createRef();
    this.state = {
      // Initial guess
      viewBox: [600, 200],
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const element = this.ref.current;
    if (!element) {
      return;
    }
    this.setState({
      viewBox: [element.offsetWidth, element.offsetHeight],
    });
  };

  render() {
    const {
      data = [],
      rangeX,
      rangeY,
      fillColor = 'none',
      strokeColor = '#ffffff',
      strokeWidth = 2,
      ...rest
    } = this.props;
    const { viewBox } = this.state;
    const normalized = normalizeData(data, viewBox, rangeX, rangeY);
    // Push data outside viewBox and form a fillable polygon
    if (normalized.length > 0) {
      const first = normalized[0];
      const last = normalized[normalized.length - 1];
      normalized.push([viewBox[0] + strokeWidth, last[1]]);
      normalized.push([viewBox[0] + strokeWidth, -strokeWidth]);
      normalized.push([-strokeWidth, -strokeWidth]);
      normalized.push([-strokeWidth, first[1]]);
    }
    const points = dataToPolylinePoints(normalized);
    const divProps = { ...rest, className: '', ref: this.ref };

    return (
      <Box position="relative" {...rest}>
        <Box {...divProps}>
          <svg
            viewBox={`0 0 ${viewBox[0]} ${viewBox[1]}`}
            preserveAspectRatio="none"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflow: 'hidden',
            }}
          >
            <title>chart</title>
            <polyline
              transform={`scale(1, -1) translate(0, -${viewBox[1]})`}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              points={points}
            />
          </svg>
        </Box>
      </Box>
    );
  }
}

export const Chart = {
  Line: LineChart,
};
