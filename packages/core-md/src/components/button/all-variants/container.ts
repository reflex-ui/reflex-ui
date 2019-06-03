/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  InteractionType,
  Size,
  SurfaceProps,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { getElevationStyles } from '@reflex-ui/elevation-md';
import { Platform } from 'react-native';

export const getAllVariantsButtonContainerProps: ViewPropsGetter<
  SurfaceProps
> = () => ({
  pointerEvents: 'box-only',
});

export const getAllVariantsButtonContainerStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  alignItems: 'center',
  borderRadius: props.size === Size.XL || props.size === Size.XXL ? 6 : 4,
  flexDirection: 'row',
  justifyContent: 'center',
  marginHorizontal: 16,
  marginVertical: 12,
  ...(props.elevation !== 0 &&
    props.elevation !== undefined &&
    props.elevation !== null &&
    getElevationStyles(props.elevation)),
  ...Platform.select({
    web: {
      cursor:
        props.interactionState.type === InteractionType.Disabled
          ? 'default'
          : 'pointer',
      outlineStyle: 'none',
    },
  }),
});
