/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import * as ReactIs from 'react-is';

import { extractPropsFromTheme } from '../children/extractPropsFromTheme';
import { mergeThemes } from '../children/mergeThemes';
import { reflexComponent } from '../reflexComponent';
import { DefaultViewChild } from '../view';
import { ListItemProps } from './ListItemProps';

export const SimpleListItem = reflexComponent<ListItemProps>({
  name: 'SimpleListItem',
})((props: ListItemProps) => {
  let children =
    props.children && typeof props.children === 'function'
      ? props.children(props)
      : props.children;

  if (ReactIs.isFragment(children) && children.props) {
    children = children.props.children;
  }

  let newProps = props;
  let mergedTheme = props.theme;

  if (
    props.getPatchTheme ||
    props.theme.getProps ||
    typeof props.children === 'function'
  ) {
    mergedTheme = mergeThemes(
      props.theme,
      props.getPatchTheme && props.getPatchTheme(props),
    );

    newProps = {
      ...newProps,
      ...((mergedTheme.getProps && mergedTheme.getProps(props)) || {}),
      children,
      theme: mergedTheme,
    };
  }

  const Container =
    (mergedTheme.container && mergedTheme.container.component) ||
    DefaultViewChild;

  const containerProps = extractPropsFromTheme(newProps, mergedTheme.container);

  return (
    <Container
      componentProps={newProps}
      onLayout={newProps.onLayout}
      {...containerProps}
    >
      {children}
    </Container>
  );
});
