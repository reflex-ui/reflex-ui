import * as React from 'react';

import { ColorTheme, PaletteThemeContext } from '../../palette';
import { Size } from '../../Size';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
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
            paletteTheme,
            size: Size.M,
            theme: componentsTheme.icon,
            ...props,
          };

          return <WrappedComponent {...propsWithDefaults} />;
        }}
      </ComponentsThemeContext.Consumer>
    )}
  </PaletteThemeContext.Consumer>
);
