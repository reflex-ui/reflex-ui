/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import merge from 'lodash/merge';
import * as React from 'react';
import { ViewProps, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { cloneElement } from '../../utils';
import { resolveChildProps } from '../children';
import { reflexComponent } from '../reflexComponent';
import { DefaultViewChild } from '../view';
import { RfxSvgChildrenProps } from './RfxSvgChildrenProps';
import { RfxSvgProps, RfxSvgPropsOptional } from './RfxSvgProps';

export const extractSvgPropsFromRfxSvgProps = (
  props: RfxSvgProps,
): SvgProps => {
  const {
    children,
    colorTheme,
    getChildrenProps,
    interactionState,
    invertColor,
    margin,
    marginBottom,
    marginEnd,
    marginHorizontal,
    marginStart,
    marginTop,
    marginVertical,
    paletteTheme,
    size,
    skipContainer,
    theme,
    ...svgProps
  } = props;

  return svgProps;
};

const handleSvgChildren = (
  props: RfxSvgProps,
  userChildrenProps: RfxSvgChildrenProps,
): React.ReactNode => {
  const children = props.children as React.ReactElement<RfxSvgPropsOptional>;
  if (!children) return undefined;

  if (typeof children !== 'object') {
    throw new Error('SVG children must be a valid React element.');
  }

  const svgProps = extractSvgPropsFromRfxSvgProps(props);

  const themeProps = resolveChildProps<RfxSvgProps, SvgProps, ViewStyle>({
    componentProps: props,
    theme: props.theme.svg,
    userProps: userChildrenProps.svg,
  });

  const mergedProps = merge({}, themeProps, svgProps);

  const styledSvg = children
    ? cloneElement({ element: children, props: mergedProps })
    : undefined;

  return styledSvg;
};

export const SimpleRfxSvg = reflexComponent<RfxSvgProps>({
  name: 'SimpleRfxSvg',
})((props: RfxSvgProps) => {
  let children: React.ReactNode;
  const userChildrenProps = props.getChildrenProps
    ? props.getChildrenProps(props)
    : {};
  if (props.children) children = handleSvgChildren(props, userChildrenProps);
  if (props.skipContainer) return <React.Fragment>{children}</React.Fragment>;

  const Container = props.theme.container.component || DefaultViewChild;

  const containerProps = resolveChildProps<RfxSvgProps, ViewProps, ViewStyle>({
    componentProps: props,
    theme: props.theme.container,
    userProps: userChildrenProps.container,
  });

  return (
    <Container componentProps={props} {...containerProps}>
      {children}
    </Container>
  );
});
