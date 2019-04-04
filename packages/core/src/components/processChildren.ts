/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as ReactIs from 'react-is';

import { ComponentChildrenProps } from './ComponentChildrenProps';

export const processChildren = <
  ComponentProps extends ComponentChildrenProps<ComponentProps>
>(
  props: ComponentProps,
): React.ReactNode => {
  if (
    props.children === undefined ||
    props.children === null ||
    typeof props.children !== 'function'
  ) {
    return props.children;
  }

  let children: React.ReactNode = props.children(props);

  if (ReactIs.isFragment(children) && children.props) {
    children = children.props.children;
  }

  return children;
};
