import * as React from 'react';
import { GestureResponderEvent } from 'react-native';

import { isWeb } from '../utils';
import { InteractivityEvent } from './InteractivityEvent';
import { InteractivityProps } from './InteractivityProps';
import { InteractivityState } from './InteractivityState';
import {
  InteractivityStateProps,
  OptionalInteractivityStateProps,
} from './InteractivityStateProps';
import { InteractivityType } from './InteractivityType';

interface State {
  interactivityEvent?: InteractivityEvent;
  interactivityState: InteractivityState;
  isFocusing: boolean;
  isHovering: boolean;
  isPressing: boolean;
}

export const createWithInteractivityState = <
  P extends InteractivityProps & OptionalInteractivityStateProps
>(
  WrappedComponent: React.ComponentType<P>,
): React.ComponentType<P> =>
  class WithInteractivityState extends React.Component<P, State> {
    public readonly state: State = {
      interactivityEvent: undefined,
      interactivityState: { type: InteractivityType.DISABLED },
      isFocusing: false,
      isHovering: false,
      isPressing: false,
    };

    public render(): JSX.Element {
      // tslint:disable-next-line:no-console
      console.log(
        'RaisedComponent.getDerivedStateFromProps() - getInteractivityState() ',
        this.getInteractivityState(),
      );
      const interactivityProps: InteractivityProps & InteractivityStateProps = {
        interactivityState: this.getInteractivityState(),
        onBlur: isWeb ? this.onBlur : undefined,
        onFocus: isWeb ? this.onFocus : undefined,
        onMouseEnter: isWeb ? this.onMouseEnter : undefined,
        onMouseLeave: isWeb ? this.onMouseLeave : undefined,
        onPressIn: this.onPressIn,
        onPressOut: this.onPressOut,
      };

      return <WrappedComponent {...interactivityProps} {...this.props} />;
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

    private onBlur = (): void => {
      if (!this.state.isFocusing) return;
      // tslint:disable-next-line:no-console
      console.log('WithInteractivityState().onBlur');
      this.setState({ interactivityEvent: undefined, isFocusing: false });
    };

    private onFocus = (event: React.FocusEvent): void => {
      if (this.state.isFocusing || this.state.isPressing) return;
      // tslint:disable-next-line:no-console
      console.log('WithInteractivityState().onFocus');
      this.setState({ interactivityEvent: event, isFocusing: true });
    };

    private onMouseEnter = (event: React.MouseEvent): void => {
      if (this.state.isHovering) return;
      // tslint:disable-next-line:no-console
      console.log('WithInteractivityState().onMouseEnter');
      this.setState({ interactivityEvent: event, isHovering: true });
    };

    private onMouseLeave = (): void => {
      if (!this.state.isHovering) return;
      // tslint:disable-next-line:no-console
      console.log('WithInteractivityState().onMouseLeave');
      this.setState({ interactivityEvent: undefined, isHovering: false });
    };

    private onPressIn = (event: GestureResponderEvent): void => {
      if (this.state.isPressing) return;
      // tslint:disable-next-line:no-console
      console.log('WithInteractivityState().onPressIn');
      this.setState({ interactivityEvent: event, isPressing: true });
    };

    private onPressOut = (): void => {
      if (!this.state.isPressing) return;
      // tslint:disable-next-line:no-console
      console.log('WithInteractivityState().onPressOut');
      this.setState({ interactivityEvent: undefined, isPressing: false });
    };
  };
