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
    createPath: (id, point, color) => {
        const path = createPath(point, color);
        drawing.paths[id] = path;
        return path;
    },
    updatePath: (id, point) => {
        const path = drawing.paths[id];
        path.points.push(point);
        return path;
    }
};

function createPath(point, color) {
    return { points: [point], color };
}