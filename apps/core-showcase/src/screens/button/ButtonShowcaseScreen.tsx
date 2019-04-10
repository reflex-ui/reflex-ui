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
  Column,
  ComponentThemeGetter,
  FlexDirection,
  Headline6,
  isWeb,
  JustifyContent,
  PaletteThemeContext,
  Paragraph1,
  Paragraph2,
  Row,
  Size,
  Surface,
} from '@reflex-ui/core';
import { MenuIcon } from '@reflex-ui/icons-md';
import React, { useContext } from 'react';
import { ScrollView } from 'react-native';

import { ButtonCollectionProps } from './ButtonCollectionProps';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('DefaultButtonScreen().onButtonPress()');
};

export interface CustomButtonCollection {
  readonly getPatchTheme?: ComponentThemeGetter<ButtonProps, ButtonTheme>;
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
}): JSX.Element => {
  const paletteTheme = useContext(PaletteThemeContext);
  const colors = [
    {
      color: paletteTheme.primary,
      name: 'primary',
    },
    {
      color: paletteTheme.primaryDark,
      name: 'primaryDark',
    },
    {
      color: paletteTheme.primaryLight,
      name: 'primaryLight',
    },
    {
      color: paletteTheme.secondary,
      name: 'secondary',
    },
    {
      color: paletteTheme.secondaryDark,
      name: 'secondaryDark',
    },
    {
      color: paletteTheme.secondaryLight,
      name: 'secondaryLight',
    },
    {
      color: paletteTheme.error,
      name: 'error',
    },
    {
      color: paletteTheme.errorDark,
      name: 'errorDark',
    },
    {
      color: paletteTheme.errorLight,
      name: 'errorLight',
    },
    {
      color: paletteTheme.success,
      name: 'success',
    },
    {
      color: paletteTheme.successDark,
      name: 'successDark',
    },
    {
      color: paletteTheme.successLight,
      name: 'successLight',
    },
    {
      color: paletteTheme.warning,
      name: 'warning',
    },
    {
      color: paletteTheme.warningDark,
      name: 'warningDark',
    },
    {
      color: paletteTheme.warningLight,
      name: 'warningLight',
    },
  ];

  return (
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
                                invertColor={invertColor}
                                onPress={onButtonPress}
                                paletteColor={paletteTheme.primary}
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
              {colors.map(paletteColor => (
                <Row
                  key={paletteColor.name}
                  justifyContent={justifyContent}
                  marginVertical={marginSize}
                >
                  <Surface marginStart={marginSize}>
                    <Paragraph1 margin={Size.M} marginBottom={Size.XXS}>
                      Surface color: <Paragraph2>surface</Paragraph2>
                    </Paragraph1>
                    <Paragraph1 margin={Size.M} marginTop={0}>
                      Button color:
                      <Paragraph2>
                        {` ${paletteColor.name}${
                          invertColor ? ' invertColor' : ''
                        }`}
                      </Paragraph2>
                    </Paragraph1>
                    <ButtonCollection
                      invertColor={invertColor}
                      onPress={onButtonPress}
                      paletteColor={paletteColor.color}
                      variant={variant}
                    />
                  </Surface>
                  <Surface
                    marginStart={marginSize}
                    paletteColor={paletteColor.color}
                  >
                    <Paragraph1 margin={Size.M} marginBottom={Size.XXS}>
                      Surface color:{' '}
                      <Paragraph2>{paletteColor.name}</Paragraph2>
                    </Paragraph1>
                    <Paragraph1 margin={Size.M} marginTop={0}>
                      Button color:
                      <Paragraph2>
                        {` ${paletteColor.name}${
                          invertColor ? '' : ' invertColor'
                        }`}
                      </Paragraph2>
                    </Paragraph1>
                    <ButtonCollection
                      invertColor={!invertColor}
                      onPress={onButtonPress}
                      paletteColor={paletteColor.color}
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
                      marginStart={marginSize}
                      paletteColor={paletteTheme.surface}
                    >
                      <Paragraph1 margin={Size.M} marginBottom={Size.XXS}>
                        Surface color: <Paragraph2>surface</Paragraph2>
                      </Paragraph1>
                      <Paragraph1 margin={Size.M} marginTop={0}>
                        Button color: <Paragraph2>{custom.title}</Paragraph2>
                      </Paragraph1>
                      <ButtonCollection
                        getPatchTheme={custom.getPatchTheme}
                        onPress={onButtonPress}
                        paletteColor={paletteTheme.primary}
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
};

ButtonShowcaseScreen.displayName = 'ButtonShowcaseScreen';

export { ButtonShowcaseScreen };
