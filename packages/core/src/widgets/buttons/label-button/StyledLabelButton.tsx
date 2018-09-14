import * as React from 'react';
import {
  // StyleSheet,
  // Text,
  TextStyle,
  // TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  // View,
  ViewStyle,
} from 'react-native';

import { InteractivityEvent, InteractivityState } from '../../../interactivity';
import { ColorVariant, Theme, ThemeContext } from '../../../styles';
import {
  ButtonContainer,
  getInnerContainerStyle,
  getLabelStyle,
  TextComponent,
  TouchableComponent,
} from '../../../styles/themes/PurpleTealTheme';
import { Size } from '../../Size';

export interface ButtonStyles {
  innerContainer: ViewStyle;
  label: TextStyle;
  outerContainer: ViewStyle;
}

export interface VisualButtonProps {
  children?: React.ReactNode;
  colorVariant: ColorVariant;
  customStyle?: ButtonStyles;
  fullWidth: boolean;
  interactivityEvent?: InteractivityEvent;
  interactivityState: InteractivityState;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  size: Size;
  variant: Variant;
}

export interface DefaultVisualButtonProps {
  children?: React.ReactNode;
  colorVariant?: ColorVariant;
  customStyle?: ButtonStyles;
  fullWidth?: boolean;
  interactivityEvent?: InteractivityEvent;
  interactivityState?: InteractivityState;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  size?: Size;
  variant?: Variant;
}

export interface Themed {
  theme: Theme;
}

export interface ThemedVisualButtonProps extends VisualButtonProps, Themed {}

export interface ButtonProps
  extends VisualButtonProps,
    TouchableWithoutFeedbackProps {}

export interface DefaultButtonProps
  extends DefaultVisualButtonProps,
    TouchableWithoutFeedbackProps {}

/*
export interface StyledButtonProps
  extends StyledButtonContainerProps,
    ButtonProps {}
*/
// export type StyledButtonProps = ButtonStyleProps & ButtonProps;

export enum Variant {
  CONTAINED = 'contained',
  CONTAINED_RAISED = 'containedRaised',
  DEFAULT = 'default',
  OUTLINED = 'outlined',
}

export interface ThemedStyledButtonProps extends ButtonProps, Themed {}

export interface DefaultThemedStyledButtonProps
  extends DefaultButtonProps,
    Themed {}

// export type StyledButton = React.ComponentType<ButtonProps>;

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

type GetStyle = (props: ThemedStyledButtonProps) => ButtonStyleAndChildren;

const getStyle: GetStyle = ({
  children,
  colorVariant = ColorVariant.PRIMARY_NORMAL,
  fullWidth,
  size = Size.REGULAR,
  interactivityState = InteractivityState.ENABLED,
  theme,
  variant = Variant.DEFAULT,
}: ThemedStyledButtonProps): ButtonStyleAndChildren => ({
  children: getStyledChildren({ children, size, theme }),
  styles: StyleSheet.create<ButtonStyle>({
    innerContainer: {
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
}: ThemedStyledButtonProps) =>
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
  readonly InnerContainer: ButtonContainer;
  readonly Text: TextComponent;
  readonly Touchable: TouchableComponent;
}

interface VisualAndButtonProps {
  readonly button: TouchableWithoutFeedbackProps;
  readonly visual: ThemedVisualButtonProps;
}

class ThemedButton extends React.Component<
  ThemedStyledButtonProps,
  ThemedButtonState
> {
  constructor(props: ThemedStyledButtonProps) {
    super(props);
    // tslint:disable-next-line:no-console
    // console.log('ThemedButton.constructor() - props: ', props);

    // prettier-ignore
    const {
      InnerContainer,
      Text,
      Touchable,
    } = props.theme.components.button[props.variant];

    this.state = {
      InnerContainer,
      Text,
      Touchable,
    };
  }

  public render() {
    const { children } = this.props;
    const { InnerContainer, Touchable } = this.state;
    const visualAndButtonProps = this.getVisualAndButtonProps();

    const innerContainerStyles = getInnerContainerStyle(
      visualAndButtonProps.visual,
    );

    return (
      <Touchable {...visualAndButtonProps.button}>
        <InnerContainer
          style={innerContainerStyles.container}
          {...visualAndButtonProps.visual}
        >
          {children &&
            this.getChildrenComponent(children, visualAndButtonProps.visual)}
        </InnerContainer>
      </Touchable>
    );
  }

  /*
  private onPress() {
    // tslint:disable-next-line:no-console
    console.log('ThemedButton().onPress()');
  }
  */

  private getChildrenComponent(
    children: React.ReactNode,
    visual: ThemedVisualButtonProps,
  ): JSX.Element | React.ReactNode {
    const { Text } = this.state;

    if (
      typeof children === 'string' ||
      typeof children === 'number' ||
      typeof children === 'boolean'
    ) {
      const textStyles = getLabelStyle(visual);

      return (
        <Text style={textStyles.text} {...visual}>
          {children}
        </Text>
      );
    }

    return children;
  }

  private getVisualAndButtonProps(): VisualAndButtonProps {
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
      button: buttonProps,
      visual: {
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

// tslint:disable-next-line:max-classes-per-file
class DefaultLabelButton extends React.Component<DefaultButtonProps> {
  public render() {
    return (
      // prettier-ignore
      <ThemeContext.Consumer>
        {(theme) => {
          const defaultProps: ThemedVisualButtonProps = {
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

/*
const ThemedButtonWithTheme = withTheme(ThemedButton);

export { ThemedButtonWithTheme as ThemedButton };
*/

/*
export const ThemedButton: StyledButton = ({
  children,
  colorVariant,
  fullWidth,
  interactivityState,
  size,
  variant = Variant.DEFAULT,
  ...other // tslint:disable-line:trailing-comma
}: StyledButtonProps): JSX.Element => (
  <ThemeContext.Consumer>
    {theme => (
      <Button
        {...other}
        ChildrenContainer={getChildrenContainer({
          children,
          colorVariant,
          fullWidth,
          interactivityState,
          size,
          theme,
          variant,
        })}
        customStyle={getStyle({
          children,
          colorVariant,
          fullWidth,
          interactivityState,
          size,
          theme,
          variant,
        })}
      />
    )}
  </ThemeContext.Consumer>
);
*/
