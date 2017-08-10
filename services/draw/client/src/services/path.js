import uuid from 'uuid/v4';
import { putPathPoint } from '../services/drawing';

export default class DrawingPath {
    constructor(point, color, brushSize) {
        this.id = uuid();
        this.color = color;
        this.brushSize = brushSize;
        putPathPoint(this.id, point, color, brushSize);
    }

    append(point) {
        putPathPoint(this.id, point, this.color, this.brushSize);
    }
}