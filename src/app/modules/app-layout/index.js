import './app-layout.scss';
import appLayoutConfig from './app-layout.config';
import dashboardModule from '../dashboard';

export default angular.module('appLayoutModule', [
    dashboardModule,
]).config(appLayoutConfig)
  .name;
