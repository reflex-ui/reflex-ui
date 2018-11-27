import { InteractivityProps } from '../../interactivity';
import { MarginProps } from '../../margin';
import { SizeProps } from '../../SizeProps';
import { PaletteThemeProps } from '../../theming/palette/PaletteThemeProps';
import { ButtonProps } from './ButtonProps';
import { ButtonSubPropsGetter } from './ButtonSubPropsGetter';
import { ButtonVariant } from './ButtonVariant';
import { ButtonTheme } from './theming/ButtonTheme';

export interface ButtonProps
  extends InteractivityProps,
    MarginProps,
    SizeProps,
    PaletteThemeProps {
  readonly allVariantsTheme: ButtonTheme;
  readonly children?: React.ReactNode;
  readonly fullWidth?: boolean;
  readonly getSubProps?: ButtonSubPropsGetter;
  readonly leadingIcon?: JSX.Element;
  readonly theme: ButtonTheme;
  readonly trailingIcon?: JSX.Element;
  readonly variant: ButtonVariant;
}

export type OptionalButtonProps = Partial<ButtonProps>;
