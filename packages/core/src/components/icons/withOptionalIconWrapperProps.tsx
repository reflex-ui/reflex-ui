import * as React from 'react';

import { Size } from '../../Size';
import { ColorTheme, ThemeContext } from '../../theming';
import { IconWrapperProps, OptionalIconWrapperProps } from './IconWrapperProps';

export const withOptionalIconWrapperProps = (
  WrappedComponent: React.ComponentType<IconWrapperProps>,
): React.ComponentType<OptionalIconWrapperProps> =>
  class IconWrapperWithOptionalProps extends React.Component<
    OptionalIconWrapperProps
  > {
    public render() {
      return (
        // prettier-ignore
        <ThemeContext.Consumer>
          {(theme) => {
            const props: IconWrapperProps = {
              colorTheme: ColorTheme.SECONDARY_NORMAL,
              size: Size.M,
              theme,
              ...this.props,
            };

            return <WrappedComponent {...props} />;
          }}
        </ThemeContext.Consumer>
      );
    }
  };
