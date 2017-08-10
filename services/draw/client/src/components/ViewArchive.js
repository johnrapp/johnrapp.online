import React, { Component } from 'react';
import Canvas from './Canvas';
import { getArchivedDrawings } from '../services/api';

class ViewApp extends Component {
  state = {
    drawings: null,
  };
  componentWillMount() {
    getArchivedDrawings().then(drawings => {
      this.setState({ drawings });
    });
  }
  render() {
    const { drawings } = this.state;
    if (!drawings) {
      return null;
    }

    return (
      <div className={'ViewArchive'}>
        {drawings.map(({ id, name, drawing }) => (
          <div style={{ width: 500 }}>
            <Canvas key={id} drawing={drawing} />
          </div>
        ))}
      </div>
    );
  }
}

export default ViewApp;
