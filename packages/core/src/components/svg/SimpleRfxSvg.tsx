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
import { resolveChildProps } from '../children/resolveChildProps';
import { reflexComponent } from '../reflexComponent';
import { DefaultViewChild } from '../view';
import { RfxSvgProps, RfxSvgPropsOptional } from './RfxSvgProps';
import { RfxSvgTheme } from './RfxSvgTheme';

export const extractSvgPropsFromRfxSvgProps = (
  props: RfxSvgProps,
): SvgProps => {
  const {
    children,
    colorTheme,
    getPatchTheme,
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
  patchTheme: RfxSvgTheme | undefined,
): React.ReactNode => {
  const children = props.children as React.ReactElement<RfxSvgPropsOptional>;
  if (!children) return undefined;

  if (typeof children !== 'object') {
    throw new Error('SVG children must be a valid React element.');
  }

  const svgProps = extractSvgPropsFromRfxSvgProps(props);

  const themeProps = resolveChildProps<RfxSvgProps, ViewProps, ViewStyle>({
    componentProps: props,
    patchTheme: patchTheme && patchTheme.svg,
    theme: props.theme.svg,
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
  const patchTheme = props.getPatchTheme && props.getPatchTheme(props);

  let newProps = props;
  if (props.theme.getProps || (patchTheme && patchTheme.getProps)) {
    newProps = {
      ...newProps,
      ...((props.theme.getProps && props.theme.getProps(props)) || {}),
      ...((patchTheme && patchTheme.getProps && patchTheme.getProps(props)) ||
        {}),
    };
  }

  if (newProps.children) children = handleSvgChildren(newProps, patchTheme);
  if (newProps.skipContainer) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  const Container =
    (patchTheme && patchTheme.container && patchTheme.container.component) ||
    (newProps.theme.container && newProps.theme.container.component) ||
    DefaultViewChild;

  const containerProps = resolveChildProps<RfxSvgProps, ViewProps, ViewStyle>({
    componentProps: newProps,
    patchTheme: patchTheme && patchTheme.container,
    theme: newProps.theme.container,
  });

  return (
    <Container componentProps={newProps} {...containerProps}>
      {children}
    </Container>
  );
});
