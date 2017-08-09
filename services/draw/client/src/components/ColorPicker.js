import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import pathColors from '../services/path-colors';

class ColorPicker extends Component {
  state = {
    open: false,
    anchorEl: null
  };

  handleOpen = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    const { pathColor, onPathColorChange } = this.props;
      return (
        <div style={{ display: 'inline-block', marginLeft: 10 }}>
          <RaisedButton
            onTouchTap={this.handleOpen}
            backgroundColor={pathColor}
            label={'Color'}
          />
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
            <Menu>
              {pathColors.map(color => (
                <MenuItem
                  key={color}
                  style={{ backgroundColor: color }}
                  onTouchTap={() => {
                    onPathColorChange(color);
                    this.setState({ open: false });
                  }}/>
              ))}
            </Menu>
          </Popover>
        </div>
      );
  }
}

export default ColorPicker;
