# React Native Joystick

## TOC

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Types](#types)

## Installation

**NPM**

```shell
npm install korol-joystick
```

**YARN**

```shell
yarn add korol-joystick
```

## Usage

```js
import { KorolJoystick } from "korol-joystick";
```

```js
<KorolJoystick color="#06b6d4" radius={75} onMove={(data) => console.log(data)}>
```

## Props

### radius

Set the size radius of the container circle
The inside joystick radius is 1/3 of this size
Type: **Number**

### color

Set the color scheme of the joystick
The color of the container and the joystick is set based on this color with a set opacity.

type: **HEX Color Code**

### onMove, onStart, onStop

A callback function that has a [MoveJoystickEvent](#MoveJoystickEvent) as an argument.

type: **Function**

## Types

### MoveJoystickEvent

Event returned by the onMove, onStart and onStop callbacks.

```js
{
  type: "move" | "stop" | "start";
  position: {
    x: number;
    y: number;
  }
  force: number;
  angle: {
    radian: number;
    degree: number;
  }
}
```
