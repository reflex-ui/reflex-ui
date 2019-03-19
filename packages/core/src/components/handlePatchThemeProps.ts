/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentThemeProps } from './ComponentThemeProps';
import { mergeThemes } from './mergeThemes';

export const handlePatchThemeProps = <
  ComponentProps extends ComponentThemeProps<ComponentProps, ComponentTheme>,
  ComponentTheme
>(
  props: ComponentProps,
) => {
  if (!props.getPatchTheme) return props;

  return {
    ...props,
    theme: mergeThemes(props.theme, props.getPatchTheme(props)),
  };
};
