/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AlignItems,
  AppBar,
  AppBarTitle,
  Button,
  ButtonVariant,
  Column,
  JustifyContent,
  Paragraph1,
  Paragraph2,
  Row,
  Screen,
  Size,
  Surface,
  usePalette,
} from '@reflex-ui/core';
import { MenuIcon } from '@reflex-ui/icons-md';
import React from 'react';
import { ScrollView } from 'react-native';

import { pink } from '../../colors/pink';
import { AvatarIconCollection } from './AvatarIconCollection';
import { AvatarTextCollection } from './AvatarTextCollection';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('AvatarShowcaseScreen().onButtonPress()');
};

const CollectionInfo = ({
  avatarColorName,
  surfaceColorName,
}: {
  avatarColorName: string;
  surfaceColorName: string;
}) => (
  <React.Fragment>
    <Paragraph1>
      Surface color: <Paragraph2>{surfaceColorName}</Paragraph2>
    </Paragraph1>
    <Paragraph1 marginTop={Size.XXS}>
      Avatar color: <Paragraph2>{avatarColorName}</Paragraph2>
    </Paragraph1>
  </React.Fragment>
);

const AvatarScreen: React.SFC<{}> = (): JSX.Element => {
  const { palette } = usePalette();
  const colors = [
    {
      color: palette.primary,
      name: 'primary',
    },
    {
      color: palette.primaryDark,
      name: 'primaryDark',
    },
    {
      color: palette.primaryLight,
      name: 'primaryLight',
    },
    {
      color: palette.secondary,
      name: 'secondary',
    },
    {
      color: palette.secondaryDark,
      name: 'secondaryDark',
    },
    {
      color: palette.secondaryLight,
      name: 'secondaryLight',
    },
    {
      color: palette.error,
      name: 'error',
    },
    {
      color: palette.errorDark,
      name: 'errorDark',
    },
    {
      color: palette.errorLight,
      name: 'errorLight',
    },
    {
      color: palette.success,
      name: 'success',
    },
    {
      color: palette.successDark,
      name: 'successDark',
    },
    {
      color: palette.successLight,
      name: 'successLight',
    },
    {
      color: palette.warning,
      name: 'warning',
    },
    {
      color: palette.warningDark,
      name: 'warningDark',
    },
    {
      color: palette.warningLight,
      name: 'warningLight',
    },
  ];

  return (
    <Screen>
      <AppBar>
        <Button onPress={onButtonPress} variant={ButtonVariant.Icon}>
          <MenuIcon />
        </Button>
        <AppBarTitle numberOfLines={1}>Icon</AppBarTitle>
      </AppBar>
      <ScrollView>
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
                {colors.map(paletteColor => (
                  <Row
                    key={paletteColor.name}
                    justifyContent={justifyContent}
                    marginVertical={marginSize}
                  >
                    <Surface marginStart={marginSize} padding={Size.S}>
                      <CollectionInfo
                        avatarColorName={paletteColor.name}
                        surfaceColorName="surface"
                      />
                      <AvatarTextCollection
                        marginTop={Size.M}
                        paletteColor={paletteColor.color}
                      />
                      <AvatarIconCollection
                        marginTop={Size.M}
                        paletteColor={paletteColor.color}
                      />
                    </Surface>
                    <Surface
                      marginStart={marginSize}
                      padding={Size.M}
                      paletteColor={paletteColor.color}
                    >
                      <CollectionInfo
                        avatarColorName={`${paletteColor.name} invertColor`}
                        surfaceColorName={paletteColor.name}
                      />
                      <AvatarTextCollection
                        invertColor
                        marginTop={Size.M}
                        paletteColor={paletteColor.color}
                      />
                      <AvatarIconCollection
                        invertColor
                        marginTop={Size.M}
                        paletteColor={paletteColor.color}
                      />
                    </Surface>
                  </Row>
                ))}
                <Row
                  alignItems={AlignItems.Center}
                  justifyContent={justifyContent}
                  marginVertical={marginSize}
                >
                  <Surface marginStart={marginSize} padding={Size.M}>
                    <CollectionInfo
                      avatarColorName="Custom color (pink)"
                      surfaceColorName="surface"
                    />
                    <AvatarTextCollection
                      marginTop={Size.M}
                      paletteColor={pink}
                    />
                    <AvatarIconCollection
                      marginTop={Size.M}
                      paletteColor={pink}
                    />
                  </Surface>
                  <Surface
                    marginStart={marginSize}
                    padding={Size.M}
                    paletteColor={pink}
                  >
                    <CollectionInfo
                      avatarColorName="Custom color (pink) invertColor"
                      surfaceColorName="Custom color (pink)"
                    />
                    <AvatarTextCollection
                      invertColor
                      marginTop={Size.M}
                      paletteColor={pink}
                    />
                    <AvatarIconCollection
                      invertColor
                      marginTop={Size.M}
                      paletteColor={pink}
                    />
                  </Surface>
                </Row>
              </React.Fragment>
            );
          }}
        </Column>
      </ScrollView>
    </Screen>
  );
};

AvatarScreen.displayName = 'AvatarScreen';

export { AvatarScreen };
