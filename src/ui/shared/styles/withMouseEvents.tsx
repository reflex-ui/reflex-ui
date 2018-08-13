import * as React from 'react';

interface IState {
  isHovering: boolean;
  isPressing: boolean;
}

export type IWithMouseEvents = <P>(
  WrappedComponent: React.ComponentType<P>,
) => React.ComponentType<P>;

const withMouseEvents = <P extends any>(
  WrappedComponent: React.ComponentType<P>,
): React.ComponentType<P> =>
  class MouseEventsToProps extends React.Component<P, IState> {
    public readonly state: IState = { isHovering: false, isPressing: false };

    public render(): JSX.Element {
      return (
        <WrappedComponent
          isHovering={this.state.isHovering}
          isPressing={this.state.isPressing}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onPressIn={this.onPressIn}
          onPressOut={this.onPressOut}
          {...this.props}
        />
      );
    }

    private onMouseEnter = (): void => {
      if (this.state.isHovering) return;
      // tslint:disable-next-line:no-console
      console.log('MouseEventsToProps().onMouseEnter');
      this.setState({ isHovering: true });
    };

    private onMouseLeave = (): void => {
      if (!this.state.isHovering) return;
      // tslint:disable-next-line:no-console
      console.log('MouseEventsToProps().onMouseLeave');
      this.setState({ isHovering: false });
    };

    private onPressIn = (): void => {
      if (this.state.isPressing) return;
      // tslint:disable-next-line:no-console
      console.log('MouseEventsToProps().onPressIn');
      this.setState({ isPressing: true });
    };

    private onPressOut = (): void => {
      if (!this.state.isPressing) return;
      // tslint:disable-next-line:no-console
      console.log('MouseEventsToProps().onPressOut');
      this.setState({ isPressing: false });
    };
  };

export default withMouseEvents;
