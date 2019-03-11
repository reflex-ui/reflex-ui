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
import { reflexComponent } from '../reflexComponent';
import { getSubProps } from '../subcomponents';
import { RfxSvgProps, RfxSvgPropsOptional } from './RfxSvgProps';
import { RfxSvgSubProps } from './RfxSvgSubProps';

export const extractSvgPropsFromRfxSvgProps = (
  props: RfxSvgProps,
): SvgProps => {
  const {
    children,
    colorTheme,
    // tslint:disable-next-line:no-shadowed-variable
    getSubProps,
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
  userSubProps: RfxSvgSubProps,
): React.ReactNode => {
  const children = props.children as React.ReactElement<RfxSvgPropsOptional>;
  if (!children) return undefined;

  if (typeof children !== 'object') {
    throw new Error('SVG children must be a valid React element.');
  }

  const svgProps = extractSvgPropsFromRfxSvgProps(props);

  const themeProps = getSubProps<RfxSvgProps, SvgProps, ViewStyle>({
    componentProps: props,
    theme: props.theme.svg,
    userProps: userSubProps.svg,
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
  const userSubProps = props.getSubProps ? props.getSubProps(props) : {};
  if (props.children) children = handleSvgChildren(props, userSubProps);
  if (props.skipContainer) return <React.Fragment>{children}</React.Fragment>;

  const Container = props.theme.container.component;

  const containerProps = getSubProps<RfxSvgProps, ViewProps, ViewStyle>({
    componentProps: props,
    theme: props.theme.container,
    userProps: userSubProps.container,
  });

  return (
    <Container componentProps={props} {...containerProps}>
      {children}
    </Container>
  );
});
