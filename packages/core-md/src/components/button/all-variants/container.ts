/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  InteractionType,
  Size,
  SurfacePropsBase,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { Platform } from 'react-native';

export const getAllVariantsButtonContainerProps: ViewPropsGetter<
  SurfacePropsBase
> = () => ({
  pointerEvents: 'box-only',
});

export const getAllVariantsButtonContainerStyle: ViewStyleGetter<
  SurfacePropsBase
> = props => ({
  alignItems: 'center',
  borderRadius: props.size === Size.XL || props.size === Size.XXL ? 6 : 4,
  flexDirection: 'row',
  justifyContent: 'center',
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
