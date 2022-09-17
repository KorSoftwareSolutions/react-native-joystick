import React from "react";
interface JoystickUpdateEvent {
    type: "move" | "stop" | "start";
    position: {
        x: number;
        y: number;
    };
    force: number;
    angle: {
        radian: number;
        degree: number;
    };
}
interface Props {
    onStart?: (e: JoystickUpdateEvent) => void;
    onMove?: (e: any) => void;
    onStop?: (e: JoystickUpdateEvent) => void;
    radius?: number;
    color?: string;
}
declare const AxisPad: React.FC<Props>;
export default AxisPad;
