/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ImageStyleGetter,
  RfxSizedImageProps,
  RfxSizedImageTheme,
  Size,
} from '@reflex-ui/core';

import { avatarSizedStyle } from '../avatar/theme';
import { getCommonRfxImageStyle } from '../image/theme';

export const getAvatarImageStyle: ImageStyleGetter<
  RfxSizedImageProps
> = props => {
  const viewStyle = avatarSizedStyle[props.size || Size.M];
  return {
    ...getCommonRfxImageStyle(props),
    borderRadius: viewStyle.borderRadius,
    height: viewStyle.height,
    width: viewStyle.width,
  };
};

export const avatarImageTheme: RfxSizedImageTheme = {
  image: {
    getStyle: getAvatarImageStyle,
  },
};
