/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentChildrenProps } from './ComponentChildrenProps';
import { ComponentThemeProps } from './ComponentThemeProps';
import { mergeThemeAndPatchTheme } from './mergeThemeAndPatchTheme';
import { processChildren } from './processChildren';

export const processComponentProps = <
  Props extends ComponentChildrenProps<Props> &
    ComponentThemeProps<Props, Theme>,
  Theme
>(
  props: Props,
): Props => {
  let newProps = { ...props, theme: mergeThemeAndPatchTheme(props) };
  newProps = { ...newProps, children: processChildren(newProps) };
  return newProps;
};
