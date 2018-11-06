import * as React from 'react';

import { Size } from '../../Size';
import {
  ColorTheme,
  ComponentsThemeContext,
  PaletteThemeContext,
} from '../../theming';
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
        <PaletteThemeContext.Consumer>
          {paletteTheme => (
            <ComponentsThemeContext.Consumer>
              {(componentsTheme) => {
                const props: IconWrapperProps = {
                  colorTheme: ColorTheme.SECONDARY_NORMAL,
                  componentsTheme,
                  paletteTheme,
                  size: Size.M,
                  ...this.props,
                };

                return <WrappedComponent {...props} />;
              }}
            </ComponentsThemeContext.Consumer>
          )}
        </PaletteThemeContext.Consumer>
      );
    }
  };
