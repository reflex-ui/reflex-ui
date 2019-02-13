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
import { OptionalSuperIconProps, SuperIconProps } from './SuperIconProps';
import { SuperIconSubProps } from './SuperIconSubProps';

export const extractSvgPropsFromSvgIconProps = (
  props: SuperIconProps,
): SvgProps => {
  const {
    children,
    colorTheme,
    // tslint:disable-next-line:no-shadowed-variable
    getSubProps,
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

const handleIconChildren = (
  props: SuperIconProps,
  userSubProps: SuperIconSubProps,
): React.ReactNode => {
  const children = props.children as React.ReactElement<OptionalSuperIconProps>;
  if (!children) return undefined;

  if (typeof children !== 'object') {
    throw new Error('Icon children must be a valid React element.');
  }

  const svgProps = extractSvgPropsFromSvgIconProps(props);

  const iconProps = getSubProps<SuperIconProps, SvgProps, ViewStyle>({
    componentProps: props,
    theme: props.theme.icon,
    userProps: userSubProps.icon,
  });

  const mergedProps = merge({}, iconProps, svgProps);

  const styledIcon = children
    ? cloneElement({ element: children, props: mergedProps })
    : undefined;

  return styledIcon;
};

export const SimpleSuperIcon = reflexComponent<SuperIconProps>({
  name: 'SimpleSuperIcon',
})((props: SuperIconProps) => {
  let children: React.ReactNode;
  const userSubProps = props.getSubProps ? props.getSubProps(props) : {};
  if (props.children) children = handleIconChildren(props, userSubProps);
  if (props.skipContainer) return <React.Fragment>{children}</React.Fragment>;

  const Container = props.theme.container.component;

  const containerProps = getSubProps<SuperIconProps, ViewProps, ViewStyle>({
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
