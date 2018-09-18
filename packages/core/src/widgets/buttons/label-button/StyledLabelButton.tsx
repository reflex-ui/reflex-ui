import * as React from 'react';
import {
  StyleSheet,
  TextStyle,
  TouchableWithoutFeedbackProps,
  ViewStyle,
} from 'react-native';

import {
  InteractivityEvent,
  InteractivityInfoProps,
  InteractivityState,
} from '../../../interactivity';
import { ColorVariant, Theme, ThemeContext } from '../../../styles';
import {
  ButtonText,
  ButtonView,
  getRegisteredTextStyle,
  getRegisteredViewStyle,
  Touchable,
} from '../../../styles/themes/PurpleTealTheme';
import { isAndroid } from '../../../utils';
import { Size } from '../../Size';

export interface ButtonStyles {
  view: ViewStyle;
  label: TextStyle;
  outerContainer: ViewStyle;
}

export interface SpecialButtonProps {
  children?: React.ReactNode;
  colorVariant: ColorVariant;
  customStyle?: ButtonStyles;
  fullWidth: boolean;
  interactivityEvent?: InteractivityEvent;
  interactivityState: InteractivityState;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  size: Size;
  theme: Theme;
  variant: Variant;
}

export interface OptionalSpecialButtonProps extends InteractivityInfoProps {
  children?: React.ReactNode;
  colorVariant?: ColorVariant;
  customStyle?: ButtonStyles;
  fullWidth?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  size?: Size;
  variant?: Variant;
}

export interface ButtonProps
  extends SpecialButtonProps,
    TouchableWithoutFeedbackProps {}

export interface OptionalButtonProps
  extends OptionalSpecialButtonProps,
    TouchableWithoutFeedbackProps {}

export enum Variant {
  CONTAINED = 'contained',
  CONTAINED_RAISED = 'containedRaised',
  DEFAULT = 'default',
  OUTLINED = 'outlined',
}

type TextTransformer = (
  props: { text: string; transformation?: string },
) => string;

export const transformText: TextTransformer = ({
  text,
  transformation = 'none',
}): string => {
  switch (transformation) {
    case 'capitalize':
      return text.replace(
        /\w\S*/g,
        w => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase(),
      );
    case 'lowercase':
      return text.toLowerCase();
    case 'uppercase':
      return text.toUpperCase();
    default:
      return text;
  }
};

const extractSpecialButtonProps = (
  props: SpecialButtonProps,
): SpecialButtonProps => {
  const {
    children,
    colorVariant,
    customStyle,
    fullWidth,
    interactivityEvent,
    interactivityState,
    leftIcon,
    rightIcon,
    size,
    theme,
    variant,
  } = props;

  return {
    children,
    colorVariant,
    customStyle,
    fullWidth,
    interactivityEvent,
    interactivityState,
    leftIcon,
    rightIcon,
    size,
    theme,
    variant,
  };
};

const extractTouchableProps = (
  props: ButtonProps,
): TouchableWithoutFeedbackProps => {
  const {
    children,
    colorVariant,
    customStyle,
    fullWidth,
    interactivityEvent,
    interactivityState,
    leftIcon,
    rightIcon,
    size,
    theme,
    variant,
    ...touchableProps
  } = props;

  return touchableProps;
};

interface ThemedButtonState {
  readonly Text: ButtonText;
  readonly Touchable: Touchable<TouchableWithoutFeedbackProps>;
  readonly View: ButtonView;
}

class ThemedButton extends React.Component<ButtonProps, ThemedButtonState> {
  constructor(props: ButtonProps) {
    super(props);
    // tslint:disable-next-line:no-console
    // console.log('ThemedButton.constructor() - props: ', props);

    // prettier-ignore
    const {
      Text,
      // tslint:disable-next-line:no-shadowed-variable
      Touchable,
      View,
    } = props.theme.components.button[props.variant];

    this.state = {
      Text,
      Touchable,
      View,
    };
  }

  public render() {
    const { children } = this.props;
    // tslint:disable-next-line:no-shadowed-variable
    const { Touchable, View } = this.state;
    const specialProps = extractSpecialButtonProps(this.props);
    const touchableProps = extractTouchableProps(this.props);

    const viewStyle = getRegisteredViewStyle(specialProps);

    return (
      <Touchable {...touchableProps}>
        <View style={viewStyle.view} {...specialProps}>
          {children && this.getChildrenComponent(children, specialProps)}
        </View>
      </Touchable>
    );
  }

  private getChildrenComponent(
    children: React.ReactNode,
    props: SpecialButtonProps,
  ): JSX.Element | React.ReactNode {
    const { Text } = this.state;

    if (
      typeof children === 'string' ||
      typeof children === 'number' ||
      typeof children === 'boolean'
    ) {
      const textStyle = getRegisteredTextStyle(props);
      let stringChildren =
        typeof children === 'string' ? children : children.toString();

      if (isAndroid) {
        stringChildren = transformText({
          text: stringChildren,
          transformation: StyleSheet.flatten(textStyle.text).textTransform,
        });
      }

      return (
        <Text style={textStyle.text} {...props}>
          {stringChildren}
        </Text>
      );
    }

    return children;
  }
}

const withOptionalButtonProps = (
  WrappedComponent: React.ComponentType<ButtonProps>,
) =>
  // tslint:disable-next-line
  class ButtonWithOptionalProps extends React.Component<OptionalButtonProps> {
    public render() {
      return (
        // prettier-ignore
        <ThemeContext.Consumer>
        {(theme) => {
          const props: ButtonProps = {
            colorVariant: ColorVariant.PRIMARY_NORMAL,
            fullWidth: false,
            interactivityState: InteractivityState.ENABLED,
            size: Size.REGULAR,
            theme,
            variant: Variant.DEFAULT,
            ...this.props,
          };

          return <WrappedComponent {...props} />;
        }}
      </ThemeContext.Consumer>
      );
    }
  };

const ButtonWithOptionalProps = withOptionalButtonProps(ThemedButton);
export { ButtonWithOptionalProps as ThemedButton };
