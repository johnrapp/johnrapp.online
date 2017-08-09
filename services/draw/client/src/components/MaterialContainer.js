import React, { Component } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class MaterialContainer extends Component {
  render() {
    const { children } = this.props;
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            { children }
        </MuiThemeProvider>
    );
  }
}

export default MaterialContainer;
