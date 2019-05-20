/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef, Ref } from 'react';
import { View } from 'react-native';

import { MissingComponentThemeError } from '../../errors';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { useComponentsTheme } from '../ComponentsTheme';
import { processComponent } from '../processComponent';
import { processComponentProps } from '../processComponentProps';
import { processThemeAndStyleProps } from '../processThemeAndStyleProps';
import { renderRfxViewComponent } from '../view/renderRfxViewComponent';
import { useShouldProvideColor } from '../view/useShouldProvideColor';
import { SurfaceProps, SurfacePropsOptional } from './SurfaceProps';
import { SurfaceTheme } from './SurfaceTheme';
import { useDefaultSurfaceProps } from './useDefaultSurfaceProps';

const useTheme = (theme?: SurfaceTheme): SurfaceTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (
    componentsTheme.surface === undefined ||
    componentsTheme.surface === null
  ) {
    throw new MissingComponentThemeError('<Surface>');
  }

  return componentsTheme.surface;
};

let Surface: React.ComponentType<SurfacePropsOptional> = forwardRef(
  (props: SurfacePropsOptional, ref: Ref<View>) => {
    const theme = useTheme(props.theme);

    let newProps: SurfaceProps = useDefaultSurfaceProps(props, theme);
    newProps = { ...newProps, ...useOnLayout(newProps) };
    newProps = processComponentProps(newProps);
    newProps = processThemeAndStyleProps(newProps, newProps.theme);

    const shouldProvideColor = useShouldProvideColor(newProps.paletteColor);
    return renderRfxViewComponent({
      props: newProps,
      ref,
      shouldProvideColor,
      theme: newProps.theme,
    });
  },
);

Surface = processComponent<SurfacePropsOptional>(Surface, {
  name: 'Surface',
});

export { Surface };
