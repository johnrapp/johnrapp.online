import React, { Component } from 'react';
import { brushSizeMax } from '../services/brush-sizes';

class BrushIndicator extends Component {
  render() {
    const { brushColor, brushSize } = this.props;
    const containerStyle = {
      display: 'inline-flex',
      alignItems: 'center',
      marginLeft: 16,
      justifyContent: 'center',
      verticalAlign: 'text-bottom',
      width: brushSizeMax,
      height: brushSizeMax,
    };
    return (
      <div style={containerStyle}>
        <div style={{
          display: 'inline-block',
          width: brushSize,
          height: brushSize,
          backgroundColor: brushColor,
          borderRadius: '50%'
          }}
        />
      </div>
    );
  }
}

export default BrushIndicator;
