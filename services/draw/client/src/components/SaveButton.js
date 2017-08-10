import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import { saveDrawing, saveResultObservable } from '../services/drawing';

const initialState = {
  dialogOpen: false,
  name: '',
  saveResult: null
}
class ClearButton extends Component {

  state = initialState;

  componentWillMount() {
    this.saveResultSubsription = saveResultObservable
      .subscribe(saveResult => this.setState({ saveResult }));
  }
  componentWillUnmount() {
    this.saveResultSubsription.unsubscribe();
  }

  save(name) {
    saveDrawing(name);
    this.setState(initialState);
  }

  render() {
    const { dialogOpen, name, saveResult } = this.state;

    const openDialog = () => this.setState({ dialogOpen: true });
    const closeDialog = () => this.setState({ dialogOpen: false });

    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={closeDialog}
      />,
      <FlatButton
        label="Save"
        primary={true}
        disabled={!name}
        onTouchTap={() => this.save(name)}
      />,
    ];

    return (
      <span>
        <RaisedButton
          label="Save"
          primary={true}
          onTouchTap={openDialog}
        />
        <Dialog
          title={'Save drawing'}
          actions={actions}
          modal={false}
          open={dialogOpen}
          onRequestClose={closeDialog}
        >
          <TextField
            hintText="Name"
            value={name}
            onChange={(ev, val) => this.setState({ name: val })}
            onKeyUp={(e) => { if (e.keyCode === 13) { name && this.save(name); } }}
            ref={input => input && input.focus()}
          />
        </Dialog>
        <Snackbar
          open={!!saveResult && !saveResult.error}
          message={'Save successful!'}
          action="view"
          autoHideDuration={2000}
          onActionTouchTap={() => {}}
          onRequestClose={() => this.setState({ saveResult: null })}
        />
        <Snackbar
          open={!!saveResult && !!saveResult.error}
          message={'Save error'}
          action="retry"
          autoHideDuration={2000}
          onActionTouchTap={() => {}}
          onRequestClose={() => this.setState({ saveResult: null })}
        />
      </span>
    );
  }
}

export default ClearButton;
