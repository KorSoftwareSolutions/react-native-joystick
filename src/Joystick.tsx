import React, { useState } from "react";
import { Platform, View } from "react-native";
import * as utils from "./utils";
import {
  Gesture,
  GestureDetector,
  GestureStateChangeEvent,
  GestureTouchEvent,
} from "react-native-gesture-handler";

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

const AxisPad: React.FC<Props> = (props) => {
  const { onStart, onMove, onStop, color = "#000000", radius = 150 } = props;

  const wrapperRadius = radius;
  const nippleRadius = wrapperRadius / 3;

  const [x, setX] = useState(wrapperRadius - nippleRadius);
  const [y, setY] = useState(wrapperRadius - nippleRadius);

  const handleTouchMove = (event: GestureTouchEvent) => {
    const e = event.changedTouches[0];
    const fingerX = e.x;
    let fingerY = e.y;

    if (Platform.OS === "web") {
      // y axis is inverted on web
      fingerY = 100 - fingerY + nippleRadius * 2;
    }

    let coordinates = {
      x: fingerX - nippleRadius,
      y: fingerY - nippleRadius,
    };

    const angle = utils.calcAngle(
      { x: fingerX, y: fingerY },
      { x: wrapperRadius, y: wrapperRadius }
    );

    let dist = utils.calcDistance(
      { x: wrapperRadius, y: wrapperRadius },
      { x: fingerX, y: fingerY }
    );

    const force = dist / (nippleRadius * 2);

    dist = Math.min(dist, wrapperRadius);
    if (dist === wrapperRadius) {
      coordinates = utils.findCoord(
        { x: wrapperRadius, y: wrapperRadius },
        dist,
        angle
      );
      coordinates = {
        x: coordinates.x - nippleRadius,
        y: coordinates.y - nippleRadius,
      };
    }
    setX(coordinates.x);
    setY(coordinates.y);

    onMove &&
      onMove({
        position: coordinates,
        angle: {
          radian: utils.degreesToRadians(angle),
          degree: angle,
        },
        force,
        type: "move",
      });
  };

  const handleTouchEnd = (e: GestureStateChangeEvent<any>) => {
    setX(wrapperRadius - nippleRadius);
    setY(wrapperRadius - nippleRadius);
    onStop &&
      onStop({
        force: 0,
        position: {
          x: 0,
          y: 0,
        },
        angle: {
          radian: 0,
          degree: 0,
        },
        type: "stop",
      });
  };

  const handleTouchStart = (e: GestureStateChangeEvent<any>) => {
    onStart &&
      onStart({
        force: 0,
        position: {
          x: 0,
          y: 0,
        },
        angle: {
          radian: 0,
          degree: 0,
        },
        type: "start",
      });
  };

  const panGesture = Gesture.Pan()
    .onStart(handleTouchStart)
    .onEnd(handleTouchEnd)
    .onTouchesMove(handleTouchMove);

  return (
    <GestureDetector gesture={panGesture}>
      <View
        // onTouchMove={handleTouchMove}
        // onTouchEnd={handleTouchEnd}
        // onTouchStart={handleTouchStart}
        style={[
          {
            width: 2 * radius,
            height: 2 * radius,
            borderRadius: radius,
            backgroundColor: `${color}55`,
          },
          {
            transform: [{ rotateX: "180deg" }],
          },
        ]}
      >
        <View
          pointerEvents="none"
          style={[
            {
              height: 2 * nippleRadius,
              width: 2 * nippleRadius,
              borderRadius: nippleRadius,
              backgroundColor: `${color}bb`,
            },
            {
              position: "absolute",
              transform: [
                {
                  translateX: x,
                },
                { translateY: y },
              ],
            },
          ]}
        />
      </View>
    </GestureDetector>
  );
};

export default AxisPad;
