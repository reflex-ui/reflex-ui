import { Platform, TextProps, TextStyle } from 'react-native';

/* all variants & all sizes & all states */

export const allVariantsCommonButtonIconStyle: TextStyle = {
  ...Platform.select<TextStyle>({
    web: {
      userSelect: 'none',
    },
  }),
};

export const allVariantsCommonButtonIconProps: TextProps = {
  style: allVariantsCommonButtonIconStyle,
};

/* all variants & large & all states */

export const allVariantsLargeButtonSideIconStyle: TextStyle = {
  fontSize: 19,
};

export const allVariantsLargeButtonSideIconProps: TextProps = {
  style: allVariantsLargeButtonSideIconStyle,
};

export const allVariantsLargeButtonLeadingIconContainerStyle: TextStyle = {
  marginEnd: 10,
  marginStart: -6,
};

export const allVariantsLargeButtonLeadingIconContainerProps: TextProps = {
  style: allVariantsLargeButtonLeadingIconContainerStyle,
};

export const allVariantsLargeButtonTrailingIconContainerStyle: TextStyle = {
  marginEnd: -6,
  marginStart: 10,
};

export const allVariantsLargeButtonTrailingIconContainerProps: TextProps = {
  style: allVariantsLargeButtonTrailingIconContainerStyle,
};

/* all variants & regular & all states */

export const allVariantsRegularButtonSideIconStyle: TextStyle = {
  fontSize: 18,
};

export const allVariantsRegularButtonSideIconProps: TextProps = {
  style: allVariantsRegularButtonSideIconStyle,
};

export const allVariantsRegularButtonLeadingIconContainerStyle: TextStyle = {
  marginEnd: 8,
  marginStart: -4,
};

export const allVariantsRegularButtonLeadingIconContainerProps: TextProps = {
  style: allVariantsRegularButtonLeadingIconContainerStyle,
};

export const allVariantsRegularButtonTrailingIconContainerStyle: TextStyle = {
  marginEnd: -4,
  marginStart: 8,
};

export const allVariantsRegularButtonTrailingIconContainerProps: TextProps = {
  style: allVariantsRegularButtonTrailingIconContainerStyle,
};

/* all variants & small & all states */

export const allVariantsSmallButtonSideIconStyle: TextStyle = {
  fontSize: 17,
};

export const allVariantsSmallButtonSideIconProps: TextProps = {
  style: allVariantsSmallButtonSideIconStyle,
};

export const allVariantsSmallButtonLeadingIconContainerStyle: TextStyle = {
  marginEnd: 7,
  marginStart: -3,
};

export const allVariantsSmallButtonLeadingIconContainerProps: TextProps = {
  style: allVariantsSmallButtonLeadingIconContainerStyle,
};

export const allVariantsSmallButtonTrailingIconContainerStyle: TextStyle = {
  marginEnd: -3,
  marginStart: 7,
};

export const allVariantsSmallButtonTrailingIconContainerProps: TextProps = {
  style: allVariantsSmallButtonTrailingIconContainerStyle,
};

/* all variants & xlarge & all states */

export const allVariantsXLargeButtonSideIconStyle: TextStyle = {
  fontSize: 20,
};

export const allVariantsXLargeButtonSideIconProps: TextProps = {
  style: allVariantsXLargeButtonSideIconStyle,
};

export const allVariantsXLargeButtonLeadingIconContainerStyle: TextStyle = {
  marginEnd: 12,
  marginStart: -8,
};

export const allVariantsXLargeButtonLeadingIconContainerProps: TextProps = {
  style: allVariantsXLargeButtonLeadingIconContainerStyle,
};

export const allVariantsXLargeButtonTrailingIconContainerStyle: TextStyle = {
  marginEnd: -8,
  marginStart: 12,
};

export const allVariantsXLargeButtonTrailingIconContainerProps: TextProps = {
  style: allVariantsXLargeButtonTrailingIconContainerStyle,
};

/* all variants & xsmall & all states */

export const allVariantsXSmallButtonSideIconStyle: TextStyle = {
  fontSize: 15,
};

export const allVariantsXSmallButtonSideIconProps: TextProps = {
  style: allVariantsXSmallButtonSideIconStyle,
};

export const allVariantsXSmallButtonLeadingIconContainerStyle: TextStyle = {
  marginEnd: 6,
  marginStart: -2,
};

export const allVariantsXSmallButtonLeadingIconContainerProps: TextProps = {
  style: allVariantsXSmallButtonLeadingIconContainerStyle,
};

export const allVariantsXSmallButtonTrailingIconContainerStyle: TextStyle = {
  marginEnd: -2,
  marginStart: 6,
};

export const allVariantsXSmallButtonTrailingIconContainerProps: TextProps = {
  style: allVariantsXSmallButtonTrailingIconContainerStyle,
};
