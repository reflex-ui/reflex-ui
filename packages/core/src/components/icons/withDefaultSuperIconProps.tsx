import * as React from 'react';

import { ColorTheme, PaletteThemeContext } from '../../palette';
import { Size } from '../../Size';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { reflexComponent } from '../reflexComponent';
import { OptionalSuperIconProps, SuperIconProps } from './SuperIconProps';

// prettier-ignore
export const withDefaultSuperIconProps = (
  WrappedComponent: React.ComponentType<SuperIconProps>,
): React.ComponentType<OptionalSuperIconProps> => reflexComponent<
OptionalSuperIconProps
>({ name: 'WithDefaultSuperIconProps', wrapped: WrappedComponent })(props => (
  <PaletteThemeContext.Consumer>
    {paletteTheme => (
      <ComponentsThemeContext.Consumer>
        {(componentsTheme) => {
          const propsWithDefaults: SuperIconProps = {
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
));
