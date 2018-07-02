import React, { Component } from 'react'

import RadialGraph from 'react-radial-progress-motion'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }
  componentDidMount = () => {
    setInterval(()=>{
      this.setState((prevState)=>{
        return {
          ...prevState,
          active: !prevState.active
        }
      })
    }, 2000)
  }
  render () {
    return (
      <div>
        <div className="progress">
          <div>
            <RadialGraph
                strokeWidth={16}
                endCaps={'square'}
                value={33}
                min={0}
                max={100}
                radialStyle={.7}
                precision={0}
                displayVal={true}
                startingPoint={'top'}
                active={this.state.active}
            />
          </div>
          <div>
            <RadialGraph
                strokeWidth={6}
                endCaps={'round'}
                trackColor={'transparent'}
                value={7}
                min={0}
                max={10}
                precision={1}
                displayVal={true}
                startingPoint={'top'}
                spring={{stiffness: 25, damping: 7}}
                active={this.state.active}
            />
          </div>
          <div>
            <RadialGraph
                strokeWidth={3}
                trackWidth={1}
                endCaps={'round'}
                value={.32}
                min={0}
                max={1}
                precision={0}
                displayVal={false}
                startingPoint={'top'}
                spring={{stiffness: 53, damping: 7}}
                active={this.state.active}
            />
          </div>
        </div>
        <div className="progress">
          <div>
            <RadialGraph
                strokeWidth={50}
                endCaps={'square'}
                indColor={'#857dd7'}
                value={79}
                min={0}
                max={100}
                precision={0}
                displayVal={false}
                startingPoint={'bottom'}
                spring={{stiffness: 21, damping: 7}}
                active={this.state.active}
            />
          </div>
          <div>
            <RadialGraph
                strokeWidth={6}
                endCaps={'round'}
                trackWidth={3}
                indColor={'#857dd7'}
                emptyIndColor={'transparent'}
                value={4.3}
                min={0}
                max={10}
                precision={0}
                displayVal={true}
                startingPoint={'bottom'}
                spring={{stiffness: 21, damping: 7}}
                active={this.state.active}
            />
          </div>
          <div>
            <RadialGraph
                strokeWidth={1}
                endCaps={'square'}
                indColor={'#857dd7'}
                emptyIndColor={'transparent'}
                value={.37}
                min={0}
                max={1}
                precision={2}
                displayVal={true}
                startingPoint={'bottom'}
                spring={{stiffness: 21, damping: 7}}
                active={this.state.active}
            />
          </div>
        </div>
        <div className="progress">
          <div>
            <RadialGraph
                strokeWidth={14}
                trackWidth={4}
                endCaps={'round'}
                indColor={'#7dd77f'}
                value={69}
                min={0}
                max={100}
                precision={0}
                displayVal={true}
                startingPoint={'right'}
                spring={{stiffness: 21, damping: 7}}
                active={this.state.active}
            />
          </div>
          <div>
            <RadialGraph
                strokeWidth={6}
                endCaps={'square'}
                indColor={'#7dd77f'}
                emptyIndColor={'transparent'}
                trackColor={'transparent'}
                value={9.3}
                min={0}
                max={10}
                precision={1}
                displayVal={false}
                startingPoint={'right'}
                spring={{stiffness: 21, damping: 7}}
                active={this.state.active}
            />
          </div>
          <div>
            <RadialGraph
                strokeWidth={1}
                endCaps={'square'}
                indColor={'#7dd77f'}
                emptyIndColor={'transparent'}
                value={.2}
                min={0}
                max={1}
                precision={1}
                displayVal={true}
                startingPoint={'right'}
                spring={{stiffness: 21, damping: 7}}
                active={this.state.active}
            />
          </div>
        </div>
        <div className="progress">
          <div>
            <RadialGraph
                strokeWidth={20}
                endCaps={'square'}
                indColor={'#e6e157'}
                emptyIndColor={'transparent'}
                value={77}
                min={0}
                max={100}
                precision={0}
                displayVal={true}
                startingPoint={'left'}
                spring={{stiffness: 21, damping: 7}}
                active={this.state.active}
            />
          </div>
          <div>
            <RadialGraph
                strokeWidth={6}
                endCaps={'round'}
                trackWidth={3}
                indColor={'#e6e157'}
                emptyIndColor={'transparent'}
                value={4.3}
                min={0}
                max={10}
                precision={1}
                displayVal={true}
                startingPoint={'left'}
                spring={{stiffness: 21, damping: 7}}
                active={this.state.active}
            />
          </div>
          <div>
            <RadialGraph
                strokeWidth={1}
                endCaps={'square'}
                indColor={'#e6e157'}
                emptyIndColor={'transparent'}
                value={.71}
                min={0}
                max={1}
                precision={2}
                displayVal={true}
                startingPoint={'left'}
                spring={{stiffness: 21, damping: 7}}
                active={this.state.active}
            />
          </div>
        </div>
      </div>
    )
  }
}
