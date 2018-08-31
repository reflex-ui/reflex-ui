import * as React from 'react';
import { PurpleTealTheme, ThemeContext } from 'react-platform-material-design';

export type IWithAppLogic = <P extends {}>(
  WrappedComponent: React.ComponentType<P>,
) => React.ComponentType<P>;

export const withAppLogic: IWithAppLogic = WrappedComponent => props => (
  <ThemeContext.Provider value={PurpleTealTheme}>
    <WrappedComponent {...props} />
  </ThemeContext.Provider>
);
