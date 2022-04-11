import clsx from 'clsx';
import { P5Instance, ReactP5Wrapper, SketchProps } from 'react-p5-wrapper';

import styles from './styles.module.scss';

type Props = {
  sketch: (_p5: P5Instance) => void;
  center?: boolean;
} & SketchProps;

const P5Canvas = ({ sketch, center = false, ...props }: Props) => {
  return (
    <div className={clsx(styles.canvas, center && styles['is-center'])}>
      <ReactP5Wrapper sketch={sketch} {...props} />
    </div>
  );
};

export default P5Canvas;
