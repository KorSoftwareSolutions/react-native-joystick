export const calcDistance = (p1, p2) => {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
};
/**
 *
 * @param p1
 * @param p2
 * @returns Angle in degrees
 */
export const calcAngle = (p1, p2) => {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const rawAngle = radiansToDegrees(Math.atan2(dy, dx));
    if (rawAngle < 0)
        return 180 - Math.abs(rawAngle);
    else
        return rawAngle + 180;
};
export const degreesToRadians = (a) => {
    return a * (Math.PI / 180);
};
export const radiansToDegrees = (a) => {
    return a * (180 / Math.PI);
};
export const findCoord = (position, distance, angle) => {
    const b = { x: 0, y: 0 };
    angle = degreesToRadians(angle);
    b.x = position.x + distance * Math.cos(angle);
    b.y = position.y + distance * Math.sin(angle);
    if (b.y < 0)
        b.y += 150;
    return b;
};
//# sourceMappingURL=utils.js.map