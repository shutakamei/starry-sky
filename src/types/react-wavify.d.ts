declare module 'react-wavify' {
  import type { ComponentType } from 'react';

  interface WaveOptions {
    height?: number;
    amplitude?: number;
    speed?: number;
    points?: number;
  }

  interface WaveProps {
    className?: string;
    fill?: string;
    paused?: boolean;
    options?: WaveOptions;
    style?: React.CSSProperties;
  }

  const Wave: ComponentType<WaveProps>;

  export default Wave;
}
