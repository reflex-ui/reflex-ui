import merge from 'lodash/merge';

import { registerStyle } from '../components/registerStyle';
import { StyledPrimitiveProps } from '../components/StyledPrimitiveProps';
import { InteractivityStateProps, InteractivityType } from '../interactivity';
import { SizeProps } from '../SizeProps';
import { InteractiveSubTheme } from './InteractiveSubTheme';
import { PrimitiveTheme } from './PrimitiveTheme';
import { SizedSubcomponentTheme } from './SizedSubcomponentTheme';

export interface InteractiveSubPropsGetterData<ComponentProps, PrimitiveProps> {
  readonly componentProps: ComponentProps;
  readonly themes: SizedSubcomponentTheme<
    InteractiveSubTheme<PrimitiveTheme<ComponentProps, PrimitiveProps>>
  >[];
  readonly userProps?: PrimitiveProps;
}

export const getInteractiveSubProps = <
  ComponentProps extends InteractivityStateProps & SizeProps,
  PrimitiveProps extends StyledPrimitiveProps<PrimitiveStyle>,
  PrimitiveStyle
>(
  data: InteractiveSubPropsGetterData<ComponentProps, PrimitiveProps>,
): PrimitiveProps => {
  const { componentProps, themes } = data;
  // @ts-ignore Type '{}' is not assignable to type 'PrimitiveProps'. [2322]
  const userProps: PrimitiveProps = data.userProps ? data.userProps : {};
  const { size } = componentProps;
  const interactivityType: InteractivityType =
    componentProps.interactivityState.type;

  // @ts-ignore Rest types may only be created from object types. [2700]
  const { style: userStyle, ...otherUserProps } = userProps;

  // @ts-ignore [ts] Type '{}' is not assignable to type 'PrimitiveProps'.
  let subProps: PrimitiveProps = {};
  themes.forEach(theme =>
    merge(
      subProps,
      /* allSizes && allStates */
      theme.allSizes.allStates.props,
      theme.allSizes.allStates.getProps(componentProps),
      /* allSizes && state */
      theme.allSizes[interactivityType].props,
      theme.allSizes[interactivityType].getProps(componentProps),
      /* size && allStates */
      theme[size].allStates.props,
      theme[size].allStates.getProps(componentProps),
      /* size && state */
      theme[size][interactivityType].props,
      theme[size][interactivityType].getProps(componentProps),
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
