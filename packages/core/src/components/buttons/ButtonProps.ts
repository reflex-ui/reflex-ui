import { InteractivityProps } from '../../interactivity';
import { MarginProps } from '../../margin';
import { PaletteThemeProps } from '../../palette/PaletteThemeProps';
import { SizeProps } from '../../SizeProps';
import { ButtonProps } from './ButtonProps';
import { ButtonSubPropsGetter } from './ButtonSubPropsGetter';
import { ButtonTheme } from './ButtonTheme';
import { ButtonVariant } from './ButtonVariant';

export interface ButtonProps
  extends InteractivityProps,
    MarginProps,
    PaletteThemeProps,
    SizeProps {
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
