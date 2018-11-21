import merge from 'lodash/merge';

import { registerStyle } from '../components/registerStyle';
import { StyledPrimitiveProps } from '../components/StyledPrimitiveProps';
import { SizeProps } from '../SizeProps';
import { PrimitiveTheme } from './PrimitiveTheme';
import { SizedSubcomponentTheme } from './SizedSubcomponentTheme';

export interface SubPropsGetterData<ComponentProps, PrimitiveProps> {
  componentProps: ComponentProps;
  themes: SizedSubcomponentTheme<
    PrimitiveTheme<ComponentProps, PrimitiveProps>
  >[];
  userProps?: PrimitiveProps;
}

export const getSubProps = <
  ComponentProps extends SizeProps,
  PrimitiveProps extends StyledPrimitiveProps<PrimitiveStyle>,
  PrimitiveStyle
>(
  data: SubPropsGetterData<ComponentProps, PrimitiveProps>,
): PrimitiveProps => {
  const { componentProps, themes, userProps } = data;
  const { size } = componentProps;

  // @ts-ignore Type '{}' is not assignable to type 'PrimitiveProps'.
  let otherUserProps: PrimitiveProps = {};
  let userStyle;
  if (userProps) {
    // @ts-ignore Spread types may only be created from object types.
    otherUserProps = { ...userProps };
    delete otherUserProps.style;
    if (userProps.style) userStyle = userProps.style;
  }

  // @ts-ignore [ts] Type '{}' is not assignable to type 'PrimitiveProps'.
  const subProps: PrimitiveProps = {};
  themes.forEach(theme =>
    merge(
      subProps,
      /* allSizes */
      theme.allSizes.props,
      theme.allSizes.getProps(componentProps),
      /* size */
      theme[size].props,
      theme[size].getProps(componentProps),
      /* user props */
      otherUserProps,
    ),
  );

  const subStyle: PrimitiveStyle = subProps.style as PrimitiveStyle;
  if (subStyle || userStyle) {
    const subStyles = [];
    if (subStyle) subStyles.push(registerStyle<PrimitiveStyle>(subStyle));
    if (userStyle) subStyles.push(userStyle);
    subProps.style = subStyles;
  }

  return subProps;
};
