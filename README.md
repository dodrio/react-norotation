# react-norotation

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Dependency Status](https://img.shields.io/david/m31271n/react-norotation.svg)](#)
[![DevDependency Status](https://img.shields.io/david/m31271n/react-norotation.svg)](#)
[![Travis Build Status](https://img.shields.io/travis/m31271n/react-norotation.svg)](#)
[![NPM Downloads](https://img.shields.io/npm/dm/react-norotation.svg)](#)


> Do not rotate your device, ok?

## Install

```
$ npm install react-norotation
```

## Usage

```jsx
import React from 'react';
import Norotation from 'react-norotation';

class App extends React.Component {
  render() {
    return <Norotation content="testing message" />
  }
}
```

## Available Props

| props     | description           |
| --------- | --------------------- |
| `content` | content will be shown |
