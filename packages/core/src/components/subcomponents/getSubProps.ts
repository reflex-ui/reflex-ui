import merge from 'lodash/merge';

import { SizeProps } from '../../SizeProps';
import { PrimitiveTheme } from '../PrimitiveTheme';
import { registerStyle } from '../registerStyle';
import { StyleProps } from '../StyleProps';
import { SizedSubTheme } from './SizedSubTheme';

export interface SubPropsGetterData<ComponentProps, PrimitiveProps> {
  readonly componentProps: ComponentProps;
  readonly themes: SizedSubTheme<
    PrimitiveTheme<ComponentProps, PrimitiveProps>
  >[];
  readonly userProps?: PrimitiveProps;
}

export const getSubProps = <
  ComponentProps extends SizeProps,
  PrimitiveProps extends StyleProps<PrimitiveStyle>,
  PrimitiveStyle
>(
  data: SubPropsGetterData<ComponentProps, PrimitiveProps>,
): PrimitiveProps => {
  const { componentProps, themes } = data;
  // @ts-ignore Type '{}' is not assignable to type 'PrimitiveProps'. [2322]
  const userProps: PrimitiveProps = data.userProps ? data.userProps : {};
  const { size } = componentProps;

  // @ts-ignore Rest types may only be created from object types. [2700]
  const { style: userStyle, ...otherUserProps } = userProps;

  // @ts-ignore Type '{}' is not assignable to type 'PrimitiveProps'.
  let subProps: PrimitiveProps = {};
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

    subProps = {
      // @ts-ignore Spread types may only be created from object types. [2698]
      ...subProps,
      style: subStyles,
    };
  }

  return subProps;
};
