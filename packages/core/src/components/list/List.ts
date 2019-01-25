/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

// tslint:disable-next-line:max-line-length
import { withResponsivenessProps } from '../../responsiveness/withResponsivenessProps';
import { OptionalListProps } from './ListProps';
import { SimpleList } from './SimpleList';
import { withDefaultListProps } from './withDefaultListProps';

export const List: React.ComponentType<
  OptionalListProps
> = withResponsivenessProps(withDefaultListProps(SimpleList));
