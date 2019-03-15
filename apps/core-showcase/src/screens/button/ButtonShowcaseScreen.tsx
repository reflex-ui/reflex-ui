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
  ButtonProps,
  ButtonPropsOptional,
  ButtonTheme,
  ButtonVariant,
  Caption,
  ColorTheme,
  Column,
  ComponentThemeGetter,
  errorColorThemes,
  FlexDirection,
  Headline6,
  isWeb,
  JustifyContent,
  Paragraph1,
  Paragraph2,
  primaryColorThemes,
  Row,
  secondaryColorThemes,
  Size,
  successColorThemes,
  Surface,
  warningColorThemes,
} from '@reflex-ui/core';
import { MenuIcon } from '@reflex-ui/icons-md';
import * as React from 'react';
import { ScrollView } from 'react-native';

import { ButtonCollectionProps } from './ButtonCollectionProps';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('DefaultButtonScreen().onButtonPress()');
};

export const colorThemes: ColorTheme[] = [
  ...primaryColorThemes,
  ...secondaryColorThemes,
  ...errorColorThemes,
  ...successColorThemes,
  ...warningColorThemes,
];

export interface CustomButtonCollection {
  readonly colorTheme: ColorTheme;
  readonly getPatchTheme?: ComponentThemeGetter<ButtonProps, ButtonTheme>;
  readonly surfaceColorTheme: ColorTheme;
  readonly title: string;
  readonly variant: ButtonVariant;
}

export interface ButtonShowcaseScreenProps {
  readonly ButtonCollection: React.ComponentType<ButtonCollectionProps>;
  readonly customCollections?: CustomButtonCollection[];
  readonly scaleButtons?: React.ComponentType<ButtonPropsOptional>[];
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
      <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
        <MenuIcon />
      </Button>
      <AppBarTitle numberOfLines={1}>{title}</AppBarTitle>
    </AppBar>
    <Column marginTop={Size.M}>
      {({ breakpoints, dimensions }) => {
        const marginSize =
          dimensions.window.width > breakpoints.largeHandset ? Size.M : 0;

        const invertColor =
          variant === ButtonVariant.Default ||
          variant === ButtonVariant.Icon ||
          variant === ButtonVariant.Outlined ||
          variant === ButtonVariant.OutlinedShaped
            ? true
            : false;

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
                              invertColor={invertColor}
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
                  <Paragraph1 margin={Size.M} marginBottom={Size.XXS}>
                    Surface color: <Paragraph2>surface_normal</Paragraph2>
                  </Paragraph1>
                  <Paragraph1 margin={Size.M} marginTop={0}>
                    Button color:
                    <Paragraph2>
                      {` ${colorTheme}${invertColor ? ' invertColor' : ''}`}
                    </Paragraph2>
                  </Paragraph1>
                  <ButtonCollection
                    colorTheme={colorTheme}
                    invertColor={invertColor}
                    onPress={onButtonPress}
                    variant={variant}
                  />
                </Surface>
                <Surface colorTheme={colorTheme} marginStart={marginSize}>
                  <Paragraph1 margin={Size.M} marginBottom={Size.XXS}>
                    Surface color: <Paragraph2>{colorTheme}</Paragraph2>
                  </Paragraph1>
                  <Paragraph1 margin={Size.M} marginTop={0}>
                    Button color:
                    <Paragraph2>
                      {` ${colorTheme}${invertColor ? '' : ' invertColor'}`}
                    </Paragraph2>
                  </Paragraph1>
                  <ButtonCollection
                    colorTheme={colorTheme}
                    invertColor={!invertColor}
                    onPress={onButtonPress}
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
                    <Paragraph1 margin={Size.M} marginBottom={Size.XXS}>
                      Surface color: <Paragraph2>surface_normal</Paragraph2>
                    </Paragraph1>
                    <Paragraph1 margin={Size.M} marginTop={0}>
                      Button color: <Paragraph2>{custom.title}</Paragraph2>
                    </Paragraph1>
                    <ButtonCollection
                      colorTheme={custom.colorTheme}
                      getPatchTheme={custom.getPatchTheme}
                      onPress={onButtonPress}
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
