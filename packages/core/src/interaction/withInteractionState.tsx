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
import { InteractionProps, OptionalInteractionProps } from './InteractionProps';
import { InteractionState } from './InteractionState';
import { InteractionType } from './InteractionType';

interface State {
  readonly interactionEvent?: InteractionEvent;
  readonly interactionState: InteractionState;
  readonly isFocusing: boolean;
  readonly isHovering: boolean;
  readonly isPressing: boolean;
}

export const withInteractionState = <P extends OptionalInteractionProps>(
  WrappedComponent: React.ComponentType<P>,
): React.ComponentType<P> =>
  reflexComponent<P>({ wrapped: WrappedComponent })(
    class WithInteractionState extends React.Component<P, State> {
      public readonly state: State = {
        interactionEvent: undefined,
        interactionState: { type: InteractionType.DISABLED },
        isFocusing: false,
        isHovering: false,
        isPressing: false,
      };

      public render(): JSX.Element {
        const interactionProps: InteractionProps = {
          interactionState: this.getInteractionState(),
          onBlur: isWeb ? this.onBlur : undefined,
          onFocus: isWeb ? this.onFocus : undefined,
          onMouseEnter: isWeb ? this.onMouseEnter : undefined,
          onMouseLeave: isWeb ? this.onMouseLeave : undefined,
          onPressIn: this.onPressIn,
          onPressOut: this.onPressOut,
        };

        return <WrappedComponent {...this.props} {...interactionProps} />;
      }

      private getInteractionState = (): InteractionState => {
        if (this.props.disabled) {
          return {
            event: this.state.interactionEvent,
            type: InteractionType.DISABLED,
          };
        }
        if (this.state.isPressing) {
          return {
            event: this.state.interactionEvent,
            type: InteractionType.PRESSED,
          };
        }
        if (this.state.isFocusing) {
          return {
            event: this.state.interactionEvent,
            type: InteractionType.FOCUSED,
          };
        }
        if (this.state.isHovering) {
          return {
            event: this.state.interactionEvent,
            type: InteractionType.HOVERED,
          };
        }
        return {
          event: this.state.interactionEvent,
          type: InteractionType.ENABLED,
        };
      };

      private onBlur = (event: React.FocusEvent): void => {
        if (!this.state.isFocusing) return;

        this.setState({ interactionEvent: undefined, isFocusing: false });
        if (this.props.onBlur) this.props.onBlur(event);
      };

      private onFocus = (event: React.FocusEvent): void => {
        if (this.state.isFocusing || this.state.isPressing) return;

        this.setState({ interactionEvent: event, isFocusing: true });
        if (this.props.onFocus) this.props.onFocus(event);
      };

      private onMouseEnter = (event: React.MouseEvent): void => {
        if (this.state.isHovering) return;

        this.setState({ interactionEvent: event, isHovering: true });
        if (this.props.onMouseEnter) this.props.onMouseEnter(event);
      };

      private onMouseLeave = (event: React.MouseEvent): void => {
        if (!this.state.isHovering) return;

        this.setState({ interactionEvent: undefined, isHovering: false });
        if (this.props.onMouseLeave) this.props.onMouseLeave(event);
      };

      private onPressIn = (event: GestureResponderEvent): void => {
        if (this.state.isPressing) return;

        this.setState({ interactionEvent: event, isPressing: true });
        if (this.props.onPressIn) this.props.onPressIn(event);
      };

      private onPressOut = (event: GestureResponderEvent): void => {
        if (!this.state.isPressing) return;

        this.setState({ interactionEvent: undefined, isPressing: false });
        if (this.props.onPressOut) this.props.onPressOut(event);
      };
    },
  );