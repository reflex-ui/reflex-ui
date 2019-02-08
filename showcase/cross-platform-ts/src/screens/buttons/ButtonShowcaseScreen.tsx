/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AlignItems,
  allSizes,
  AppBar,
  AppBarTitle,
  Button,
  ButtonSubPropsGetter,
  ButtonVariant,
  Caption,
  ColorTheme,
  Column,
  errorColorThemes,
  FlexDirection,
  Headline6,
  isWeb,
  JustifyContent,
  OptionalButtonProps,
  primaryColorThemes,
  Row,
  secondaryColorThemes,
  Size,
  successColorThemes,
  Surface,
  warningColorThemes,
} from '@reflex-ui/core';
import { AlarmIcon } from '@reflex-ui/icons/build/dist/material-design';
import { MenuIcon } from '@reflex-ui/material-design';
import * as React from 'react';
import { ScrollView } from 'react-native';

import { ButtonCollectionProps } from './ButtonCollectionProps';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('DefaultButtonScreen().onButtonPress()');
};

/*
const colorThemesByPairs = colorThemes.map((colorTheme, index, array) => (
  index % 2 === 0 ? { a: colorTheme, b: array[index + 1] } : continue
));

interface ColorPair {
  colorA: ColorTheme;
  colorB: ColorTheme;
}
*/
export const colorThemes: ColorTheme[] = [
  ...primaryColorThemes,
  ...secondaryColorThemes,
  ...errorColorThemes,
  ...successColorThemes,
  ...warningColorThemes,
];
/*
const colorThemesInPairs = colorThemes.reduce<ColorPair[]>(
  (acc, cur, index, array) => {
    if (index % 2 === 0) acc.push({ colorA: cur, colorB: array[index + 1] });
    return acc;
  },
  [],
);
*/

export interface CustomButtonCollection {
  readonly colorTheme: ColorTheme;
  readonly getSubProps?: ButtonSubPropsGetter;
  readonly surfaceColorTheme: ColorTheme;
  readonly title: string;
  readonly variant: ButtonVariant;
}

export interface ButtonShowcaseScreenProps {
  readonly ButtonCollection: React.ComponentType<ButtonCollectionProps>;
  readonly customCollections?: CustomButtonCollection[];
  readonly scaleButtons?: React.ComponentType<OptionalButtonProps>[];
  readonly title: string;
  readonly variant: ButtonVariant;
}

const ButtonShowcaseScreen: React.SFC<ButtonShowcaseScreenProps> = ({
  ButtonCollection,
  customCollections,
  scaleButtons,
  title,
  variant,
}): JSX.Element => (
  <ScrollView>
    <AppBar>
      <Button invertColor onPress={onButtonPress} variant={ButtonVariant.Icon}>
        <MenuIcon />
      </Button>
      <AppBarTitle numberOfLines={1}>{title}</AppBarTitle>
    </AppBar>
    <AlarmIcon />
    <Column marginTop={Size.M}>
      {({ breakpoints, dimensions }) => {
        const marginSize =
          dimensions.window.width > breakpoints.largeHandset ? Size.M : 0;

        const justifyContent =
          dimensions.window.width <= breakpoints.smallTablet
            ? JustifyContent.Center
            : undefined;

        return (
          <React.Fragment>
            {scaleButtons &&
              scaleButtons.map((ScaleButton, index) => (
                <Row key={index} marginVertical={marginSize}>
                  <Column>
                    <Headline6 margin={Size.M}>Size Scale</Headline6>
                    <Surface
                      flexDirection={
                        isWeb ? FlexDirection.Row : FlexDirection.Column
                      }
                      marginStart={marginSize}
                    >
                      {allSizes.map((size, sizeIndex) => (
                        <Column
                          alignItems={AlignItems.Center}
                          key={size}
                          marginStart={sizeIndex > 0 ? Size.S : 0}
                        >
                          <Caption>{size}</Caption>
                          <Row>
                            <ScaleButton
                              colorTheme={ColorTheme.PrimaryNormal}
                              onPress={onButtonPress}
                              size={size}
                              variant={variant}
                            />
                          </Row>
                        </Column>
                      ))}
                    </Surface>
                  </Column>
                </Row>
              ))}
            {colorThemes.map(colorTheme => (
              <Row
                key={colorTheme}
                justifyContent={justifyContent}
                marginVertical={marginSize}
              >
                <Surface marginStart={marginSize}>
                  <ButtonCollection
                    colorTheme={colorTheme}
                    onPress={onButtonPress}
                    title={colorTheme}
                    variant={variant}
                  />
                </Surface>
                <Surface colorTheme={colorTheme} marginStart={marginSize}>
                  <ButtonCollection
                    colorTheme={colorTheme}
                    invertColor
                    onPress={onButtonPress}
                    title={`${colorTheme} invertColor`}
                    variant={variant}
                  />
                </Surface>
              </Row>
            ))}
            {customCollections &&
              customCollections.length > 0 &&
              customCollections.map(custom => (
                <Row
                  justifyContent={justifyContent}
                  key={custom.title}
                  marginVertical={marginSize}
                >
                  <Surface
                    colorTheme={custom.surfaceColorTheme}
                    marginStart={marginSize}
                  >
                    <ButtonCollection
                      colorTheme={custom.colorTheme}
                      getSubProps={custom.getSubProps}
                      invertColor
                      onPress={onButtonPress}
                      title={custom.title}
                      variant={custom.variant}
                    />
                  </Surface>
                </Row>
              ))}
          </React.Fragment>
        );
      }}
    </Column>
  </ScrollView>
);

ButtonShowcaseScreen.displayName = 'ButtonShowcaseScreen';

export { ButtonShowcaseScreen };
