import {
  ButtonProps,
  getThemedColor,
  OptionalInteractiveSubTheme,
  OptionalSizedSubcomponentTheme,
  OptionalTextTheme,
  TextPropsGetter,
  TextStyleGetter,
} from '@reflex-ui/core';

export const getContainedButtonTextColorStyle: TextStyleGetter<ButtonProps> = ({
  colorTheme,
  interactivityState,
  paletteTheme,
}) => ({
  color: getThemedColor({
    colorTheme,
    interactivityType: interactivityState.type,
    onColor: true,
    paletteTheme,
  }),
});

export const getContainedButtonTextProps: TextPropsGetter<ButtonProps> = (
  props: ButtonProps,
) => ({
  style: getContainedButtonTextStyle(props),
});

export const getContainedButtonTextStyle: TextStyleGetter<ButtonProps> = (
  props: ButtonProps,
) => ({
  ...getContainedButtonTextColorStyle(props),
});

export const containedStaticButtonTextTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      getProps: getContainedButtonTextProps,
    },
  },
};
