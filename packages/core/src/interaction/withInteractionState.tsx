/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { GestureResponderEvent } from 'react-native';

import { reflexComponent } from '../components/reflexComponent';
import { isWeb } from '../utils';
import { InteractionEvent } from './InteractionEvent';
import { InteractionProps, InteractionPropsOptional } from './InteractionProps';
import { InteractionState } from './InteractionState';
import { InteractionStateContext } from './InteractionStateContext';
import { InteractionType } from './InteractionType';

interface State {
  readonly interactionEvent?: InteractionEvent;
  readonly interactionState: InteractionState;
  readonly isFocusing: boolean;
  readonly isHovering: boolean;
  readonly isPressing: boolean;
}

export const withInteractionState = <P extends InteractionPropsOptional>(
  WrappedComponent: React.ComponentType<P>,
): React.ComponentType<P> =>
  reflexComponent<P>({ wrapped: WrappedComponent })(
    class WithInteractionState extends React.Component<P, State> {
      public readonly state: State = {
        interactionEvent: undefined,
        interactionState: { type: InteractionType.Disabled },
        isFocusing: false,
        isHovering: false,
        isPressing: false,
      };

      public render(): JSX.Element {
        if (this.props.activated && this.props.disabled) {
          throw new Error(
            [
              'Rfx.WithInteractionState: activated and disabled props',
              ' cannot be both true.',
            ].join(''),
          );
        }

        return (
          <InteractionStateContext.Consumer>
            {inheritedInteractionState => {
              const interactionState =
                inheritedInteractionState &&
                inheritedInteractionState.type === InteractionType.Disabled
                  ? inheritedInteractionState
                  : this.getInteractionState();

              const disabled =
                interactionState.type === InteractionType.Disabled;

              const interactionProps: InteractionProps = {
                disabled,
                interactionState,
                onBlur: isWeb ? this.onBlur : undefined,
                onFocus: isWeb ? this.onFocus : undefined,
                onMouseEnter: isWeb ? this.onMouseEnter : undefined,
                onMouseLeave: isWeb ? this.onMouseLeave : undefined,
                onPressIn: this.onPressIn,
                onPressOut: this.onPressOut,
              };

              return (
                <InteractionStateContext.Provider value={interactionState}>
                  <WrappedComponent {...this.props} {...interactionProps} />
                </InteractionStateContext.Provider>
              );
            }}
          </InteractionStateContext.Consumer>
        );
      }

      private getInteractionState = (): InteractionState => {
        if (this.props.activated) {
          return {
            event: this.state.interactionEvent,
            type: InteractionType.Activated,
          };
        }
        if (this.props.disabled) {
          return {
            event: this.state.interactionEvent,
            type: InteractionType.Disabled,
          };
        }
        if (this.state.isPressing) {
          return {
            event: this.state.interactionEvent,
            type: InteractionType.Pressed,
          };
        }
        if (this.state.isFocusing) {
          return {
            event: this.state.interactionEvent,
            type: InteractionType.Focused,
          };
        }
        if (this.state.isHovering) {
          return {
            event: this.state.interactionEvent,
            type: InteractionType.Hovered,
          };
        }
        return {
          event: this.state.interactionEvent,
          type: InteractionType.Enabled,
        };
      };

      private onBlur = (event: React.FocusEvent): void => {
        if (this.props.disabled || !this.state.isFocusing) return;

        if (!this.props.activated) {
          this.setState({ interactionEvent: undefined, isFocusing: false });
        }
        if (this.props.onBlur) this.props.onBlur(event);
      };

      private onFocus = (event: React.FocusEvent): void => {
        if (
          this.props.disabled ||
          this.state.isFocusing ||
          this.state.isPressing
        ) {
          return;
        }

        if (!this.props.activated) {
          this.setState({ interactionEvent: event, isFocusing: true });
        }
        if (this.props.onFocus) this.props.onFocus(event);
      };

      private onMouseEnter = (event: React.MouseEvent): void => {
        if (this.props.disabled || this.state.isHovering) {
          return;
        }

        if (!this.props.activated) {
          this.setState({ interactionEvent: event, isHovering: true });
        }
        if (this.props.onMouseEnter) this.props.onMouseEnter(event);
      };

      private onMouseLeave = (event: React.MouseEvent): void => {
        if (this.props.disabled || !this.state.isHovering) {
          return;
        }

        if (!this.props.activated) {
          this.setState({ interactionEvent: undefined, isHovering: false });
        }
        if (this.props.onMouseLeave) this.props.onMouseLeave(event);
      };

      private onPressIn = (event: GestureResponderEvent): void => {
        if (this.props.disabled || this.state.isPressing) {
          return;
        }

        if (!this.props.activated) {
          this.setState({ interactionEvent: event, isPressing: true });
        }
        if (this.props.onPressIn) this.props.onPressIn(event);
      };

      private onPressOut = (event: GestureResponderEvent): void => {
        if (this.props.disabled || !this.state.isPressing) {
          return;
        }

        if (!this.props.activated) {
          this.setState({ interactionEvent: undefined, isPressing: false });
        }
        if (this.props.onPressOut) this.props.onPressOut(event);
      };
    },
  );
