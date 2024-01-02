export interface IReactNativeJoystickEvent {
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

export interface IReactNativeJoystickProps {
  onStart?: (e: IReactNativeJoystickEvent) => void;
  onMove?: (e: IReactNativeJoystickEvent) => void;
  onStop?: (e: IReactNativeJoystickEvent) => void;
  radius?: number;
  color?: string;
}
