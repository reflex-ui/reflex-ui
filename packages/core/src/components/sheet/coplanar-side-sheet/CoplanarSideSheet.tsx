/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef, Ref } from 'react';
import { View } from 'react-native';

import { MissingComponentThemeError } from '../../../errors';
import { useOnLayout } from '../../../responsiveness/useOnLayout';
import { useOpenCloseTransition } from '../../../transition';
import { useComponentsTheme } from '../../ComponentsTheme';
import { processComponent } from '../../processComponent';
import { processComponentProps } from '../../processComponentProps';
import { processThemeAndStyleProps } from '../../processThemeAndStyleProps';
import { renderRfxViewComponent } from '../../view/renderRfxViewComponent';
import { useShouldProvideColor } from '../../view/useShouldProvideColor';
import {
  CoplanarSideSheetProps,
  CoplanarSideSheetPropsOptional,
} from './CoplanarSideSheetProps';
import { CoplanarSideSheetTheme } from './CoplanarSideSheetTheme';
import { CoplanarSideSheetVariant } from './CoplanarSideSheetVariant';
// tslint:disable-next-line:max-line-length
import { useDefaultCoplanarSideSheetProps } from './useDefaultCoplanarSideSheetProps';

const useTheme = (
  theme?: CoplanarSideSheetTheme,
  variant: CoplanarSideSheetVariant = CoplanarSideSheetVariant.Start,
): CoplanarSideSheetTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (
    componentsTheme.coplanarSideSheet === undefined ||
    componentsTheme.coplanarSideSheet === null
  ) {
    throw new MissingComponentThemeError('<CoplanarSideSheet>');
  }

  return componentsTheme.coplanarSideSheet[variant];
};

let CoplanarSideSheet: React.ComponentType<
  CoplanarSideSheetPropsOptional
> = forwardRef((props: CoplanarSideSheetPropsOptional, ref: Ref<View>) => {
  let newProps: CoplanarSideSheetProps = useDefaultCoplanarSideSheetProps(
    props,
    useTheme(props.theme, props.variant),
  );
  newProps = { ...newProps, ...useOnLayout(newProps) };
  newProps = { ...newProps, ...useOpenCloseTransition(newProps) };
  newProps = processComponentProps(newProps);
  newProps = processThemeAndStyleProps(newProps, newProps.theme.view);

  const { theme } = newProps;
  const Component =
    theme.view && theme.view.getComponent && theme.view.getComponent(newProps);
  const shouldProvideColor = useShouldProvideColor(newProps.paletteColor);

  return renderRfxViewComponent({
    Component,
    props: newProps,
    ref,
    shouldProvideColor,
  });
});

CoplanarSideSheet = processComponent<CoplanarSideSheetPropsOptional>(
  CoplanarSideSheet,
  {
    name: 'CoplanarSideSheet',
  },
);

export { CoplanarSideSheet };
