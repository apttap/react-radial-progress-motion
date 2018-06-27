import React, { Component } from 'react'

import RadialGraph from 'react-radial-progress-motion'

export default class App extends Component {
  render () {
    return (
      <div>
        <RadialGraph
            width={'400px'}
            strokeWidth={10}
            endCaps={'round'}
            value={30}
            startingPoint={'top'}
            spring={{stiffness: 21, damping: 7}}
        />
      </div>
    )
  }
}
