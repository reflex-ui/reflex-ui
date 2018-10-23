import {
  InteractivityStateProps,
  InteractivityType,
  isAndroid,
  isIOS,
  isWeb,
  ReflexSubcomponent,
  Themed,
} from '@reflex-ui/core';
import delay from 'delay';
import * as React from 'react';
import {
  LayoutChangeEvent,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
// @ts-ignore Could not find a declaration file for module'
import { animated, Keyframes } from 'react-spring/dist/native';

import { ElevationDegree, getElevationStyles } from '../elevation';

interface RaiseStyles {
  container: ViewStyle;
  shadow: ViewStyle;
}

enum AnimationKeyframe {
  DISABLED = 'disabled',
  ENABLED = 'enabled',
  FOCUSED = 'focused',
  HOVERED = 'hovered',
  PRESS_IN = 'pressin',
  PRESS_OUT = 'pressout',
}

interface RaisedComponentState {
  readonly animationKeyframe: AnimationKeyframe;
  readonly isAnimating: boolean;
  readonly staticRaiseStyles: RaiseStyles;
}

type StaticRaiseStylesCreator = (style: ViewStyle) => RaiseStyles;

const createStaticRaiseStyles: StaticRaiseStylesCreator = style => ({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  shadow: {
    backgroundColor: style.backgroundColor,
    borderRadius: style.borderRadius,
    ...StyleSheet.absoluteFillObject,
  },
});

const convertInteractivityToElevation = (
  interactivityType: InteractivityType,
  degree: ElevationDegree,
) => {
  let elevation = 0;
  if (interactivityType === InteractivityType.ENABLED) {
    if (degree === ElevationDegree.LOW) {
      elevation = 2;
    } else if (degree === ElevationDegree.MID) {
      elevation = 6;
    } else {
      elevation = 10;
    }
  } else if (
    interactivityType === InteractivityType.FOCUSED ||
    interactivityType === InteractivityType.HOVERED
  ) {
    if (degree === ElevationDegree.LOW) {
      elevation = 4;
    } else if (degree === ElevationDegree.MID) {
      elevation = 8;
    } else {
      elevation = 14;
    }
  } else if (interactivityType === InteractivityType.PRESSED) {
    if (degree === ElevationDegree.LOW) {
      elevation = 8;
    } else if (degree === ElevationDegree.MID) {
      elevation = 12;
    } else {
      elevation = 20;
    }
  }

  return elevation;
};

interface MotionRaiseStylesCreatorData {
  readonly elevationDegree: ElevationDegree;
  readonly interactivityType: InteractivityType;
}

type MotionRaiseStylesCreator = (
  props: MotionRaiseStylesCreatorData,
) => ViewStyle;

const createMotionRaiseStyles: MotionRaiseStylesCreator = ({
  elevationDegree,
  interactivityType,
}) => {
  const elevation = convertInteractivityToElevation(
    interactivityType,
    elevationDegree,
  );

  const styles = getElevationStyles(elevation);

  if (isIOS && styles.shadowOffset) {
    styles.height = styles.shadowOffset.height;
    styles.width = styles.shadowOffset.width;
    delete styles.shadowOffset;
  }

  return styles;
};
/*
export type WithRaiseEffect = (
  WrappedComponent: React.ComponentType<
    ViewProps & InteractivityProps & Themed
  >,
) => React.ComponentType<ViewProps & InteractivityProps & Themed>;
*/
export const withRaiseEffect = (elevationDegree: ElevationDegree) => <
  P extends ReflexSubcomponent<InteractivityStateProps & Themed> & ViewProps
>(
  WrappedComponent: React.ComponentType<P>,
): React.ComponentType<P> =>
  class RaisedComponent extends React.Component<P> {
    public static getDerivedStateFromProps(
      props: P,
      state: RaisedComponentState,
    ) {
      const { interactivityState } = props.componentProps;

      const interactivityType = interactivityState
        ? interactivityState.type
        : InteractivityType.ENABLED;

      const { animationKeyframe, isAnimating } = state;

      const staticRaiseStyles = createStaticRaiseStyles(
        StyleSheet.flatten(props.style),
      );

      if (
        interactivityType === InteractivityType.DISABLED &&
        animationKeyframe !== AnimationKeyframe.DISABLED &&
        !isAnimating
      ) {
        return {
          ...state,
          animationKeyframe: AnimationKeyframe.DISABLED,
          isAnimating: true,
          staticRaiseStyles,
        };
      }

      if (
        interactivityType === InteractivityType.HOVERED &&
        animationKeyframe !== AnimationKeyframe.HOVERED &&
        !isAnimating
      ) {
        return {
          ...state,
          animationKeyframe: AnimationKeyframe.HOVERED,
          isAnimating: true,
          staticRaiseStyles,
        };
      }

      if (
        interactivityType === InteractivityType.FOCUSED &&
        animationKeyframe !== AnimationKeyframe.FOCUSED &&
        !isAnimating
      ) {
        return {
          ...state,
          animationKeyframe: AnimationKeyframe.FOCUSED,
          isAnimating: true,
          staticRaiseStyles,
        };
      }

      if (
        interactivityType === InteractivityType.PRESSED &&
        animationKeyframe !== AnimationKeyframe.PRESS_IN &&
        !isAnimating
      ) {
        return {
          ...state,
          animationKeyframe: AnimationKeyframe.PRESS_IN,
          isAnimating: true,
          staticRaiseStyles,
        };
      }

      if (
        interactivityType === InteractivityType.ENABLED &&
        animationKeyframe !== AnimationKeyframe.ENABLED &&
        !isAnimating
      ) {
        return {
          ...state,
          animationKeyframe: AnimationKeyframe.ENABLED,
          isAnimatingPressOut: true,
          staticRaiseStyles,
        };
      }

      return state;
    }

    // tslint:disable-next-line:no-any
    public animatedView: any;
    // tslint:disable-next-line:no-any
    public raiseAnimation: (props: {}) => Keyframes<any, any>;

    public readonly state: RaisedComponentState = {
      animationKeyframe: AnimationKeyframe.DISABLED,
      isAnimating: false,
      staticRaiseStyles: { container: {}, shadow: {} },
    };

    public constructor(props: P) {
      super(props);

      this.animatedView = animated(View);
      this.raiseAnimation = Keyframes.Spring({
        // @ts-ignore
        // tslint:disable-next-line:ter-arrow-parens
        disabled: async call => {
          call({
            config: { tension: 75, friction: 20 },
            from: {
              ...createMotionRaiseStyles({
                elevationDegree,
                interactivityType: InteractivityType.ENABLED,
              }),
            },
            to: {
              ...createMotionRaiseStyles({
                elevationDegree,
                interactivityType: InteractivityType.DISABLED,
              }),
            },
          });
          await delay(250);
          if (this.state.isAnimating) this.animationComplete();
        },
        // @ts-ignore
        // tslint:disable-next-line:ter-arrow-parens
        enabled: async call => {
          call({
            config: { tension: 75, friction: 20 },
            from: {
              ...createMotionRaiseStyles({
                elevationDegree,
                interactivityType: InteractivityType.HOVERED,
              }),
            },
            to: {
              ...createMotionRaiseStyles({
                elevationDegree,
                interactivityType: InteractivityType.ENABLED,
              }),
            },
          });
          await delay(250);
          if (this.state.isAnimating) this.animationComplete();
        },
        // @ts-ignore
        // tslint:disable-next-line:ter-arrow-parens
        focused: async call => {
          call({
            config: { tension: 75, friction: 20 },
            from: {
              ...createMotionRaiseStyles({
                elevationDegree,
                interactivityType: InteractivityType.ENABLED,
              }),
            },
            to: {
              ...createMotionRaiseStyles({
                elevationDegree,
                interactivityType: InteractivityType.FOCUSED,
              }),
            },
          });
          await delay(250);
          if (this.state.isAnimating) this.animationComplete();
        },
        // @ts-ignore
        // tslint:disable-next-line:ter-arrow-parens
        hovered: async call => {
          call({
            config: { tension: 150, friction: 20 },
            from: {
              ...createMotionRaiseStyles({
                elevationDegree,
                interactivityType: InteractivityType.ENABLED,
              }),
            },
            to: {
              ...createMotionRaiseStyles({
                elevationDegree,
                interactivityType: InteractivityType.HOVERED,
              }),
            },
          });
          await delay(250);
          if (this.state.isAnimating) this.animationComplete();
        },
        // @ts-ignore
        // tslint:disable-next-line:ter-arrow-parens
        pressin: async call => {
          call({
            config: { tension: 150, friction: 20 },
            from: {
              ...createMotionRaiseStyles({
                elevationDegree,
                interactivityType: InteractivityType.HOVERED,
              }),
            },
            to: {
              ...createMotionRaiseStyles({
                elevationDegree,
                interactivityType: InteractivityType.PRESSED,
              }),
            },
          });
          await delay(250);
          if (this.state.isAnimating) this.animationComplete();
        },
      });
    }

    public onLayoutChanged = (event: LayoutChangeEvent) => {
      const { height, width } = event.nativeEvent.layout;
      this.setState({ height, width });
    };

    public render() {
      // @ts-ignore [ts] Rest types may only be created from object types.
      // https://github.com/Microsoft/TypeScript/issues/10727
      const { children, ...otherProps } = this.props;
      const RaiseAnimation = this.raiseAnimation;

      const { animationKeyframe } = this.state;
      const AnimatedView = this.animatedView;

      return (
        <WrappedComponent {...otherProps} onLayout={this.onLayoutChanged}>
          <React.Fragment>
            <View style={this.state.staticRaiseStyles.container}>
              <RaiseAnimation native state={animationKeyframe}>
                {(styles: { boxShadow: string }) => {
                  /*
                  const motionStyles = {
                    boxShadow: styles.boxShadow,
                  };
                  */

                  const motionStyles = {};

                  if (isWeb) {
                    // @ts-ignore
                    motionStyles.boxShadow = styles.boxShadow;
                  } else if (isAndroid) {
                    // @ts-ignore
                    motionStyles.elevation = styles.elevation;
                  } else {
                    // @ts-ignore
                    motionStyles.shadowColor = styles.shadowColor;
                    // @ts-ignore
                    /*
                    motionStyles.shadowOffset = {
                      // @ts-ignore
                      height: styles.height || 0,
                      // @ts-ignore
                      width: styles.width || 0,
                    };
                    */

                    /*
                    * Temporary solution. Need to investigate how to animate
                    * shadowOffset, i.e., an object of values.
                    */
                    const interactivityType = this.props.componentProps
                      .interactivityState
                      ? this.props.componentProps.interactivityState.type
                      : InteractivityType.ENABLED;

                    const elevation = convertInteractivityToElevation(
                      interactivityType,
                      ElevationDegree.MID,
                    );
                    const elevationStyles = getElevationStyles(elevation);
                    const height = elevationStyles.shadowOffset
                      ? elevationStyles.shadowOffset.height
                      : 0;
                    const width = elevationStyles.shadowOffset
                      ? elevationStyles.shadowOffset.width
                      : 0;
                    // @ts-ignore
                    motionStyles.shadowOffset = {
                      height,
                      width,
                    };
                    /**/
                    // @ts-ignore
                    motionStyles.shadowOpacity = styles.shadowOpacity;
                    // @ts-ignore
                    motionStyles.shadowRadius = styles.shadowRadius;
                  }

                  return (
                    <AnimatedView
                      style={{
                        ...this.state.staticRaiseStyles.shadow,
                        ...motionStyles,
                      }}
                    />
                  );
                }}
              </RaiseAnimation>
            </View>
          </React.Fragment>
          {children}
        </WrappedComponent>
      );
    }

    private animationComplete() {
      this.setState({
        isAnimating: false,
      });
    }
  };
