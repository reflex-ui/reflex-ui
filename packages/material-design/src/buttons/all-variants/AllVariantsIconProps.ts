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

export const allVariantsLargeButtonIconStyle: TextStyle = {
  fontSize: 19,
};

export const allVariantsLargeButtonIconProps: TextProps = {
  style: allVariantsLargeButtonIconStyle,
};

export const allVariantsLargeButtonLeftIconContainerStyle: TextStyle = {
  marginLeft: -6,
  marginRight: 10,
};

export const allVariantsLargeButtonLeftIconContainerProps: TextProps = {
  style: allVariantsLargeButtonLeftIconContainerStyle,
};

export const allVariantsLargeButtonRightIconContainerStyle: TextStyle = {
  marginLeft: 10,
  marginRight: -6,
};

export const allVariantsLargeButtonRightIconContainerProps: TextProps = {
  style: allVariantsLargeButtonRightIconContainerStyle,
};

/* all variants & regular & all states */

export const allVariantsRegularButtonIconStyle: TextStyle = {
  fontSize: 18,
};

export const allVariantsRegularButtonIconProps: TextProps = {
  style: allVariantsRegularButtonIconStyle,
};

export const allVariantsRegularButtonLeftIconContainerStyle: TextStyle = {
  marginLeft: -4,
  marginRight: 8,
};

export const allVariantsRegularButtonLeftIconContainerProps: TextProps = {
  style: allVariantsRegularButtonLeftIconContainerStyle,
};

export const allVariantsRegularButtonRightIconContainerStyle: TextStyle = {
  marginLeft: 8,
  marginRight: -4,
};

export const allVariantsRegularButtonRightIconContainerProps: TextProps = {
  style: allVariantsRegularButtonRightIconContainerStyle,
};

/* all variants & small & all states */

export const allVariantsSmallButtonIconStyle: TextStyle = {
  fontSize: 17,
};

export const allVariantsSmallButtonIconProps: TextProps = {
  style: allVariantsSmallButtonIconStyle,
};

export const allVariantsSmallButtonLeftIconContainerStyle: TextStyle = {
  marginLeft: -3,
  marginRight: 7,
};

export const allVariantsSmallButtonLeftIconContainerProps: TextProps = {
  style: allVariantsSmallButtonLeftIconContainerStyle,
};

export const allVariantsSmallButtonRightIconContainerStyle: TextStyle = {
  marginLeft: 7,
  marginRight: -3,
};

export const allVariantsSmallButtonRightIconContainerProps: TextProps = {
  style: allVariantsSmallButtonRightIconContainerStyle,
};

/* all variants & xlarge & all states */

export const allVariantsXLargeButtonIconStyle: TextStyle = {
  fontSize: 20,
};

export const allVariantsXLargeButtonIconProps: TextProps = {
  style: allVariantsXLargeButtonIconStyle,
};

export const allVariantsXLargeButtonLeftIconContainerStyle: TextStyle = {
  marginLeft: -8,
  marginRight: 12,
};

export const allVariantsXLargeButtonLeftIconContainerProps: TextProps = {
  style: allVariantsXLargeButtonLeftIconContainerStyle,
};

export const allVariantsXLargeButtonRightIconContainerStyle: TextStyle = {
  marginLeft: 12,
  marginRight: -8,
};

export const allVariantsXLargeButtonRightIconContainerProps: TextProps = {
  style: allVariantsXLargeButtonRightIconContainerStyle,
};

/* all variants & xsmall & all states */

export const allVariantsXSmallButtonIconStyle: TextStyle = {
  fontSize: 15,
};

export const allVariantsXSmallButtonIconProps: TextProps = {
  style: allVariantsXSmallButtonIconStyle,
};

export const allVariantsXSmallButtonLeftIconContainerStyle: TextStyle = {
  marginLeft: -2,
  marginRight: 6,
};

export const allVariantsXSmallButtonLeftIconContainerProps: TextProps = {
  style: allVariantsXSmallButtonLeftIconContainerStyle,
};

export const allVariantsXSmallButtonRightIconContainerStyle: TextStyle = {
  marginLeft: 6,
  marginRight: -2,
};

export const allVariantsXSmallButtonRightIconContainerProps: TextProps = {
  style: allVariantsXSmallButtonRightIconContainerStyle,
};
