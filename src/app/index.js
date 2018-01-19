import './scss/main.scss';
import appConfig from './config';
import appRun from './run';
/** Modules */
import refreshTokenInterceptor from './modules/http-refresh-token';
import appLayoutModule from './modules/app-layout';
import dashboardModule from './modules/dashboard';
/** Services */
import envConfig from './services/config';
/** Directives */
import passwordInputDirective from './directives/showPass';

var app = angular.module('app', [
    'ui.router',
    'LocalStorageModule',
    'ui.bootstrap',
    'ngFileUpload',
    refreshTokenInterceptor,
    appLayoutModule,
    dashboardModule
]);

app
    .config(appConfig)
    .service('env', envConfig)
    .directive('inputPassword', passwordInputDirective)
    .run(appRun);
