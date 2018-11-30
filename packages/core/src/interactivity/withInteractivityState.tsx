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
import { InteractivityEvent } from './InteractivityEvent';
import {
  InteractivityProps,
  OptionalInteractivityProps,
} from './InteractivityProps';
import { InteractivityState } from './InteractivityState';
import { InteractivityType } from './InteractivityType';

interface State {
  readonly interactivityEvent?: InteractivityEvent;
  readonly interactivityState: InteractivityState;
  readonly isFocusing: boolean;
  readonly isHovering: boolean;
  readonly isPressing: boolean;
}

export const withInteractivityState = <P extends OptionalInteractivityProps>(
  WrappedComponent: React.ComponentType<P>,
): React.ComponentType<P> =>
  reflexComponent<P>({ wrapped: WrappedComponent })(
    class WithInteractivityState extends React.Component<P, State> {
      public readonly state: State = {
        interactivityEvent: undefined,
        interactivityState: { type: InteractivityType.DISABLED },
        isFocusing: false,
        isHovering: false,
        isPressing: false,
      };

      public render(): JSX.Element {
        const interactivityProps: InteractivityProps = {
          interactivityState: this.getInteractivityState(),
          onBlur: isWeb ? this.onBlur : undefined,
          onFocus: isWeb ? this.onFocus : undefined,
          onMouseEnter: isWeb ? this.onMouseEnter : undefined,
          onMouseLeave: isWeb ? this.onMouseLeave : undefined,
          onPressIn: this.onPressIn,
          onPressOut: this.onPressOut,
        };

        return <WrappedComponent {...this.props} {...interactivityProps} />;
      }

      private getInteractivityState = (): InteractivityState => {
        if (this.props.disabled) {
          return {
            event: this.state.interactivityEvent,
            type: InteractivityType.DISABLED,
          };
        }
        if (this.state.isPressing) {
          return {
            event: this.state.interactivityEvent,
            type: InteractivityType.PRESSED,
          };
        }
        if (this.state.isFocusing) {
          return {
            event: this.state.interactivityEvent,
            type: InteractivityType.FOCUSED,
          };
        }
        if (this.state.isHovering) {
          return {
            event: this.state.interactivityEvent,
            type: InteractivityType.HOVERED,
          };
        }
        return {
          event: this.state.interactivityEvent,
          type: InteractivityType.ENABLED,
        };
      };

      private onBlur = (event: React.FocusEvent): void => {
        if (!this.state.isFocusing) return;

        this.setState({ interactivityEvent: undefined, isFocusing: false });
        if (this.props.onBlur) this.props.onBlur(event);
      };

      private onFocus = (event: React.FocusEvent): void => {
        if (this.state.isFocusing || this.state.isPressing) return;

        this.setState({ interactivityEvent: event, isFocusing: true });
        if (this.props.onFocus) this.props.onFocus(event);
      };

      private onMouseEnter = (event: React.MouseEvent): void => {
        if (this.state.isHovering) return;

        this.setState({ interactivityEvent: event, isHovering: true });
        if (this.props.onMouseEnter) this.props.onMouseEnter(event);
      };

      private onMouseLeave = (event: React.MouseEvent): void => {
        if (!this.state.isHovering) return;

        this.setState({ interactivityEvent: undefined, isHovering: false });
        if (this.props.onMouseLeave) this.props.onMouseLeave(event);
      };

      private onPressIn = (event: GestureResponderEvent): void => {
        if (this.state.isPressing) return;

        this.setState({ interactivityEvent: event, isPressing: true });
        if (this.props.onPressIn) this.props.onPressIn(event);
      };

      private onPressOut = (event: GestureResponderEvent): void => {
        if (!this.state.isPressing) return;

        this.setState({ interactivityEvent: undefined, isPressing: false });
        if (this.props.onPressOut) this.props.onPressOut(event);
      };
    },
  );
