import * as React from 'react';

import { Size } from '../../Size';
import {
  ColorTheme,
  ComponentsThemeContext,
  PaletteThemeContext,
} from '../../theming';
import { IconWrapperProps, OptionalIconWrapperProps } from './IconWrapperProps';

// prettier-ignore
export const withDefaultIconWrapperProps = (
  WrappedComponent: React.ComponentType<IconWrapperProps>,
): React.ComponentType<OptionalIconWrapperProps> => props => (
  <PaletteThemeContext.Consumer>
    {paletteTheme => (
      <ComponentsThemeContext.Consumer>
        {(componentsTheme) => {
          const propsWithDefaults: IconWrapperProps = {
            colorTheme: ColorTheme.SECONDARY_NORMAL,
            componentsTheme,
            paletteTheme,
            size: Size.M,
            ...props,
          };

          return <WrappedComponent {...propsWithDefaults} />;
        }}
      </ComponentsThemeContext.Consumer>
    )}
  </PaletteThemeContext.Consumer>
);
