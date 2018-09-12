import * as Color from 'color';
import delay from 'delay';
import * as React from 'react';
import {
  GestureResponderEvent,
  LayoutChangeEvent,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
// @ts-ignore Could not find a declaration file for module'
import { animated, Keyframes } from 'react-spring/dist/native';

import { InteractivityState } from '../../interactivity/InteractivityState';
// prettier-ignore
import {
  ThemedVisualButtonProps,
} from '../../widgets/buttons/label-button/StyledLabelButton';
import { getThemedColor } from './getThemedColor';
import { ButtonContainer, ButtonContainerProps } from './PurpleTealTheme';

interface RippleStyles {
  container: ViewStyle;
  ripple: ViewStyle;
}

interface RipplePosition {
  diameter: number;
  left: number;
  top: number;
}

interface RippleContainerState {
  readonly height: number;
  readonly isAnimatingPressIn: boolean;
  readonly isAnimatingPressInComplete: boolean;
  readonly isAnimatingPressOut: boolean;
  readonly width: number;
}

export type WithRippleEffect = (
  WrappedComponent: ButtonContainer,
) => ButtonContainer;

export const withRippleEffect: WithRippleEffect = (
  WrappedComponent: ButtonContainer,
) =>
  class RippledComponent extends React.Component<ButtonContainerProps> {
    public static getDerivedStateFromProps(
      props: ButtonContainerProps,
      state: RippleContainerState,
    ) {
      if (
        state.isAnimatingPressIn ||
        (props.interactivityState === InteractivityState.PRESSED &&
          !state.isAnimatingPressInComplete)
      ) {
        return {
          ...state,
          isAnimatingPressIn: true,
        };
      }

      if (
        props.interactivityState !== InteractivityState.PRESSED &&
        state.isAnimatingPressInComplete
      ) {
        return {
          ...state,
          isAnimatingPressIn: false,
          isAnimatingPressInComplete: false,
        };
      }

      return state;
    }

    // tslint:disable-next-line:no-any
    public animatedView: any;
    public maxDiameter: number = 200;
    // tslint:disable-next-line:no-any
    public rippleAnimation: (props: {}) => Keyframes<any, any>;
    public ripplePosition: RipplePosition;
    public rippleStyles: RippleStyles;

    public readonly state: RippleContainerState = {
      height: 40,
      isAnimatingPressIn: false,
      isAnimatingPressInComplete: false,
      isAnimatingPressOut: false,
      width: 100,
    };

    public constructor(props: ButtonContainerProps) {
      super(props);

      this.animatedView = animated(View);
      this.ripplePosition = { diameter: 0, left: 0, top: 0 };
      this.rippleStyles = { container: {}, ripple: {} };
      // this.rippleStyles = this.getDefaultRippleStyles();

      this.rippleAnimation = Keyframes.Spring({
        // @ts-ignore
        pressin: async call => {
          // tslint:disable-next-line:no-console
          // console.log('RippledComponent.Keyframes.Spring.pressin()');
          call({
            config: { tension: 150, friction: 20 },
            // config: { duration: 2000, easing: Easing.linear },
            // from: { opacity: 0, scale: 0.001 },
            from: {
              // config: { duration: 2000, easing: Easing.linear },
              opacity: 0,
              scale: 0.001,
            },
            to: { opacity: 1, scale: 1 },
          });
          // await call({ from: { opacity: 1 }, to: { opacity: 0 } });
          await delay(250);
          if (this.state.isAnimatingPressIn) this.pressInAnimationComplete();
        },
        // @ts-ignore
        pressout: async call => {
          // tslint:disable-next-line:no-console
          // console.log('RippledComponent.Keyframes.Spring.pressout()');
          call({ config: { tension: 75, friction: 20 }, to: { opacity: 0 } });
          await delay(250);
          await call({
            config: { tension: 300, friction: 20 },
            to: { scale: 0 },
          });
          if (this.state.isAnimatingPressOut) this.pressOutAnimationComplete();
        },
      });
    }

    public onLayoutChanged = (event: LayoutChangeEvent) => {
      const { height, width } = event.nativeEvent.layout;

      // tslint:disable-next-line:no-console
      /*
      console.log(
        'RippledComponent.onLayoutChanged() - event.nativeEvent: ',
        event.nativeEvent,
      );
      */

      this.setState({ height, width });
    };

    public render() {
      const state =
        this.state.isAnimatingPressIn ||
        this.props.interactivityState === InteractivityState.PRESSED
          ? 'pressin'
          : 'pressout';

      // tslint:disable-next-line:no-console
      /*
      console.log(
        `RippledComponent.render() - isAnimatingPressIn: ${
          this.state.isAnimatingPressIn
        } | state: ${state}`,
      );
      */

      const { children, ...otherProps } = this.props as ThemedVisualButtonProps;
      const RippleAnimation = this.rippleAnimation;

      if (
        this.props.interactivityState === InteractivityState.PRESSED &&
        !this.state.isAnimatingPressOut &&
        (!this.state.isAnimatingPressIn || this.ripplePosition.top === 0)
      ) {
        this.ripplePosition = this.getRipplePosition();
        this.rippleStyles = this.getDefaultRippleStyles();
        // tslint:disable-next-line:no-console
        /*
        console.log(
          'RippledComponent.render() - getDefaultRippleStyles: ',
          this.rippleStyles,
        );
        */
      }

      // tslint:disable-next-line:no-console
      /*
      console.log(
        'RippledComponent.render() - ripplePosition: ',
        this.ripplePosition,
      );
      */
      // tslint:disable-next-line:no-console
      /*
      console.log(
        'RippledComponent.render() - this.rippleStyles.ripple: ',
        this.rippleStyles.ripple,
      );
      */

      const AnimatedView = this.animatedView;

      return (
        <WrappedComponent {...otherProps} onLayout={this.onLayoutChanged}>
          <React.Fragment>
            <View style={this.rippleStyles.container}>
              <RippleAnimation native state={state}>
                {(styles: { opacity: number; scale: number }) => {
                  // tslint:disable-next-line:no-console
                  // console.log('RippledComponent.render() styles: ', styles);

                  const motionStyles = {
                    opacity: styles.opacity,
                    transform: [{ scale: styles.scale || 0 }],
                    // transform: [{ scale: 0.884897214307278111 }],
                  };
                  return (
                    <AnimatedView
                      style={{
                        ...this.rippleStyles.ripple,
                        ...{
                          left: this.ripplePosition.left,
                          top: this.ripplePosition.top,
                          ...motionStyles,
                        },
                      }}
                    />
                  );
                }}
              </RippleAnimation>
            </View>
          </React.Fragment>
          {children}
        </WrappedComponent>
      );
    }

    private getDefaultRippleStyles = (): RippleStyles => {
      const { colorVariant, theme } = this.props;
      // const { diameter } = this.state;
      const { diameter } = this.ripplePosition;
      /*
      let { diameter } = this.ripplePosition;
      const { width } = this.state;

      if (this.props.interactivityEvent) {
        const px =
          (this.props.interactivityEvent as GestureResponderEvent).nativeEvent
            .locationX || width / 2;

        const dist = Math.round(Math.sqrt(Math.pow(px - diameter / 2, 2)));
        const increaseRate = (dist * 3) / (diameter / 2) + 1;

        // tslint:disable-next-line:no-console
        console.log(
          `RippledComponent.getDefaultRippleStyles() -
          dist: ${dist} |
          increaseRate: ${increaseRate} |
          diameter: ${diameter}`,
        );

        diameter *= increaseRate;

        // tslint:disable-next-line:no-console
        console.log(
          'RippledComponent.getDefaultRippleStyles() - NEW DIAMETER: ',
          diameter,
        );
      }
      */

      // return StyleSheet.create<RippleStyles>({
      return {
        container: {
          ...StyleSheet.absoluteFillObject,
          overflow: 'hidden',
        },
        ripple: {
          // backgroundColor: 'red',
          backgroundColor: Color.rgb(getThemedColor({ colorVariant, theme }))
            .lighten(0.6)
            .toString(),
          borderRadius: diameter / 2,
          height: diameter,
          // left: 0,
          // opacity: 0.01,
          position: 'absolute',
          // top: 0,
          // transform: [{ scale: 2 }],
          width: diameter,
        },
      };
    };

    private getRipplePosition(): RipplePosition {
      // tslint:disable-next-line:no-console
      /*
      console.log(
        'RippledComponent.getRipplePosition() - interactivityEvent: ',
        this.props.interactivityEvent,
      );
      */

      let px = 0;
      let py = 0;

      if (this.props.interactivityEvent) {
        px = (this.props.interactivityEvent as GestureResponderEvent)
          .nativeEvent.locationX;
        py = (this.props.interactivityEvent as GestureResponderEvent)
          .nativeEvent.locationY;
      }

      const { height, width } = this.state;

      let diameter = Math.ceil(Math.sqrt(width * width + height * height));

      if (this.props.interactivityEvent) {
        const dist = Math.round(Math.sqrt(Math.pow(px - diameter / 2, 2)));
        const increaseRate = (dist * 1) / (diameter / 2) + 1.1;

        // tslint:disable-next-line:no-console
        /*
        console.log(
          `RippledComponent.getDefaultRippleStyles() -
          dist: ${dist} |
          increaseRate: ${increaseRate} |
          diameter: ${diameter}`,
        );
        */

        diameter *= increaseRate;

        // tslint:disable-next-line:no-console
        /*
        console.log(
          'RippledComponent.getDefaultRippleStyles() - NEW DIAMETER: ',
          diameter,
        );
        */
      }

      const left = px - diameter / 2;
      // const left = px;
      const top = py - diameter / 2;
      // const top = py;

      // tslint:disable-next-line:no-console
      /*
      console.log(
        `RippledComponent.render() - diameter: ${diameter} |
        px: ${px} |
        py: ${py} |
        left: ${left} |
        top: ${top}`,
      );
      */

      return { diameter, left, top };
    }

    private pressOutAnimationComplete() {
      // tslint:disable-next-line:no-console
      // console.log('RippledComponent.pressOutAnimationComplete()');

      this.ripplePosition = {
        diameter: this.ripplePosition.diameter,
        left: 0,
        top: 0,
      };

      this.setState({ isAnimatingPressOut: false });
    }

    private pressInAnimationComplete() {
      // tslint:disable-next-line:no-console
      // console.log('RippledComponent.pressInAnimationComplete()');

      const isAnimatingPressInComplete =
        this.props.interactivityState === InteractivityState.PRESSED
          ? true
          : false;

      this.setState({
        isAnimatingPressIn: false,
        isAnimatingPressInComplete,
        isAnimatingPressOut: true,
      });
    }
  };
