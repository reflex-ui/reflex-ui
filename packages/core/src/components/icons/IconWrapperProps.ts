import { MarginProps } from '../../margin';
import { PaletteThemeProps } from '../../palette';
import { SizeProps } from '../../SizeProps';
import { IconWrapperSubPropsGetter } from './IconWrapperSubPropsGetter';
import { IconWrapperTheme } from './IconWrapperTheme';

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
