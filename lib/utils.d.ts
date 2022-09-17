export declare const calcDistance: (p1: {
    x: number;
    y: number;
}, p2: {
    x: number;
    y: number;
}) => number;
/**
 *
 * @param p1
 * @param p2
 * @returns Angle in degrees
 */
export declare const calcAngle: (p1: {
    x: number;
    y: number;
}, p2: {
    x: number;
    y: number;
}) => number;
export declare const degreesToRadians: (a: number) => number;
export declare const radiansToDegrees: (a: number) => number;
export declare const findCoord: (position: {
    x: number;
    y: number;
}, distance: number, angle: number) => {
    x: number;
    y: number;
};
