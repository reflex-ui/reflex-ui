/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  OptionalSuperIconProps,
  reflexComponent,
  SuperIcon,
} from '@reflex-ui/core';
import * as React from 'react';
// @ts-ignore
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const Icon = reflexComponent<OptionalSuperIconProps & { name: string }>({
  name: 'MdIcon',
})((props: OptionalSuperIconProps & { name: string }) => {
  const { name, ...otherProps } = props;
  return (
    <SuperIcon {...otherProps}>
      <MaterialIcons name={name} />
    </SuperIcon>
  );
});

export { Icon };
