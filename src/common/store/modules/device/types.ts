import { Breakpoint, ServiceWorkerStatus } from './constants';

export interface IState {
  online: boolean;
  breakpoint: Breakpoint;
  serviceWorkerStatus: ServiceWorkerStatus;
}
