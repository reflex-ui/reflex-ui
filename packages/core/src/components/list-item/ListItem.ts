/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

// tslint:disable-next-line:max-line-length
import { withResponsivenessProps } from '../../responsiveness/withResponsivenessProps';
import { OptionalListItemProps } from './ListItemProps';
import { SimpleListItem } from './SimpleListItem';
import { withDefaultListItemProps } from './withDefaultListItemProps';

export const ListItem: React.ComponentType<
  OptionalListItemProps
> = withResponsivenessProps(withDefaultListItemProps(SimpleListItem));
