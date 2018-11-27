import { MarginProps } from '../../margin';
import { SizeProps } from '../../SizeProps';
import { PaletteThemeProps } from '../../palette';
import { IconWrapperSubPropsGetter } from './IconWrapperSubPropsGetter';
import { IconWrapperTheme } from './theming/IconWrapperTheme';

export interface IconWrapperProps
  extends MarginProps,
    PaletteThemeProps,
    SizeProps {
  readonly children?: React.ReactNode;
  readonly color?: string;
  readonly getSubProps?: IconWrapperSubPropsGetter;
  readonly noContainer?: boolean;
  readonly theme: IconWrapperTheme;
}

export type OptionalIconWrapperProps = Partial<IconWrapperProps>;
