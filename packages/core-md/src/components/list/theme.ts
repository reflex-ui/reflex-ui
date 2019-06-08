/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SurfaceProps, SurfaceTheme, ViewStyleGetter } from '@reflex-ui/core';

import { getSurfaceContainerStyle } from '../surface/theme';

export const getListContainerStyle: ViewStyleGetter<SurfaceProps> = props => {
  const paddingVertical =
    props.padding === undefined && props.paddingVertical === undefined
      ? 8
      : undefined;

  return {
    ...getSurfaceContainerStyle(props),
    borderRadius: 0,
    flexWrap: props.flexWrap || 'nowrap',
    ...(paddingVertical && { paddingVertical }),
  };
};

export const listTheme: SurfaceTheme = {
  view: {
    getStyle: getListContainerStyle,
  },
};
