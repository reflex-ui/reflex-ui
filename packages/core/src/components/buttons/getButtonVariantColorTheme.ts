import { ColorTheme } from '../../theming';
import { ButtonVariant } from './ButtonVariant';

export const getButtonVariantColorTheme = (
  variant: ButtonVariant,
): ColorTheme =>
  variant === ButtonVariant.FAB || variant === ButtonVariant.XFAB
    ? ColorTheme.SECONDARY_NORMAL
    : ColorTheme.PRIMARY_NORMAL;
