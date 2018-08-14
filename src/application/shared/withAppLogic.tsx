import * as React from 'react';

import { PurpleTealTheme, ThemeContext } from '../../ui/shared/styles';

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
