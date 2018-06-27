# react-radial-progress-motion

> Radial progress with react-motion for transitions

[![NPM](https://img.shields.io/npm/v/react-radial-progress-motion.svg)](https://www.npmjs.com/package/react-radial-progress-motion) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-radial-progress-motion
```

## Usage

```jsx
import React, { Component } from 'react'

import RadialProgress from 'react-radial-progress-motion'

class MyComponent extends Component {
  render () {
    return (
      <RadialProgress  />
    )
  }
}
```

## Props
const strokeWidth = this.props.strokeWidth || 10;
const trackWidth = this.props.trackWidth || strokeWidth;
const preIndWidth = this.props.preIndWidth || strokeWidth;
const radius = 50 - (strokeWidth/2);
const dashArray = (2 * Math.PI * radius);
const indColor = this.props.indColor || '#a83ae7';
const trackColor = this.props.trackColor || '#e3e3e3';
const preIndColor = this.props.preIndColor || '#efefef';
const endCaps = this.props.endCaps || 'round';
const value = this.props.value || 100;
const springParams =  this.props.spring || {stiffness: 170, damping: 26};

Prop            | Input
----------------|---------
`value`         | Percentage of indicated progress `0-100` (`25`, `30`, `99`, etc). Defaults to `0`
`width`         | width in `px` or `%` of radial meter (`100px`, `100%`)
`startingPoint` | `top`, `bottom`, `left`, `right`, or degrees, (`-90`, `180`, `270`). Defaults to `top`

## License

MIT © [apttap](https://github.com/apttap)
