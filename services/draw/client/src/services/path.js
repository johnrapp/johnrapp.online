import uuid from 'uuid/v4';
import { putPathPoint } from '../services/drawing';

export default class DrawingPath {
    constructor(point, color) {
        this.id = uuid();
        this.color = color;
        putPathPoint(this.id, point, color);
    }

    append(point) {
        putPathPoint(this.id, point, this.color);
    }
}