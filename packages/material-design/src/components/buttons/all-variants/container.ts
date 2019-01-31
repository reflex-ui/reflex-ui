/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  getSizedMarginStyle,
  InteractionType,
  Size,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { Platform } from 'react-native';

import { getSizingStyle } from '../../../sizing/getSizingStyle';
import { sizedSpacing } from '../../../spacing/sizedSpacing';

export const getAllVariantsButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = () => ({
  pointerEvents: 'box-only',
});

export const getAllVariantsButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  alignItems: 'center',
  borderRadius: props.size === Size.XL || props.size === Size.XXL ? 6 : 4,
  flexDirection: 'row',
  flexGrow: props.fullWidth ? 1 : undefined,
  justifyContent: 'center',
  ...Platform.select({
    web: {
      cursor:
        props.interactionState.type === InteractionType.Disabled
          ? 'default'
          : 'pointer',
      outline: 'none',
    },
  }),
  ...getSizedMarginStyle(sizedSpacing)(props),
  ...getSizingStyle(props),
});
