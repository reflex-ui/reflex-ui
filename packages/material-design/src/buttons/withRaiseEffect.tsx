/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  InteractionStateProps,
  InteractionType,
  isAndroid,
  isIOS,
  isWeb,
  reflexComponent,
  SubProps,
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

import {
  convertInteractionToElevation,
  ElevationDegree,
  getElevationStyles,
} from '../elevation';

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

type RaiseStylesCreator = (style: ViewStyle) => RaiseStyles;

const createRaiseStyles: RaiseStylesCreator = style => ({
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

interface MotionRaiseStylesCreatorData {
  readonly elevationDegree: ElevationDegree;
  readonly interactionType: InteractionType;
}

type MotionRaiseStylesCreator = (
  props: MotionRaiseStylesCreatorData,
) => ViewStyle;

const createMotionRaiseStyles: MotionRaiseStylesCreator = ({
  elevationDegree,
  interactionType,
}) => {
  const elevation = convertInteractionToElevation(
    interactionType,
    elevationDegree,
  );

  const styles = JSON.parse(JSON.stringify(getElevationStyles(elevation)));

  if (isIOS && styles.shadowOffset) {
    styles.height = styles.shadowOffset.height;
    styles.width = styles.shadowOffset.width;
    delete styles.shadowOffset;
  }

  return styles;
};

export const withRaiseEffect = (elevationDegree: ElevationDegree) => <
  P extends SubProps<InteractionStateProps> & ViewProps
>(
  WrappedComponent: React.ComponentType<P>,
): React.ComponentType<P> =>
  reflexComponent<P>({ wrapped: WrappedComponent })(
    class WithRaiseEffect extends React.Component<P> {
      public static getDerivedStateFromProps(
        props: P,
        state: RaisedComponentState,
      ) {
        const { interactionState } = props.componentProps;
        const interactionType = interactionState.type;
        const { animationKeyframe, isAnimating } = state;

        const staticRaiseStyles = createRaiseStyles(
          StyleSheet.flatten(props.style),
        );

        if (
          interactionType === InteractionType.DISABLED &&
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
          interactionType === InteractionType.HOVERED &&
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
          interactionType === InteractionType.FOCUSED &&
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
          interactionType === InteractionType.PRESSED &&
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
          interactionType === InteractionType.ENABLED &&
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
                  interactionType: InteractionType.ENABLED,
                }),
              },
              to: {
                ...createMotionRaiseStyles({
                  elevationDegree,
                  interactionType: InteractionType.DISABLED,
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
                  interactionType: InteractionType.HOVERED,
                }),
              },
              to: {
                ...createMotionRaiseStyles({
                  elevationDegree,
                  interactionType: InteractionType.ENABLED,
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
                  interactionType: InteractionType.ENABLED,
                }),
              },
              to: {
                ...createMotionRaiseStyles({
                  elevationDegree,
                  interactionType: InteractionType.FOCUSED,
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
                  interactionType: InteractionType.ENABLED,
                }),
              },
              to: {
                ...createMotionRaiseStyles({
                  elevationDegree,
                  interactionType: InteractionType.HOVERED,
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
                  interactionType: InteractionType.HOVERED,
                }),
              },
              to: {
                ...createMotionRaiseStyles({
                  elevationDegree,
                  interactionType: InteractionType.PRESSED,
                }),
              },
            });
            await delay(250);
            if (this.state.isAnimating) this.animationComplete();
          },
        });
        // @ts-ignore Property 'displayName' does not exist
        // on type '(props: {}) => any'. [2339]
        this.raiseAnimation.displayName = 'RfxRaiseAnimation';
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
                      const interactionType = this.props.componentProps
                        .interactionState.type;

                      const elevation = convertInteractionToElevation(
                        interactionType,
                        elevationDegree,
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
    },
  );
