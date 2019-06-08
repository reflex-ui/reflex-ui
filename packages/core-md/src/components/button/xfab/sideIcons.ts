/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  ComponentThemeGetter,
  RfxSvgTheme,
  SizedData,
  SvgPropsGetter,
} from '@reflex-ui/core';
import { SvgProps } from 'react-native-svg';

import {
  getAllVariantsButtonLeadingIconProps,
  getAllVariantsButtonTrailingIconProps,
} from '../all-variants/sideIcons';

export const xfabButtonLeadingIconSizedProps: SizedData<SvgProps> = {
  xxsmall: { height: 16, width: 16 },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: { height: 18, width: 18 },
  small: { height: 22, width: 22 },
  medium: { height: 24, width: 24 },
  large: { height: 28, width: 28 },
  xlarge: { height: 32, width: 32 },
  xxlarge: { height: 40, width: 40 },
};

export const getXFabButtonLeadingIconProps: SvgPropsGetter<
  ButtonProps
> = props => ({
  ...getAllVariantsButtonLeadingIconProps(props),
  ...(props.size && xfabButtonLeadingIconSizedProps[props.size]),
});

export const getXFabButtonTrailingIconProps: SvgPropsGetter<
  ButtonProps
> = props => ({
  ...getAllVariantsButtonTrailingIconProps(props),
  ...(props.size && xfabButtonLeadingIconSizedProps[props.size]),
});

export const getXfabButtonLeadingIconTheme: ComponentThemeGetter<
  ButtonProps,
  RfxSvgTheme
> = (props): RfxSvgTheme => ({
  svg: {
    getProps: () => getXFabButtonLeadingIconProps(props),
  },
});

export const getXfabButtonTrailingIconTheme: ComponentThemeGetter<
  ButtonProps,
  RfxSvgTheme
> = (props): RfxSvgTheme => ({
  svg: {
    getProps: () => getXFabButtonTrailingIconProps(props),
  },
});
