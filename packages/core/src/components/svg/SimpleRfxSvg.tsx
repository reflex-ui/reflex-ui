/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import merge from 'lodash/merge';
import * as React from 'react';
import { SvgProps } from 'react-native-svg';

import { cloneElement } from '../../utils';
import { extractPropsFromTheme } from '../extractPropsFromTheme';
import { mergeThemes } from '../mergeThemes';
import { reflexComponent } from '../reflexComponent';
import { DefaultView } from '../view';
import { RfxSvgProps, RfxSvgPropsOptional } from './RfxSvgProps';

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

const handleSvgChildren = (props: RfxSvgProps): React.ReactNode => {
  const children = props.children as React.ReactElement<RfxSvgPropsOptional>;
  if (!children) return undefined;

  if (typeof children !== 'object') {
    throw new Error('SVG children must be a valid React element.');
  }

  const themeProps = extractPropsFromTheme(props, props.theme.svg);
  const svgProps = extractSvgPropsFromRfxSvgProps(props);
  const mergedProps = merge({}, themeProps, svgProps);

  const styledSvg = children
    ? cloneElement({ element: children, props: mergedProps })
    : undefined;

  return styledSvg;
};

export const SimpleRfxSvg = reflexComponent<RfxSvgProps>({
  name: 'SimpleRfxSvg',
})((props: RfxSvgProps) => {
  let newProps = props;
  let mergedTheme = props.theme;

  if (props.getPatchTheme || props.theme.getProps) {
    mergedTheme = mergeThemes(
      props.theme,
      props.getPatchTheme && props.getPatchTheme(props),
    );

    newProps = {
      ...newProps,
      ...((mergedTheme.getProps && mergedTheme.getProps(props)) || {}),
      theme: mergedTheme,
    };
  }

  let children: React.ReactNode;
  if (newProps.children) children = handleSvgChildren(newProps);
  if (newProps.skipContainer) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  const Container =
    (mergedTheme.container && mergedTheme.container.component) || DefaultView;

  const containerProps = extractPropsFromTheme(newProps, mergedTheme.container);

  return (
    <Container complexComponentProps={newProps} {...containerProps}>
      {children}
    </Container>
  );
});
