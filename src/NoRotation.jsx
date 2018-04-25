import React from 'react';
import styled, { keyframes } from 'styled-components';
import Phone from './assets/phone.svg';

const PORTRAIT = 'portrait';
const LANDSCAPE = 'landscape';
const AUTO = 'auto';
const MANUAL = 'manual';

const defaultStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
};

const normalStyle = {
  ...defaultStyle,
  width: '100vw',
  height: '100vh',
};

const rotatedStyle = {
  ...defaultStyle,
  transformOrigin: '0 0',
  transform: 'rotate(90deg) translateY(-100%)',
  width: '100vh',
  height: '100vw',
};

const Mask = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  padding-top: 10%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const landscapeToPortrait = keyframes`
  0% {
    transform: rotate(-90deg);
    opacity: 0;
  }
  5% {
    transform: rotate(-90deg);
    opacity: 1;
  }

  95% {
    transform: rotate(0deg);
    opacity: 0;
  }

  100% {
    transform: rotate(0deg);
    opacity: 0;
  }
`;

const portraitToLandscape = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 0;
  }
  5% {
    transform: rotate(0deg);
    opacity: 1;
  }

  95% {
    transform: rotate(-90deg);
    opacity: 0;
  }

  100% {
    transform: rotate(-90deg);
    opacity: 0;
  }
`;

const Icon = styled(Phone)`
  display: block;
  tranform-origin: center;
  animation: ${props =>
    props.desiredOrientation === PORTRAIT
      ? `${landscapeToPortrait} 1.5s linear infinite`
      : `${portraitToLandscape} 1.5s linear infinite`};
  width: 18%;
  height: 18%;
  fill: #fff;
`;

const Tip = styled.p`
  margin-top: 3em;
  color: #fff;
  letter-spacing: 0.5rem;
`;

class NoRotation extends React.Component {
  state = {
    currentOrientation: undefined,
    style: {},
    showTip: false,
  };

  adjust = () => {
    const {
      desiredOrientation,
      adjustMethod,
      onPortrait,
      onLandscape,
    } = this.props;

    const { clientWidth, clientHeight } = document.documentElement;
    const currentOrientation =
      clientHeight >= clientWidth ? PORTRAIT : LANDSCAPE;

    if (currentOrientation === PORTRAIT && onPortrait) {
      onPortrait();
    }
    if (currentOrientation === LANDSCAPE && onLandscape) {
      onLandscape();
    }

    let style;
    let showTip;
    if (currentOrientation === desiredOrientation) {
      style = normalStyle;
    } else {
      if (adjustMethod === AUTO) {
        style = rotatedStyle;
        showTip = false;
      } else {
        style = normalStyle;
        showTip = true;
      }
    }

    this.setState({
      style,
      showTip,
    });
  };

  componentWillMount() {
    this.adjust();
  }

  componentDidMount() {
    window.addEventListener('resize', this.adjust);
    window.addEventListener('orientationchange', this.adjust);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.adjust, false);
    window.removeEventListener('orientationchange', this.adjust, false);
  }

  render() {
    const {
      children,
      desiredOrientation,
      adjustMethod,
      onPortrait,
      onLandscape,
      ...otherProps
    } = this.props;
    const { style, currentOrientation, showTip } = this.state;
    return (
      <div data-orientation={currentOrientation} style={style} {...otherProps}>
        {children}

        {showTip && (
          <Mask>
            <Icon desiredOrientation={desiredOrientation} />
            <Tip>旋转屏幕以获得最佳使用体验</Tip>
          </Mask>
        )}
      </div>
    );
  }
}

export default NoRotation;
