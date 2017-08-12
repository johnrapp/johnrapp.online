const emptyDrawing = () => ({
    paths: {}
});

let drawing = emptyDrawing();

module.exports = {
    getDrawing: () => {
        return drawing;
    },
    clearDrawing: () => {
        drawing = emptyDrawing();
        return drawing;
    },
    putPathPoint: (id, point, color, brushSize) => {
        let path;
        if (id in drawing.paths) {
            path = drawing.paths[id];
            path.points.push(point);
            ensureCorrectOrder(path.points);
        } else {
            path = createPath(point, color, brushSize);
            drawing.paths[id] = path;
        }
        return path;
    },
};

function createPath(point, color, brushSize) {
    return { points: [point], color, brushSize };
}

function ensureCorrectOrder(points) {
    points.sort((a, b) => a.numberInSeries - b.numberInSeries);
}