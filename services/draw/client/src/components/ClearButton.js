import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class ClearButton extends Component {

  state = { dialogOpen: false };

  render() {
    const { onClear } = this.props;
    const { dialogOpen } = this.state;

    const openDialog = () => this.setState({ dialogOpen: true });
    const closeDialog = () => this.setState({ dialogOpen: false });

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={closeDialog}
      />,
      <FlatButton
        label="Clear"
        primary={true}
        onTouchTap={() => {
          onClear();
          closeDialog();
        }}
      />,
    ];

    return (
      <span>
        <RaisedButton
          label="Clear"
          onTouchTap={openDialog} />
        <Dialog
          actions={actions}
          modal={false}
          open={dialogOpen}
          onRequestClose={closeDialog}
        >
          Are you sure you want to clear?
        </Dialog>
      </span>
    );
  }
}

export default ClearButton;
