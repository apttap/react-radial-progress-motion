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

Prop            | Input
----------------|---------
`value`         | Integer. Percentage of indicated progress `0-100` (`25`, `30`, `99`, etc). Defaults to `0`
`width`         | String. Width in `px` or `%` of radial meter (`100px`, `100%`). Defaults to `100%`
`startingPoint` | String. The 0 value start point; `top`, `bottom`, `left`, `right`, or degrees, (`-90`, `180`, `270`). Defaults to `top`
`spring`        | Object. A react-motion spring config object e.g. `{stiffness: 120, damping: 17}`. Defaults to `{stiffness: 170, damping: 26}`. Please see [react-motion documentation](https://github.com/chenglou/react-motion) for full options.
`indWidth`   | Integer. width of line-stroke of indicator bar `1-50`, defaults to `10`
`indColor`   | String. color of indicator bar in hex, rgb, or rgba value `#111111`, `rgb(255,255,255)`, `rgba(255,255,255,1)`
`emptyIndWidth`   | Integer. Width of line-stroke of empty indicator bar (the bar that is to be filled in)`1-50`, defaults to `10`
`emptyIndColor`   | String. Color of empty indicator bar in hex, rgb, or rgba value `#111111`, `rgb(255,255,255)`, `rgba(255,255,255,1)`, defaults to `#efefef`.
`trackWidth`   | Integer. Width of line-stroke of track bar `1-50`, defaults to `10`
`trackColor`   | String. Color of track bar in hex, rgb, or rgba value `#111111`, `rgb(255,255,255)`, `rgba(255,255,255,1)`, defaults to `#e3e3e3`
`endCaps`      | String. Shape of endcaps on lines, `round` or `square`, defaults to `round`

## License

MIT © [apttap](https://github.com/apttap)
