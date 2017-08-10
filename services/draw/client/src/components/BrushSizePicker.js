import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import { brushSizeMin, brushSizeMax } from '../services/brush-sizes';

class BrushSizePicker extends Component {
  render() {
    const { brushSize, onBrushSizeChange } = this.props;
    return (
      <div style={{ display: 'inline-block', marginLeft: 10 }}>
        <span>
          Brush size
        </span>
        <Slider
          min={brushSizeMin}
          max={brushSizeMax}
          step={1}
          value={brushSize}
          onChange={(e, val) => onBrushSizeChange(val)}
        />
      </div>
    );
  }
}

export default BrushSizePicker;
