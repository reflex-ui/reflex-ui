import * as React from 'react';

import { SimpleSuperIcon } from './SimpleSuperIcon';
import { OptionalSuperIconProps } from './SuperIconProps';
import { withDefaultSuperIconProps } from './withDefaultSuperIconProps';

const SuperIcon: React.ComponentType<
  OptionalSuperIconProps
> = withDefaultSuperIconProps(SimpleSuperIcon);

export { SuperIcon };
