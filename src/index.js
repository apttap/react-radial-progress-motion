/**
 * @class RadialProgress
 */

import React, { Component } from 'react'
import {Motion, spring} from 'react-motion'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class RadialGraph extends Component {
  static propTypes = {
    width: PropTypes.string,
    indColor: PropTypes.string,
    trackColor: PropTypes.string,
    preIndColor: PropTypes.string,
    endCaps: PropTypes.string,
    strokeWidth: PropTypes.number,
    preIndWidth: PropTypes.number,
    spring: PropTypes.object
  }

  render() {

    const width = this.props.width || '100%';
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

    let rotation;
    switch (this.props.startingPoint) {
      case 'top':
          rotation = -90;
          break;
      case 'left':
          rotation = 180;
          break;
      case 'bottom':
          rotation = 90;
          break;
      case 'right':
          rotation = 0;
          break;
      default:
          rotation = this.props.startingPoint || -90;
          break;
    }

    return (
      <div style={{width}}>
        <Motion defaultStyle={{
                  indVal: dashArray,
                  trackVal: dashArray * (1 - value/100),
                  displayVal: 0
                }}
                style={{
                  indVal: spring(dashArray * (1 - value/100), springParams),
                  trackVal: 0,
                  displayVal: spring(value)
                }}>
          {style =>
            <svg className="progress" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              <circle cx="50" cy="50" r={radius}
                      fill="none"
                      stroke={trackColor}
                      strokeDasharray={dashArray}
                      strokeLinecap={endCaps}
                      strokeWidth={trackWidth} />
              <circle cx="50" cy="50" r={radius}
                      fill="none"
                      transform={`rotate(${rotation},50,50)`}
                      stroke={preIndColor}
                      strokeDasharray={dashArray}
                      strokeDashoffset={dashArray * (1 - value/100)}
                      strokeLinecap={endCaps}
                      strokeWidth={preIndWidth} />
              <circle cx="50" cy="50" r={radius}
                      fill="none"
                      transform={`rotate(${rotation},50,50)`}
                      stroke={indColor}
                      strokeDasharray={dashArray}
                      strokeDashoffset={style.indVal}
                      strokeLinecap={endCaps}
                      strokeWidth={strokeWidth} />
              <text x="50%" y="50%"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    >{style.displayVal.toFixed()}</text>
          </svg> }
        </Motion>
      </div>
    )
  }
}
