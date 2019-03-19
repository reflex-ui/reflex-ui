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
import { propsPipe } from '../../utils/propsPipe';
import { getPropsAndStyleFromTheme } from '../getPropsAndStyleFromTheme';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { handleThemeGetProps } from '../handleThemeGetProps';
import { reflexComponent } from '../reflexComponent';
import { validateNoStyleProps } from '../validateNoStyleProps';
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
  if (!props.children) return undefined;
  const children = props.children as React.ReactElement<RfxSvgPropsOptional>;

  if (typeof children !== 'object') {
    throw new Error('Rfx: SVG children must be a valid React element.');
  }

  const svgPropsFromTheme = getPropsAndStyleFromTheme(props, props.theme.svg);
  const svgProps = extractSvgPropsFromRfxSvgProps(props);
  const mergedProps = merge({}, svgPropsFromTheme, svgProps);

  const styledSvg = children
    ? cloneElement({ element: children, props: mergedProps })
    : undefined;

  return styledSvg;
};

export const SimpleRfxSvg = reflexComponent<RfxSvgProps>({
  name: 'SimpleRfxSvg',
})((props: RfxSvgProps) => {
  validateNoStyleProps(props);
  const newProps = propsPipe<RfxSvgProps>([
    handlePatchThemeProps,
    handleThemeGetProps,
    handleChildrenProps,
  ])(props);
  const { theme } = newProps;

  let children: React.ReactNode;
  if (newProps.children) children = handleSvgChildren(newProps);
  if (newProps.skipContainer) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  const Container =
    (theme.container && theme.container.component) || DefaultView;
  const viewProps = getPropsAndStyleFromTheme(newProps, theme.container);

  return (
    <Container complexComponentProps={newProps} {...viewProps}>
      {children}
    </Container>
  );
});
