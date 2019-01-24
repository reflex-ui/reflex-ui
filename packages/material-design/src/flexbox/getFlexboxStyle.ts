/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { FlexboxProps, ViewStyleGetter } from '@reflex-ui/core';

export const getFlexboxStyle: ViewStyleGetter<FlexboxProps> = ({
  alignContent,
  alignItems,
  alignSelf,
  flex,
  flexBasis,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  justifyContent,
}) => ({
  ...(alignContent ? { alignContent } : {}),
  ...(alignItems ? { alignItems } : {}),
  ...(alignSelf ? { alignSelf } : {}),
  ...(flex ? { flex } : {}),
  ...(flexBasis ? { flexBasis } : {}),
  ...(flexDirection ? { flexDirection } : {}),
  ...(flexGrow ? { flexGrow } : {}),
  ...(flexShrink ? { flexShrink } : {}),
  ...(flexWrap ? { flexWrap } : {}),
  ...(justifyContent ? { justifyContent } : {}),
});
