# React Native Joystick

[![NPM](https://nodei.co/npm/korol-joystick.png)](https://nodei.co/npm/korol-joystick/)

[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/client)


## TOC

- [Installation](#installation)
- [Preview](#preview)
- [Usage](#usage)
- [Props](#props)
- [Types](#types)

## Installation



#### PreInstallation

```shell
yarn add react-native-gesture-handler
```

**NPM**

```shell
npm install korol-joystick
```

**YARN**

```shell
yarn add korol-joystick
```

## Preview

![React Native Axis Pad: Screen Preview](./assets/preview.gif)


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

A callback function with an argument of type [MoveJoystickEvent](#MoveJoystickEvent).

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
