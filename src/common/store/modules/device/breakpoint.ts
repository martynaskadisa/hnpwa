import { Breakpoint, BREAKPOINTS } from './constants';

export const matchBreakpoint = ({
  min,
  max
}: {
  min: number | null;
  max: number | null;
}): boolean => {
  if (min && max) {
    return window.matchMedia(`(min-width: ${min}px) and (max-width: ${max}px)`)
      .matches;
  }

  if (min && !max) {
    return window.matchMedia(`(min-width: ${min}px)`).matches;
  }

  if (!min && max) {
    return window.matchMedia(`(max-width: ${max}px)`).matches;
  }

  // tslint:disable-next-line:no-console
  console.error('`min` or `max` was not provided to match breakpoint', {
    min,
    max
  });

  return false;
};

export const getBreakpoint = (): Breakpoint => {
  const result = BREAKPOINTS.find(point => matchBreakpoint(point));

  if (!result) {
    // tslint:disable-next-line:no-console
    console.error(
      'Failed to detect device breakpoint, fallbacking to extra small'
    );

    return Breakpoint.ExtraSmall;
  }

  return result.breakpoint;
};
