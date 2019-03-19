/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComplexComponentTheme } from './ComplexComponentTheme';
import { ComponentThemeProps } from './ComponentThemeProps';
import { SimpleComponentTheme } from './SimpleComponentTheme';

export const handleThemeGetProps = <
  ComponentProps extends ComponentThemeProps<ComponentProps, ComponentTheme>,
  ComponentTheme extends
    | SimpleComponentTheme<ComponentProps, unknown, unknown>
    | ComplexComponentTheme
>(
  props: ComponentProps,
) => {
  if (!props.theme.getProps) {
    return props;
  }

  if (typeof props.theme.getProps !== 'function') {
    throw new Error(
      [
        'Rfx: Typeof theme.getProps must be a function,',
        `but received: ${typeof props.theme.getProps}`,
      ].join(' '),
    );
  }

  return {
    ...props,
    ...props.theme.getProps(props),
  };
};
