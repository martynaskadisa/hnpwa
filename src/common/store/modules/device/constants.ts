export const SET_ONLINE = 'device/SET_ONLINE';
export const SET_BREAKPOINT = 'device/SET_BREAKPOINT';
export const SET_SERVICE_WORKER_STATUS = 'device/SET_SERVICE_WORKER_STATUS';

export enum ServiceWorkerStatus {
  UpdateAvailable = 'update-available',
  Installed = 'installed',
  NotInstalled = 'not-installed',
  Error = 'error'
}

/**
 * ExtraSmall mobile
 * Small small tablet
 * Medium large tablet / small laptop
 * Large laptop / desktop
 * ExtraLarge desktop
 *
 */
export enum Breakpoint {
  ExtraSmall = 'extra-small',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  ExtraLarge = 'extra-large'
}

export const BREAKPOINTS = [
  {
    breakpoint: Breakpoint.ExtraSmall,
    min: null,
    max: 413
  },
  {
    breakpoint: Breakpoint.Small,
    min: 414,
    max: 767
  },
  {
    breakpoint: Breakpoint.Medium,
    min: 768,
    max: 1279
  },
  {
    breakpoint: Breakpoint.Large,
    min: 1280,
    max: 1599
  },
  {
    breakpoint: Breakpoint.ExtraLarge,
    min: 1600,
    max: null
  }
];
