import delay from 'delay';
import * as React from 'react';
import { LayoutChangeEvent, StyleSheet, View, ViewStyle } from 'react-native';
import { isAndroid, isIOS, isWeb } from 'react-platform-material-design';
// @ts-ignore Could not find a declaration file for module'
import { animated, Keyframes } from 'react-spring/dist/native';

import { InteractivityState } from '../../interactivity';
// prettier-ignore
import {
  SpecialButtonProps,
} from '../../widgets/buttons/label-button/SimpleButton';
// import { ColorVariant } from './ColorVariant';
import { getElevationStyles } from './getElevationStyles';
// import { getThemedColor } from './getThemedColor';
import { ButtonView, ButtonViewProps } from './PurpleTealTheme';

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

type StaticRaiseStylesCreator = (backgroundColor: string) => RaiseStyles;

const createStaticRaiseStyles: StaticRaiseStylesCreator = backgroundColor => ({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  shadow: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor,
  },
});

interface MotionRaiseStylesCreatorData {
  readonly interactivityState: InteractivityState;
}

type MotionRaiseStylesCreator = (
  props: MotionRaiseStylesCreatorData,
) => ViewStyle;

const createMotionRaiseStyles: MotionRaiseStylesCreator = ({
  interactivityState,
}) => {
  const styles = getElevationStyles({
    interactivityState,
  });

  if (isIOS && styles.shadowOffset) {
    styles.height = styles.shadowOffset.height;
    styles.width = styles.shadowOffset.width;
    delete styles.shadowOffset;
  }

  return styles;
};

export type WithRaiseEffect = (WrappedComponent: ButtonView) => ButtonView;

export const withRaiseEffect: WithRaiseEffect = (
  WrappedComponent: ButtonView,
) =>
  class RaisedComponent extends React.Component<ButtonViewProps> {
    public static getDerivedStateFromProps(
      props: ButtonViewProps,
      state: RaisedComponentState,
    ) {
      // tslint:disable-next-line:no-console
      console.log(
        'RaisedComponent.getDerivedStateFromProps() - state: ',
        state,
      );

      // tslint:disable-next-line:no-console
      console.log(
        'RaisedComponent.getDerivedStateFromProps() - props: ',
        props,
      );

      const { interactivityState } = props;
      const { animationKeyframe, isAnimating } = state;

      const backgroundColor =
        StyleSheet.flatten(props.style).backgroundColor || '#ffffff';

      const staticRaiseStyles = createStaticRaiseStyles(backgroundColor);

      if (
        interactivityState === InteractivityState.DISABLED &&
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
        interactivityState === InteractivityState.HOVERED &&
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
        interactivityState === InteractivityState.FOCUSED &&
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
        interactivityState === InteractivityState.PRESSED &&
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
        interactivityState === InteractivityState.ENABLED &&
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

    public constructor(props: ButtonViewProps) {
      super(props);

      // tslint:disable-next-line:no-console
      console.log('RaisedComponent().constructor()');

      this.animatedView = animated(View);
      this.raiseAnimation = Keyframes.Spring({
        // @ts-ignore
        // tslint:disable-next-line:ter-arrow-parens
        disabled: async call => {
          // tslint:disable-next-line:no-console
          // console.log('RaisedComponent.Keyframes.Spring.enabled()');
          call({
            config: { tension: 75, friction: 20 },
            from: {
              ...createMotionRaiseStyles({
                interactivityState: InteractivityState.ENABLED,
              }),
            },
            to: {
              ...createMotionRaiseStyles({
                interactivityState: InteractivityState.DISABLED,
              }),
            },
          });
          await delay(250);
          if (this.state.isAnimating) this.animationComplete();
        },
        // @ts-ignore
        // tslint:disable-next-line:ter-arrow-parens
        enabled: async call => {
          // tslint:disable-next-line:no-console
          // console.log('RaisedComponent.Keyframes.Spring.enabled()');
          call({
            config: { tension: 75, friction: 20 },
            from: {
              ...createMotionRaiseStyles({
                interactivityState: InteractivityState.HOVERED,
              }),
            },
            to: {
              ...createMotionRaiseStyles({
                interactivityState: InteractivityState.ENABLED,
              }),
            },
          });
          await delay(250);
          if (this.state.isAnimating) this.animationComplete();
        },
        // @ts-ignore
        // tslint:disable-next-line:ter-arrow-parens
        focused: async call => {
          // tslint:disable-next-line:no-console
          // console.log('RaisedComponent.Keyframes.Spring.focused()');
          call({
            config: { tension: 75, friction: 20 },
            from: {
              ...createMotionRaiseStyles({
                interactivityState: InteractivityState.ENABLED,
              }),
            },
            to: {
              ...createMotionRaiseStyles({
                interactivityState: InteractivityState.FOCUSED,
              }),
            },
          });
          await delay(250);
          if (this.state.isAnimating) this.animationComplete();
        },
        // @ts-ignore
        // tslint:disable-next-line:ter-arrow-parens
        hovered: async call => {
          // tslint:disable-next-line:no-console
          console.log('RaisedComponent.Keyframes.Spring.hovered()');
          call({
            config: { tension: 150, friction: 20 },
            from: {
              ...createMotionRaiseStyles({
                interactivityState: InteractivityState.ENABLED,
              }),
            },
            to: {
              ...createMotionRaiseStyles({
                interactivityState: InteractivityState.HOVERED,
              }),
            },
          });
          await delay(250);
          if (this.state.isAnimating) this.animationComplete();
        },
        // @ts-ignore
        // tslint:disable-next-line:ter-arrow-parens
        pressin: async call => {
          // tslint:disable-next-line:no-console
          // console.log('RaisedComponent.Keyframes.Spring.pressin()');
          call({
            config: { tension: 150, friction: 20 },
            // config: { duration: 2000, easing: Easing.linear },
            // from: { opacity: 0, scale: 0.001 },
            from: {
              ...createMotionRaiseStyles({
                interactivityState: InteractivityState.HOVERED,
              }),
            },
            to: {
              ...createMotionRaiseStyles({
                interactivityState: InteractivityState.PRESSED,
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
      // tslint:disable-next-line:no-console
      console.log('RaisedComponent.render() - state: ', this.state);

      const { children, ...otherProps } = this.props as SpecialButtonProps;
      const RaiseAnimation = this.raiseAnimation;

      const { animationKeyframe } = this.state;
      const AnimatedView = this.animatedView;

      return (
        <WrappedComponent {...otherProps} onLayout={this.onLayoutChanged}>
          <React.Fragment>
            <View style={this.state.staticRaiseStyles.container}>
              <RaiseAnimation native state={animationKeyframe}>
                {(styles: { boxShadow: string }) => {
                  // tslint:disable-next-line:no-console
                  console.log('RaisedComponent.render() styles: ', styles);

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
                    const elevationStyles = getElevationStyles({
                      interactivityState: this.props.interactivityState,
                    });
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
      // tslint:disable-next-line:no-console
      console.log('RaisedComponent.animationComplete()');

      this.setState({
        isAnimating: false,
      });
    }
  };
