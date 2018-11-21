import merge from 'lodash/merge';

import { createRegisteredStyle } from '../components/createRegisteredStyle';
import { StyledPrimitiveProps } from '../components/StyledPrimitiveProps';
import { Size } from '../Size';
import { PrimitiveTheme } from './PrimitiveTheme';
import { SizedSubcomponentTheme } from './SizedSubcomponentTheme';

export interface SizedComponentProps {
  size: Size;
}

export interface SubPropsGetterData<ComponentProps, PrimitiveProps extends {}> {
  componentProps: ComponentProps;
  themes: SizedSubcomponentTheme<
    PrimitiveTheme<ComponentProps, PrimitiveProps>
  >[];
  userProps?: PrimitiveProps;
}

export const getSubProps = <
  ComponentProps extends SizedComponentProps,
  PrimitiveProps extends StyledPrimitiveProps<PrimitiveStyle>,
  PrimitiveStyle
>(
  data: SubPropsGetterData<ComponentProps, PrimitiveProps>,
): PrimitiveProps => {
  const { componentProps, themes, userProps } = data;
  const { size } = componentProps;

  /*
  const flattenUserSubStyle =
    userProps && Number.isFinite(userProps.style as number)
      ? StyleSheet.flatten(userProps.style)
      : undefined;
  */

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
      // userProps || {},
      // prettier-ignore
      /*
      flattenUserSubStyle
        ? {
          // @ts-ignore Spread types may only be created from object types.
          ...userProps,
          style: flattenUserSubStyle,
        }
        : userProps || {},
      */
      otherUserProps,
    ),
  );

  /*
  const subStyle: PrimitiveStyle = subProps.style as PrimitiveStyle;
  subProps.style = createRegisteredStyle<PrimitiveStyle>(subStyle || {}).style;
  */

  const subStyle: PrimitiveStyle = subProps.style as PrimitiveStyle;
  if (subStyle && userStyle) {
    subProps.style = [
      createRegisteredStyle<PrimitiveStyle>(subStyle || {}).style,
      userStyle,
    ];
  } else if (subStyle) {
    subProps.style = [
      createRegisteredStyle<PrimitiveStyle>(subStyle || {}).style,
    ];
  } else if (userStyle) {
    subProps.style = [userStyle];
  }

  return subProps;
};
