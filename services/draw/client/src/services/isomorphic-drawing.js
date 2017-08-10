// From server implementation
export default drawing => {
    function createPath(point, color) {
        return { points: [point], color };
    }
    return {
        putPathPoint: (id, point, color) => {
            let path;
            if (id in drawing.paths) {
                path = drawing.paths[id];
                path.points.push(point);
            } else {
                path = createPath(point, color);
                drawing.paths[id] = path;
            }
            return path;
        }
    };
}