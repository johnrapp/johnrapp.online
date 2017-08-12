import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import { brushSizeMin, brushSizeMax } from '../services/brush-sizes';

class BrushSizePicker extends Component {
  render() {
    const { brushSize, onBrushSizeChange } = this.props;
    return (
      <div style={{ display: 'inline-block', marginLeft: 10, verticalAlign: 'top'}}>
        <span>
          Brush size
        </span>
        <Slider
          min={brushSizeMin}
          max={brushSizeMax}
          step={1}
          sliderStyle={{
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 4
          }}
          value={brushSize}
          style={{
            width: 70
          }}
          onChange={(e, val) => onBrushSizeChange(val)}
        />
      </div>
    );
  }
}

export default BrushSizePicker;
