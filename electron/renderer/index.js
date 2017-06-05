require('babel-register')({ extensions: ['.jsx'] });

const app = require('hadron-app');
const React = require('react');
const ReactDOM = require('react-dom');
const AppRegistry = require('hadron-app-registry');

const { DataServiceStore, DataServiceActions } = require('mongodb-data-service');
const Connection = require('mongodb-connection-model');

/**
 * Boilerplate.
 */
const CollectionStore = require('./stores/collection-store');
const DeploymentStateStore = require('./stores/deployment-state-store');

const HadronPluginInformationComponent = require('../../lib/components');
const HadronPluginInformationStore = require('../../lib/stores');
const HadronPluginInformationActions = require('../../lib/actions');

// const CONNECTION = new Connection({
  // hostname: '127.0.0.1',
  // port: 27018,
  // ns: 'hadron-plugin-information',
  // mongodb_database_name: 'admin'
// });

global.hadronApp = app;
global.hadronApp.appRegistry = new AppRegistry();
global.hadronApp.appRegistry.registerStore('App.CollectionStore', CollectionStore);
global.hadronApp.appRegistry.registerStore('DeploymentAwareness.DeploymentStateStore', DeploymentStateStore);
global.hadronApp.appRegistry.registerStore('HadronPluginInformation.Store', HadronPluginInformationStore);
global.hadronApp.appRegistry.registerAction('HadronPluginInformation.Actions', HadronPluginInformationActions);

// const dataService = new DataService(CONNECTION);
// dataService.onDataServiceInitialized(dataService);
// dataService.connect((error, ds) => {
  // global.hadronApp.dataService = ds;
  global.hadronApp.appRegistry.onActivated();
  // global.hadronApp.appRegistry.onConnected(error, ds);
// });

ReactDOM.render(
  React.createElement(HadronPluginInformationComponent),
  document.getElementById('container')
);
