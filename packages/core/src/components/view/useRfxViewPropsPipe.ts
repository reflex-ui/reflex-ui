/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useOnLayout } from '../../responsiveness/useOnLayout';
import { ComponentChildrenProps } from '../ComponentChildrenProps';
import { ComponentThemeProps } from '../ComponentThemeProps';
import { getProcessedChildren } from '../getProcessedChildren';
import { getPropsFromTheme } from '../getPropsFromTheme';
import { getStyleFromTheme } from '../getStyleFromTheme';
import { mergeStyles } from '../mergeStyles';
import { mergeThemeAndPatchTheme } from '../mergeThemeAndPatchTheme';
import { RfxViewPropsBase } from './RfxViewProps';

export const useRfxViewPropsPipe = <
  Props extends RfxViewPropsBase &
    ComponentThemeProps<Props, Theme> &
    ComponentChildrenProps<Props>,
  Theme
>(
  props: Props,
): Props => {
  let newProps = { ...props, ...useOnLayout(props) };
  newProps = { ...newProps, theme: mergeThemeAndPatchTheme(newProps) };
  newProps = { ...newProps, children: getProcessedChildren(newProps) };
  newProps = { ...getPropsFromTheme(newProps, newProps.theme), ...newProps };
  const styleFromTheme = getStyleFromTheme(newProps, newProps.theme);
  const mergedStyles = mergeStyles(newProps.style, styleFromTheme);
  newProps = { ...newProps, style: mergedStyles };
  return newProps;
};
