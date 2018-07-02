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
    spring: PropTypes.object,
    textSize: PropTypes.number
  }

  render() {

    const width = this.props.width || '100%';
    const strokeWidth = this.props.strokeWidth || 10;
    const trackWidth = this.props.trackWidth || strokeWidth;
    const preIndWidth = this.props.emptyIndWidth || strokeWidth;
    const radius = 50 - (strokeWidth/2);
    const cir = (2 * Math.PI * radius);
    const indColor = this.props.indColor || '#cf7dd7';
    const trackColor = this.props.trackColor || '#efefef';
    const preIndColor = this.props.emptyIndColor || '#e3e3e3';
    const endCaps = ((this.props.endCaps === 'square') ? 'butt' : 'round') || 'round';
    const value = this.props.value || 0;
    const min = this.props.min || 0;
    const max = this.props.max || 0;
    const precision = this.props.precision || 0;
    const active = (this.props.active === false) ? false : true;
    const displayVal = this.props.displayVal;
    const springParams =  (active?this.props.spring:{stiffness: 20, damping: 8}) || {stiffness: 170, damping: 26};
    let rotation;
    let radialStyle;

    switch (this.props.radialStyle) {
      case 'open':
          radialStyle = .70;
          break;
      case 'half':
          radialStyle = .5;
          break;
      case 'closed':
          radialStyle = 1;
          break;
      default:
          radialStyle = this.props.radialStyle || 1;
          break;
    }

    switch (this.props.startingPoint) {
      case 'top':
          rotation = -90;
          if (this.props.radialStyle) {
            const radian = 180/Math.PI;
            const cirDiff = (cir * (1 - radialStyle)/4) * radian;
            rotation = 90 + cirDiff;
          }
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

    const ind = 1-((this.props.value/this.props.max)*radialStyle);
    const disInd = active ? ind : .9993;

    return (
        <div style={{width, paddingBottom: width}}>
        <Motion defaultStyle={{
                  indVal: cir,
                  trackVal: cir * ind,
                  displayVal: 0,
                  opacity: 0
                }}
                style={{
                  indVal: spring(cir * disInd, springParams),
                  trackVal: 0,
                  displayVal: spring(active?value:min)
                }}>
          {style =>
            <svg className="progress" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r={radius}
                      fill="none"
                      transform={`rotate(${rotation},50,50)`}
                      stroke={trackColor}
                      strokeDasharray={cir * radialStyle}
                      strokeLinecap={endCaps}
                      strokeWidth={trackWidth} />
              <circle cx="50" cy="50" r={radius}
                      fill="none"
                      transform={`rotate(${rotation},50,50)`}
                      stroke={preIndColor}
                      strokeDasharray={cir}
                      strokeDashoffset={cir * ind}
                      strokeLinecap={endCaps}
                      strokeWidth={preIndWidth} />
              <circle cx="50" cy="50" r={radius}
                      fill="none"
                      transform={`rotate(${rotation},50,50)`}
                      stroke={indColor}
                      strokeDasharray={cir}
                      strokeDashoffset={style.indVal}
                      strokeLinecap={endCaps}
                      strokeWidth={strokeWidth} />
             {this.props.displayVal &&
                <text x="50%" y="50%"
                        className='middleText'
                        textAnchor="middle"
                        dominantBaseline="middle"
                        >{style.displayVal.toFixed(precision)}</text>
             }
          </svg> }
        </Motion>
        </div>
    )
  }
}
