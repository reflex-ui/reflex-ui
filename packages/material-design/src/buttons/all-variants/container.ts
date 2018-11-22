import {
  ButtonProps,
  getSizedMarginStyle,
  OptionalInteractiveSubTheme,
  OptionalSizedSubcomponentTheme,
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

// tslint:disable-next-line:max-line-length
export const allVariantsStaticButtonContainerTheme: OptionalSizedSubcomponentTheme<
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
