/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentThemeProps } from './ComponentThemeProps';
import { mergeThemes } from './mergeThemes';

export const mergeThemeAndPatchTheme = <
  ComponentProps extends ComponentThemeProps<ComponentProps, ComponentTheme>,
  ComponentTheme
>(
  props: ComponentProps,
): ComponentTheme => {
  const { getPatchTheme, theme } = props;
  if (getPatchTheme === undefined || getPatchTheme === null) return theme;
  return mergeThemes(theme, getPatchTheme(props));
};
