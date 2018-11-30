/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  getSizedMarginStyle,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalViewTheme,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { Platform } from 'react-native';
import { buttonSizedMarginStyle } from './buttonSizedMarginStyle';

// tslint:disable-next-line:max-line-length
export const getAllVariantsAllSizesAllStatesButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getAllVariantsAllSizesAllStatesButtonContainerStyle(props),
});

// tslint:disable-next-line:max-line-length
export const getAllVariantsAllSizesAllStatesButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  flexGrow: props.fullWidth ? 1 : undefined,
  ...getSizedMarginStyle(buttonSizedMarginStyle)(props),
});

export const allVariantsButtonContainerTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      getProps: getAllVariantsAllSizesAllStatesButtonContainerProps,
      props: {
        pointerEvents: 'box-only',
        style: {
          alignItems: 'center',
          borderRadius: 4,
          flexDirection: 'row',
          justifyContent: 'center',
          ...Platform.select({
            web: {
              cursor: 'pointer',
              outline: 'none',
            },
          }),
        },
      },
    },
    disabled: {
      props: {
        style: {
          ...Platform.select({
            web: {
              cursor: 'default',
            },
          }),
        },
      },
    },
  },
  xlarge: {
    allStates: {
      props: {
        style: {
          borderRadius: 6,
        },
      },
    },
  },
};
