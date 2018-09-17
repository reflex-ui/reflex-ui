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

import { InteractivityEvent, InteractivityState } from '../../interactivity';
// prettier-ignore
import {
  ThemedVisualButtonProps,
} from '../../widgets/buttons/label-button/StyledLabelButton';
import { ColorVariant } from './ColorVariant';
import { getThemedColor } from './getThemedColor';
import { ButtonView, ButtonViewProps, Theme } from './PurpleTealTheme';

interface RippleStyles {
  container: ViewStyle;
  ripple: ViewStyle;
}

interface Position2D {
  x: number;
  y: number;
}

enum AnimationKeyframe {
  PRESS_IN = 'pressin',
  PRESS_OUT = 'pressout',
}

interface RippledComponentState {
  readonly animationKeyframe: AnimationKeyframe;
  readonly height: number;
  readonly isAnimatingPressIn: boolean;
  readonly isAnimatingPressOut: boolean;
  readonly rippleStyles: RippleStyles;
  readonly width: number;
}

interface RippleDiameterCalculatorData {
  readonly height: number;
  readonly maxDiameter: number;
  readonly posX: number;
  readonly width: number;
}

type RippleDiameterCalculator = (data: RippleDiameterCalculatorData) => number;

const calculateRippleDiameter: RippleDiameterCalculator = ({
  height,
  maxDiameter = 200,
  posX,
  width,
}: RippleDiameterCalculatorData): number => {
  let diameter = Math.ceil(Math.sqrt(width * width + height * height));

  const dist = Math.round(Math.sqrt(Math.pow(posX - diameter / 2, 2)));
  const distRate = (dist * 1) / (diameter / 2) + 1.1;

  diameter *= distRate;

  return Math.min(diameter, maxDiameter);
};

interface RipplePositionCalculatorData {
  readonly diameter: number;
  readonly interactivityPosition: Position2D;
}

type RipplePositionCalculator = (
  data: RipplePositionCalculatorData,
) => Position2D;

const calculateRipplePosition: RipplePositionCalculator = ({
  diameter,
  interactivityPosition,
}) => ({
  x: interactivityPosition.x - diameter / 2,
  y: interactivityPosition.y - diameter / 2,
});

type InteractivityPositionGetter = (
  readinteractivityEvent?: InteractivityEvent,
) => Position2D;

const getInteractivityPosition: InteractivityPositionGetter = (
  interactivityEvent?,
) => {
  let x = 0;
  let y = 0;

  if (interactivityEvent) {
    x = (interactivityEvent as GestureResponderEvent).nativeEvent.locationX;
    y = (interactivityEvent as GestureResponderEvent).nativeEvent.locationY;
  }

  return { x, y };
};

interface RippleStylesCreatorData {
  readonly color: string;
  readonly diameter: number;
  readonly position: Position2D;
}

type RippleStylesCreator = (props: RippleStylesCreatorData) => RippleStyles;

const createRippleStyles: RippleStylesCreator = ({
  color,
  diameter,
  position,
}) => ({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  ripple: {
    backgroundColor: color,
    borderRadius: diameter / 2,
    height: diameter,
    left: position.x,
    position: 'absolute',
    top: position.y,
    width: diameter,
  },
});

interface ComponentRippleStylesCreatorData {
  readonly colorVariant: ColorVariant;
  readonly height: number;
  readonly interactivityEvent?: InteractivityEvent;
  readonly maxDiameter: number;
  readonly theme: Theme;
  readonly width: number;
}

type ComponentRippleStylesCreator = (
  props: ComponentRippleStylesCreatorData,
) => RippleStyles;

const createComponentRippleStyles: ComponentRippleStylesCreator = ({
  colorVariant,
  height,
  interactivityEvent,
  maxDiameter,
  theme,
  width,
}) => {
  const interactivityPosition = getInteractivityPosition(interactivityEvent);
  const diameter = calculateRippleDiameter({
    height,
    maxDiameter,
    posX: interactivityPosition.x,
    width,
  });
  const color = Color.rgb(getThemedColor({ colorVariant, theme }))
    .lighten(0.6)
    .toString();

  const position = calculateRipplePosition({ diameter, interactivityPosition });

  return createRippleStyles({ color, diameter, position });
};

