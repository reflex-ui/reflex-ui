import merge from 'lodash/merge';

import { createRegisteredStyle } from '../components/createRegisteredStyle';
import { StyledPrimitiveProps } from '../components/StyledPrimitiveProps';
import { InteractivityState, InteractivityType } from '../interactivity';
import { Size } from '../Size';
import { InteractivityStateTheme } from './InteractivityStateTheme';
import { PrimitiveTheme } from './PrimitiveTheme';
import { SizedSubcomponentTheme } from './SizedSubcomponentTheme';

export interface InteractiveComponentProps {
  interactivityState: InteractivityState;
  size: Size;
}

export interface InteractiveSubPropsGetterData<ComponentProps, PrimitiveProps> {
  componentProps: ComponentProps;
  themes: SizedSubcomponentTheme<
    InteractivityStateTheme<PrimitiveTheme<ComponentProps, PrimitiveProps>>
  >[];
  userProps?: PrimitiveProps;
}

export const getInteractiveSubProps = <
  ComponentProps extends InteractiveComponentProps,
  PrimitiveProps extends StyledPrimitiveProps<PrimitiveStyle>,
  PrimitiveStyle
>(
  data: InteractiveSubPropsGetterData<ComponentProps, PrimitiveProps>,
): PrimitiveProps => {
  const { componentProps, themes, userProps } = data;
  const { size } = componentProps;
  const interactivityType: InteractivityType =
    componentProps.interactivityState.type;

  // @ts-ignore [ts] Type '{}' is not assignable to type 'PrimitiveProps'.
  const subProps: PrimitiveProps = {};
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
      userProps || {},
    ),
  );

  const subStyle: PrimitiveStyle = subProps.style as PrimitiveStyle;
  subProps.style = createRegisteredStyle<PrimitiveStyle>(subStyle || {}).style;

  return subProps;
};
