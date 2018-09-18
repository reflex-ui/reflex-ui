import * as React from 'react';
import {
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

type TransformText = (
  props: { text: string; transformation?: string },
) => string;

export const transformText: TransformText = ({
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
/*
type GetStyledChildren = (
  props: { children: React.ReactNode; size: Size; theme: Theme },
) => React.ReactNode;

const getStyledChildren: GetStyledChildren = ({ children }): React.ReactNode =>
  // prettier-ignore
  typeof children === 'string' && isAndroid
    ? transformText({
      text: children,
      // TODO: implement this retrieving data from theme.
      transformation: 'uppercase',
      // tslint:disable-next-line
      // transformation: theme.components.button[size].common.label
        .textTransform,
    })
    : children;

type GetStyle = (props: ThemedButtonProps) => ButtonStyleAndChildren;

const getStyle: GetStyle = ({
  children,
  colorVariant = ColorVariant.PRIMARY_NORMAL,
  fullWidth,
  size = Size.REGULAR,
  interactivityState = InteractivityState.ENABLED,
  theme,
  variant = Variant.DEFAULT,
}: ThemedButtonProps): ButtonStyleAndChildren => ({
  children: getStyledChildren({ children, size, theme }),
  styles: StyleSheet.create<ButtonStyle>({
    view: {
      ...getInnerContainerStyles({
        children,
        colorVariant,
        fullWidth,
        interactivityState,
        size,
        theme,
        variant,
      }),
    },
    label: {
      ...getLabelStyles({
        children,
        colorVariant,
        fullWidth,
        interactivityState,
        size,
        theme,
        variant,
      }),
    },
    outerContainer: {
      ...getOuterContainerStyles({
        children,
        colorVariant,
        fullWidth,
        interactivityState,
        size,
        theme,
        variant,
      }),
    },
  }),
});
*/
/*
const getChildrenContainer = ({
  children,
  colorVariant,
  fullWidth,
  interactivityState,
  size,
  theme,
  variant = Variant.DEFAULT,
}: ThemedButtonProps) =>
  theme.components.button[variant].childrenContainerFactory({
    children,
    colorVariant,
    fullWidth,
    interactivityState,
    size,
    theme,
    variant,
  });
*/
/*
export type WithTheme = <P extends Themed>(
  WrappedComponent: React.ComponentType<P>,
) => React.ComponentType<P>;

const withTheme: WithTheme = <P extends Themed>(
  WrappedComponent: React.ComponentType<P>,
) => (props: P) => (
  <ThemeContext.Consumer>
    {theme => <WrappedComponent {...props} theme={theme} />}
  </ThemeContext.Consumer>
);
*/
interface ThemedButtonState {
  readonly Text: ButtonText;
  readonly Touchable: Touchable<TouchableWithoutFeedbackProps>;
  readonly View: ButtonView;
}

interface ViewAndTouchableProps {
  readonly touchable: TouchableWithoutFeedbackProps;
  readonly view: SpecialButtonProps;
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
    const visualAndButtonProps = this.getVisualAndButtonProps();

    const viewStyle = getRegisteredViewStyle(visualAndButtonProps.view);

    return (
      <Touchable {...visualAndButtonProps.touchable}>
        <View style={viewStyle.view} {...visualAndButtonProps.view}>
          {children &&
            this.getChildrenComponent(children, visualAndButtonProps.view)}
        </View>
      </Touchable>
    );
  }

  private getChildrenComponent(
    children: React.ReactNode,
    visual: SpecialButtonProps,
  ): JSX.Element | React.ReactNode {
    const { Text } = this.state;

    if (
      typeof children === 'string' ||
      typeof children === 'number' ||
      typeof children === 'boolean'
    ) {
      const textStyle = getRegisteredTextStyle(visual);

      return (
        <Text style={textStyle.text} {...visual}>
          {children}
        </Text>
      );
    }

    return children;
  }

  private getVisualAndButtonProps(): ViewAndTouchableProps {
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
      ...buttonProps
    } = this.props;

    return {
      touchable: buttonProps,
      view: {
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
      },
    };
  }
}
/*
// tslint:disable-next-line:max-classes-per-file
class DefaultLabelButton extends React.Component<OptionalButtonProps> {
  public render() {
    return (
      // prettier-ignore
      <ThemeContext.Consumer>
        {(theme) => {
          const defaultProps: SpecialButtonProps = {
            colorVariant: ColorVariant.PRIMARY_NORMAL,
            fullWidth: false,
            interactivityState: InteractivityState.ENABLED,
            size: Size.REGULAR,
            // tslint:disable-next-line:object-shorthand-properties-first
            theme,
            variant: Variant.DEFAULT,
          };

          return <ThemedButton {...defaultProps} {...this.props} />;
        }}
      </ThemeContext.Consumer>
    );
  }
}

// const ThemedButtonWithTheme = withTheme(DefaultLabelButton);
export { DefaultLabelButton as ThemedButton };
*/
/*
export type WithOptionalButtonProps = <P extends ButtonProps>(
  WrappedComponent: React.ComponentType<P>,
) => React.ComponentType<OptionalButtonProps>;
*/
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
          const defaultProps: SpecialButtonProps = {
            colorVariant: ColorVariant.PRIMARY_NORMAL,
            fullWidth: false,
            interactivityState: InteractivityState.ENABLED,
            size: Size.REGULAR,
            theme,
            variant: Variant.DEFAULT,
          };

          return <WrappedComponent {...defaultProps} {...this.props} />;
        }}
      </ThemeContext.Consumer>
      );
    }
  };

const ButtonWithOptionalProps = withOptionalButtonProps(ThemedButton);
export { ButtonWithOptionalProps as ThemedButton };

/*
const ThemedButtonWithTheme = withTheme(ThemedButton);

export { ThemedButtonWithTheme as ThemedButton };
*/
