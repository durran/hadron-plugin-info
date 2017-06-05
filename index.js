const HadronPluginInfo = require('./lib/components');

/**
 * A sample role for the component.
 */
const ROLE = {
  name: 'Plugins',
  component: HadronPluginInfo
};

/**
 * Activate all the components in the Hadron Plugin Information package.
 */
function activate(appRegistry) {
  appRegistry.registerRole('Instance.Tab', ROLE);
}

/**
 * Deactivate all the components in the Hadron Plugin Information package.
 */
function deactivate(appRegistry) {
  appRegistry.deregisterRole('Instance.Tab', ROLE);
}

module.exports.activate = activate;
module.exports.deactivate = deactivate;
