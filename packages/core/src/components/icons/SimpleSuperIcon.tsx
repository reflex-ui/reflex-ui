import * as React from 'react';
import { TextStyle, ViewProps, ViewStyle } from 'react-native';

import { cloneElement } from '../../utils';
import { getSizedSubProps } from '../subcomponents';
import { OptionalSuperIconProps, SuperIconProps } from './SuperIconProps';
import { SuperIconSubProps } from './SuperIconSubProps';
import { TextIconProps } from './TextIconProps';

const handleIconChildren = (
  props: SuperIconProps,
  userSubProps: SuperIconSubProps,
): React.ReactNode => {
  const children = props.children as React.ReactElement<OptionalSuperIconProps>;
  if (!children) return undefined;

  if (typeof children !== 'object') {
    throw new Error('Icon children must be a valid React element.');
  }

  const iconProps: TextIconProps = {
    ...getSizedSubProps<SuperIconProps, TextIconProps, TextStyle>({
      componentProps: props,
      themes: [props.theme.icon],
      userProps: userSubProps.icon,
    }),
  };

  const styledIcon = children
    ? cloneElement({ element: children, props: iconProps })
    : undefined;

  return styledIcon;
};

export const SimpleSuperIcon: React.SFC<SuperIconProps> = (
  props: SuperIconProps,
): React.ReactElement<{}> | null => {
  let children: React.ReactNode;
  const userSubProps = props.getSubProps ? props.getSubProps(props) : {};
  if (props.children) children = handleIconChildren(props, userSubProps);
  if (props.noContainer) return <React.Fragment>{children}</React.Fragment>;

  const Container = props.theme.container.component;

  const containerProps = getSizedSubProps<
    SuperIconProps,
    ViewProps,
    ViewStyle
    // tslint:disable-next-line:ter-func-call-spacing
  >({
    componentProps: props,
    themes: [props.theme.container],
    userProps: userSubProps.container,
  });

  return (
    <Container componentProps={props} {...containerProps}>
      {children}
    </Container>
  );
};
