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

export interface IState {
  online: boolean;
  breakpoint: Breakpoint;
  serviceWorkerStatus: ServiceWorkerStatus;
}