export type WithRippleEffect = (WrappedComponent: ButtonView) => ButtonView;

export const withRippleEffect: WithRippleEffect = (
  WrappedComponent: ButtonView,
) =>
  class RippledComponent extends React.Component<ButtonViewProps> {
    public static getDerivedStateFromProps(
      props: ButtonViewProps,
      state: RippledComponentState,
    ) {
      // tslint:disable-next-line:no-console
      /*
      console.log(
        'RippledComponent.getDerivedStateFromProps() - state: ',
        state,
      );
      */

      const { interactivityEvent, interactivityState } = props;
      const {
        animationKeyframe,
        isAnimatingPressIn,
        isAnimatingPressOut,
      } = state;

      if (
        interactivityState === InteractivityState.PRESSED &&
        animationKeyframe === AnimationKeyframe.PRESS_OUT &&
        !isAnimatingPressOut
      ) {
        const { colorVariant, theme } = props;
        const { height, width } = state;
        const maxDiameter = 300;

        return {
          ...state,
          animationKeyframe: AnimationKeyframe.PRESS_IN,
          isAnimatingPressIn: true,
          rippleStyles: createComponentRippleStyles({
            colorVariant,
            height,
            interactivityEvent,
            maxDiameter,
            theme,
            width,
          }),
        };
      }

      if (
        interactivityState !== InteractivityState.PRESSED &&
        animationKeyframe === AnimationKeyframe.PRESS_IN &&
        !isAnimatingPressIn
      ) {
        return {
          ...state,
          animationKeyframe: AnimationKeyframe.PRESS_OUT,
          isAnimatingPressOut: true,
        };
      }

      return state;
    }

    // tslint:disable-next-line:no-any
    public animatedView: any;
    // tslint:disable-next-line:no-any
    public rippleAnimation: (props: {}) => Keyframes<any, any>;

    public readonly state: RippledComponentState = {
      animationKeyframe: AnimationKeyframe.PRESS_OUT,
      height: 40,
      isAnimatingPressIn: false,
      isAnimatingPressOut: false,
      rippleStyles: { container: {}, ripple: {} },
      width: 100,
    };

    public constructor(props: ButtonViewProps) {
      super(props);

      this.animatedView = animated(View);
      this.rippleAnimation = Keyframes.Spring({
        // @ts-ignore
        // tslint:disable-next-line:ter-arrow-parens
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
        // tslint:disable-next-line:ter-arrow-parens
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
      // tslint:disable-next-line:no-console
      console.log('RippledComponent.onLayoutChanged() - event: ', event);

      const { height, width } = event.nativeEvent.layout;
      this.setState({ height, width });
    };

    public render() {
      // tslint:disable-next-line:no-console
      // console.log('RippledComponent.render() - state: ', this.state);

      const { children, ...otherProps } = this.props as ThemedVisualButtonProps;
      const RippleAnimation = this.rippleAnimation;

      const { animationKeyframe, rippleStyles } = this.state;
      const AnimatedView = this.animatedView;

      return (
        <WrappedComponent {...otherProps} onLayout={this.onLayoutChanged}>
          <React.Fragment>
            <View style={rippleStyles.container}>
              <RippleAnimation native state={animationKeyframe}>
                {(styles: { opacity: number; scale: number }) => {
                  // tslint:disable-next-line:no-console
                  // console.log('RippledComponent.render() styles: ', styles);

                  const motionStyles = {
                    opacity: styles.opacity,
                    transform: [{ scale: styles.scale || 0 }],
                  };
                  return (
                    <AnimatedView
                      style={{
                        ...rippleStyles.ripple,
                        ...motionStyles,
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

    private pressOutAnimationComplete() {
      // tslint:disable-next-line:no-console
      // console.log('RippledComponent.pressOutAnimationComplete()');

      this.setState({ isAnimatingPressOut: false });
    }

    private pressInAnimationComplete() {
      // tslint:disable-next-line:no-console
      // console.log('RippledComponent.pressInAnimationComplete()');

      this.setState({
        isAnimatingPressIn: false,
      });
    }
  };
