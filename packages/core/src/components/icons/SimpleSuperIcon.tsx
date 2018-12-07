/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { TextProps, TextStyle, ViewProps, ViewStyle } from 'react-native';

import { cloneElement } from '../../utils';
import { reflexComponent } from '../reflexComponent';
import { getSubProps } from '../subcomponents';
import { OptionalSuperIconProps, SuperIconProps } from './SuperIconProps';
import { SuperIconSubProps } from './SuperIconSubProps';

const handleIconChildren = (
  props: SuperIconProps,
  userSubProps: SuperIconSubProps,
): React.ReactNode => {
  const children = props.children as React.ReactElement<OptionalSuperIconProps>;
  if (!children) return undefined;

  if (typeof children !== 'object') {
    throw new Error('Icon children must be a valid React element.');
  }

  const iconProps = getSubProps<SuperIconProps, TextProps, TextStyle>({
    componentProps: props,
    theme: props.theme.icon,
    userProps: userSubProps.icon,
  });

  const styledIcon = children
    ? cloneElement({ element: children, props: iconProps })
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
