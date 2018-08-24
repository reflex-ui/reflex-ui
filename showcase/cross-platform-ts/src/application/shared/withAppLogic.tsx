import * as React from 'react';
import { PurpleTealTheme, ThemeContext } from 'react-platform-material-design';

export type IWithMouseEvents = <P>(
  WrappedComponent: React.ComponentType<P>,
) => React.ComponentType<P>;

const withAppLogic = <P extends any>(
  WrappedComponent: React.ComponentType<P>,
): React.SFC<P> => (props: P) => (
  <ThemeContext.Provider value={PurpleTealTheme}>
    <WrappedComponent {...props} />
  </ThemeContext.Provider>
);

export default withAppLogic;
