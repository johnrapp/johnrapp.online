function computedDimensions(element) {
    const styles = getComputedStyle(element);
    const dimensionInPx = string => +string.slice(0, -('px'.length));
    return {
      width: dimensionInPx(styles.width),
      height: dimensionInPx(styles.height)
    };
}
function relativeCoordinates({ width, height }, absoluteX, absoluteY) {
  return { x: absoluteX / width, y: absoluteY / height };
}

export function relativeMouseCoordinates(event) {
  const target = event.target;
  const absoluteX = event.pageX - target.offsetLeft;
  const absoluteY = event.pageY - target.offsetTop;

  return relativeCoordinates(computedDimensions(target), absoluteX, absoluteY)
}

export function relativeTouchCoordinates(event) {
  const target = event.target;
  const absoluteX = event.touches[0].pageX - target.offsetLeft;
  const absoluteY = event.touches[0].pageY - target.offsetTop;

  return relativeCoordinates(computedDimensions(target), absoluteX, absoluteY)
}