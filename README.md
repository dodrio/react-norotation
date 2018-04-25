# react-norotation

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Dependency Status](https://img.shields.io/david/m31271n/react-norotation.svg)](#)
[![DevDependency Status](https://img.shields.io/david/m31271n/react-norotation.svg)](#)
[![Travis Build Status](https://img.shields.io/travis/m31271n/react-norotation.svg)](#)
[![NPM Downloads](https://img.shields.io/npm/dm/m31271n/react-norotation.svg)](#)

> Do not rotate your device, ok?

## Install

```
$ npm install @m31271n/react-norotation
```

## Usage

```jsx
import React from 'react';
import NoRotation from '@m31271n/react-norotation';

class App extends React.Component {
  onPortrait = () => {};

  onLandscape = () => {};

  render() {
    return (
      <NoRotation
        desiredOrientation="portrait"
        adjustMethod="auto"
        onPortrait={this.onPortrait}
        onLandscape={this.onLandscape}
      >
        // children
      </NoRotation>
    );
  }
}
```

## Available Props

| props                | type     | description                                                                                                            |
| -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| `desiredOrientation` | String   | Orientation you desired. Available value: "portrait" / "landscape".                                                    |
| `adjustMethod`       | String   | Ajust method to use when current orientation is not equal to `desiredORientation`. Available value: "manual" / "auto". |
| `onPortrait`         | Function | Callback executed when current orienttation switchs to portrait.                                                       |
| `onLandscape`        | Function | Callback executed when current orienttation switchs to landscape.                                                      |

## TODO

* fix broken test
