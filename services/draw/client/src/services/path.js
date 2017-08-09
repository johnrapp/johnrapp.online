import uuid from 'uuid/v4';
import { beginPath, appendPoint } from '../services/drawing';

export default class DrawingPath {
    constructor(point, color) {
        this.id = uuid();
        beginPath(this.id, point, color);
    }

    append(point) {
        appendPoint(this.id, point);
    }
}