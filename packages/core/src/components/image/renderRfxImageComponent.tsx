/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Ref } from 'react';
import { Image, ImageProps, ImageStyle } from 'react-native';

import { extractImageProps } from '../../utils/props';
import { ComponentChildrenProps } from '../ComponentChildrenProps';
import { ComponentThemeProps } from '../ComponentThemeProps';
import { BuiltInSimpleComponentTheme } from '../SimpleComponentTheme';
import { RfxImagePropsBase } from './RfxImageProps';

export interface RfxImageComponentRendererInput<Props> {
  readonly props: Props;
  readonly ref?: Ref<Image>;
}

export const renderRfxImageComponent = <
  Props extends RfxImagePropsBase<Props, Theme> &
    ComponentThemeProps<Props, Theme> &
    ComponentChildrenProps<Props>,
  Theme extends BuiltInSimpleComponentTheme<Props, ImageProps, ImageStyle>
>(
  input: RfxImageComponentRendererInput<Props>,
): React.ReactElement => {
  const { props, ref } = input;
  const { children } = props;
  const imageProps: React.PropsWithChildren<ImageProps> = {
    ...extractImageProps(props),
    children,
  };

  // There's no support to provide a custom Image component
  // at this time.
  return <Image {...imageProps} ref={ref} />;
};
