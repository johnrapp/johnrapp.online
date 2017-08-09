import uuid from 'uuid/v4';
import { beginPath, appendPoint } from '../services/drawing';

export default class DrawingPath {
    constructor(point) {
        this.id = uuid();
        beginPath(this.id, point);
    }

    append(point) {
        appendPoint(this.id, point);
    }
}