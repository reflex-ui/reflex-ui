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
import { FlexSvgProps, FlexSvgPropsOptional } from './FlexSvgProps';
import { FlexSvgSubProps } from './FlexSvgSubProps';

export const extractSvgPropsFromFlexSvgProps = (
  props: FlexSvgProps,
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
  props: FlexSvgProps,
  userSubProps: FlexSvgSubProps,
): React.ReactNode => {
  const children = props.children as React.ReactElement<FlexSvgPropsOptional>;
  if (!children) return undefined;

  if (typeof children !== 'object') {
    throw new Error('SVG children must be a valid React element.');
  }

  const svgProps = extractSvgPropsFromFlexSvgProps(props);

  const themeProps = getSubProps<FlexSvgProps, SvgProps, ViewStyle>({
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

export const SimpleFlexSvg = reflexComponent<FlexSvgProps>({
  name: 'SimpleFlexSvg',
})((props: FlexSvgProps) => {
  let children: React.ReactNode;
  const userSubProps = props.getSubProps ? props.getSubProps(props) : {};
  if (props.children) children = handleSvgChildren(props, userSubProps);
  if (props.skipContainer) return <React.Fragment>{children}</React.Fragment>;

  const Container = props.theme.container.component;

  const containerProps = getSubProps<FlexSvgProps, ViewProps, ViewStyle>({
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
