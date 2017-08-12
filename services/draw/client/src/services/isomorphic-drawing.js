// From server implementation
export default drawing => {
    function createPath(point, color, brushSize) {
        return { points: [point], color, brushSize };
    }
    return {
        putPathPoint: (id, point, color, brushSize) => {
            let path;
            if (id in drawing.paths) {
                path = drawing.paths[id];
                path.points.push(point);
            } else {
                path = createPath(point, color, brushSize);
                drawing.paths[id] = path;
            }
            return path;
        }
    };
}
