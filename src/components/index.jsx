const React = require('react');

/**
 * Component that displays information about the plugins in the hadron app.
 */
class HadronPluginInfo extends React.Component {

  constructor(props) {
    super(props);
    this.plugins = global.hadronApp.packageManager.packages;
  }

  renderPluginActivated(plugin) {
    if (plugin.isActivated) {
      return (
        <div className="hadron-plugin-info-plugin-is-activated">
          <i className="fa fa-check-circle" />
        </div>
      );
    }
    return (
      <div className="hadron-plugin-info-plugin-is-not-activated">
        <i className="fa fa-times-circle" />
      </div>
    );
  }

  renderPluginError(plugin) {
    if (plugin.error) {
      return (
        <div className="hadron-plugin-info-plugin-error">
          <div className="hadron-plugin-info-plugin-error-message">
            {plugin.error.toString()}
          </div>
          <div className="hadron-plugin-info-plugin-error-stack">
            {plugin.error.stack}
          </div>
        </div>
      );
    }
  }

  renderPlugins() {
    return this.plugins.map((plugin) => {
      return (
        <div>
          <div className="hadron-plugin-info-plugin">
            {this.renderPluginActivated(plugin)}
            <div className="hadron-plugin-info-plugin-name">
              {plugin.metadata.name}
            </div>
            <div className="hadron-plugin-info-plugin-description">
              {plugin.metadata.description}
            </div>
          </div>
          {this.renderPluginError(plugin)}
        </div>
      );
    });
  }

  /**
   * Render the component.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <div className="hadron-plugin-info">
        {this.renderPlugins()}
      </div>
    );
  }
}

HadronPluginInfo.displayName = 'HadronPluginInfo';

module.exports = HadronPluginInfo;
