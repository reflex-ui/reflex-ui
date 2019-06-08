/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentChildrenProps } from './ComponentChildrenProps';
import { ComponentTheme } from './ComponentTheme';
import { ComponentThemeProps } from './ComponentThemeProps';
import { mergeThemeAndPatchTheme } from './mergeThemeAndPatchTheme';
import { processChildren } from './processChildren';

export const processComponentProps = <
  Props extends ComponentChildrenProps<Props> &
    ComponentThemeProps<Props, Theme>,
  // It's fine to use any here, it's a dead end that will not harm
  // client code.
  // tslint:disable-next-line:no-any
  Theme extends ComponentTheme<Props, any>
>(
  props: Props,
): Props => {
  let newProps = { ...props, theme: mergeThemeAndPatchTheme(props) };
  if (newProps.theme && newProps.theme.getProps) {
    const propsFromTheme = newProps.theme.getProps(newProps);
    if (propsFromTheme.theme || propsFromTheme.getPatchTheme) {
      throw new Error(
        [
          'ReflexUI: props returned from ComponentTheme.getProps() must not',
          'include theme or getPatchTheme properties.',
        ].join(' '),
      );
    }
    newProps = { ...newProps, ...propsFromTheme };
  }
  newProps = { ...newProps, children: processChildren(newProps) };
  return newProps;
};
