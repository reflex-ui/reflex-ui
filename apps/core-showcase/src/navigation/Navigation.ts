/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Navigation } from 'react-native-navigation';

import { DefaultAppBarScreen } from '../screens/app-bar';
import { AvatarScreen } from '../screens/avatar';
import { AvatarImageScreen } from '../screens/avatar-image';
import {
  ContainedButtonShowcaseScreen,
  ContainedShapedButtonShowcaseScreen,
  DefaultButtonShowcaseScreen,
  FabButtonShowcaseScreen,
  HighlightedButtonShowcaseScreen,
  IconButtonShowcaseScreen,
  OutlinedButtonShowcaseScreen,
  OutlinedShapedButtonShowcaseScreen,
  XFabButtonShowcaseScreen,
} from '../screens/button';
import { IconShowcaseScreen } from '../screens/icon';
import { RfxImageScreen } from '../screens/image';
import {
  LargeListIconTwoLinesScreen,
  LargeListTwoLinesScreen,
  ListShowcaseScreen,
  MediumListIconCustomThemeScreen,
  MediumListIconScreen,
  SmallListIconScreen,
  SmallListScreen,
  XLargeListIconTwoLinesScreen,
  XSmallListIconScreen,
  XSmallListScreen,
  XXLargeListIconThreeLinesScreen,
  XXSmallListIconScreen,
  XXSmallListScreen,
} from '../screens/list';
import { ModalScreen } from '../screens/modal';
import {
  CoplanarBottomSheetScreen,
  CoplanarEndSheetScreen,
  CoplanarStartSheetScreen,
  CoplanarTopSheetScreen,
  ModalDialogSheetScreen,
  ModalSideSheetScreen,
  ModalTopBottomSheetScreen,
} from '../screens/sheet';
import { SurfaceScreen } from '../screens/surface';
import { SvgShowcaseScreen } from '../screens/svg';
import { RfxTextScreen } from '../screens/text';
import { TouchableScreen } from '../screens/touchable';
import { ViewScreen } from '../screens/view';
import { withAppLogic } from '../withAppLogic';

const appNavigationPrefix = 'reflexui.showcase.navigation';

const createNavScreenId = (screenId: string) =>
  `${appNavigationPrefix}.${screenId}`;

const AppBarNavigation = {
  default: `${appNavigationPrefix}appBar.DefaultAppBarScreen`,
};

const AvatarNavigation = {
  default: `${appNavigationPrefix}avatar.AvatarScreen`,
};

const AvatarImageNavigation = {
  default: `${appNavigationPrefix}avatarImage.AvatarImageScreen`,
};

const ButtonNavigation = {
  contained: createNavScreenId('button.ContainedButtonScreen'),
  containedShaped: createNavScreenId('button.ContainedShapedButtonScreen'),
  default: createNavScreenId('button.DefaultButtonScreen'),
  fab: createNavScreenId('button.FabButtonScreen'),
  highlighted: createNavScreenId('button.HighlightedButtonScreen'),
  icon: createNavScreenId('button.IconButtonScreen'),
  outlined: createNavScreenId('button.OutlinedButtonScreen'),
  outlinedShaped: createNavScreenId('button.OutlinedShapedButtonScreen'),
  xfab: createNavScreenId('button.XFabButtonScreen'),
};

const IconNavigation = {
  default: `${appNavigationPrefix}icon.IconScreen`,
};

const ImageNavigation = {
  default: `${appNavigationPrefix}image.RfxImageScreen`,
};

const ListNavigation = {
  largeIconTwoLines: `${appNavigationPrefix}list.LargeListIconTwoLinesScreen`,
  largeTwoLines: `${appNavigationPrefix}list.LargeListTwoLinesScreen`,
  mediumIcon: `${appNavigationPrefix}list.MediumListIconScreen`,
  // tslint:disable-next-line:max-line-length
  mediumIconCustomTheme: `${appNavigationPrefix}list.MediumListIconCustomThemeScreen`,
  small: `${appNavigationPrefix}list.ListSizeMScreen`,
  smallIcon: `${appNavigationPrefix}list.ListSizeSIconScreen`,
  welcome: `${appNavigationPrefix}list.ListScreen`,
  xlargeIconTwoLines: `${appNavigationPrefix}list.XLargeListIconTwoLinesScreen`,
  xsmall: `${appNavigationPrefix}list.ListSizeXSScreen`,
  xsmallIcon: `${appNavigationPrefix}list.ListSizeXSIconScreen`,
  // tslint:disable-next-line:max-line-length
  xxlargeIconThreeLines: `${appNavigationPrefix}list.XXLargeListIconThreeLinesScreen`,
  xxsmall: `${appNavigationPrefix}list.ListSizeXXSScreen`,
  xxsmallIcon: `${appNavigationPrefix}list.ListSizeXXSIconScreen`,
};

const ModalNavigation = {
  default: `${appNavigationPrefix}modal.ModalScreen`,
};

const SheetNavigation = {
  coplanarBottomSheet: `${appNavigationPrefix}sheet.CoplanarBottomSheetScreen`,
  coplanarEndSheet: `${appNavigationPrefix}sheet.CoplanarEndSheetScreen`,
  coplanarStartSheet: `${appNavigationPrefix}sheet.CoplanarStartSheetScreen`,
  coplanarTopSheet: `${appNavigationPrefix}sheet.CoplanarTopSheetScreen`,
  modalDialogSheet: `${appNavigationPrefix}sheet.ModalDialogSheetScreen`,
  modalSideSheet: `${appNavigationPrefix}sheet.ModalSideSheetScreen`,
  modalTopBottomSheet: `${appNavigationPrefix}sheet.ModalTopBottomSheetScreen`,
};

const SurfaceNavigation = {
  default: `${appNavigationPrefix}surface.SurfaceScreen`,
};

const SvgNavigation = {
  default: `${appNavigationPrefix}svg.SvgScreen`,
};

const RfxTextNavigation = {
  default: `${appNavigationPrefix}text.RfxTextScreen`,
};

const TouchableNavigation = {
  default: `${appNavigationPrefix}touchable.TouchableScreen`,
};

const ViewNavigation = {
  default: `${appNavigationPrefix}view.ViewScreen`,
};

const registerScreens = () => {
  /* APP BAR */
  Navigation.registerComponent(AppBarNavigation.default, () =>
    withAppLogic(DefaultAppBarScreen),
  );
  /* AVATAR */
  Navigation.registerComponent(AvatarNavigation.default, () =>
    withAppLogic(AvatarScreen),
  );
  /* AVATAR IMAGE */
  Navigation.registerComponent(AvatarImageNavigation.default, () =>
    withAppLogic(AvatarImageScreen),
  );
  /* BUTTON */
  Navigation.registerComponent(ButtonNavigation.contained, () =>
    withAppLogic(ContainedButtonShowcaseScreen),
  );
  Navigation.registerComponent(ButtonNavigation.containedShaped, () =>
    withAppLogic(ContainedShapedButtonShowcaseScreen),
  );
  Navigation.registerComponent(ButtonNavigation.default, () =>
    withAppLogic(DefaultButtonShowcaseScreen),
  );
  Navigation.registerComponent(ButtonNavigation.fab, () =>
    withAppLogic(FabButtonShowcaseScreen),
  );
  Navigation.registerComponent(ButtonNavigation.highlighted, () =>
    withAppLogic(HighlightedButtonShowcaseScreen),
  );
  Navigation.registerComponent(ButtonNavigation.icon, () =>
    withAppLogic(IconButtonShowcaseScreen),
  );
  Navigation.registerComponent(ButtonNavigation.outlined, () =>
    withAppLogic(OutlinedButtonShowcaseScreen),
  );
  Navigation.registerComponent(ButtonNavigation.outlinedShaped, () =>
    withAppLogic(OutlinedShapedButtonShowcaseScreen),
  );
  Navigation.registerComponent(ButtonNavigation.xfab, () =>
    withAppLogic(XFabButtonShowcaseScreen),
  );
  /* ICON */
  Navigation.registerComponent(IconNavigation.default, () =>
    withAppLogic(IconShowcaseScreen),
  );
  /* IMAGE */
  Navigation.registerComponent(ImageNavigation.default, () =>
    withAppLogic(RfxImageScreen),
  );
  /* LIST */
  Navigation.registerComponent(ListNavigation.welcome, () =>
    withAppLogic(ListShowcaseScreen),
  );
  Navigation.registerComponent(ListNavigation.xxsmall, () =>
    withAppLogic(XXSmallListScreen),
  );
  Navigation.registerComponent(ListNavigation.xxsmallIcon, () =>
    withAppLogic(XXSmallListIconScreen),
  );
  Navigation.registerComponent(ListNavigation.xsmall, () =>
    withAppLogic(XSmallListScreen),
  );
  Navigation.registerComponent(ListNavigation.xsmallIcon, () =>
    withAppLogic(XSmallListIconScreen),
  );
  Navigation.registerComponent(ListNavigation.small, () =>
    withAppLogic(SmallListScreen),
  );
  Navigation.registerComponent(ListNavigation.smallIcon, () =>
    withAppLogic(SmallListIconScreen),
  );
  Navigation.registerComponent(ListNavigation.mediumIcon, () =>
    withAppLogic(MediumListIconScreen),
  );
  Navigation.registerComponent(ListNavigation.mediumIconCustomTheme, () =>
    withAppLogic(MediumListIconCustomThemeScreen),
  );
  Navigation.registerComponent(ListNavigation.largeTwoLines, () =>
    withAppLogic(LargeListTwoLinesScreen),
  );
  Navigation.registerComponent(ListNavigation.largeIconTwoLines, () =>
    withAppLogic(LargeListIconTwoLinesScreen),
  );
  Navigation.registerComponent(ListNavigation.xlargeIconTwoLines, () =>
    withAppLogic(XLargeListIconTwoLinesScreen),
  );
  Navigation.registerComponent(ListNavigation.xxlargeIconThreeLines, () =>
    withAppLogic(XXLargeListIconThreeLinesScreen),
  );
  /* MODAL */
  Navigation.registerComponent(ModalNavigation.default, () =>
    withAppLogic(ModalScreen),
  );
  /* SHEET */
  Navigation.registerComponent(SheetNavigation.coplanarBottomSheet, () =>
    withAppLogic(CoplanarBottomSheetScreen),
  );
  Navigation.registerComponent(SheetNavigation.coplanarEndSheet, () =>
    withAppLogic(CoplanarEndSheetScreen),
  );
  Navigation.registerComponent(SheetNavigation.coplanarTopSheet, () =>
    withAppLogic(CoplanarTopSheetScreen),
  );
  Navigation.registerComponent(SheetNavigation.coplanarStartSheet, () =>
    withAppLogic(CoplanarStartSheetScreen),
  );
  Navigation.registerComponent(SheetNavigation.modalDialogSheet, () =>
    withAppLogic(ModalDialogSheetScreen),
  );
  Navigation.registerComponent(SheetNavigation.modalSideSheet, () =>
    withAppLogic(ModalSideSheetScreen),
  );
  Navigation.registerComponent(SheetNavigation.modalTopBottomSheet, () =>
    withAppLogic(ModalTopBottomSheetScreen),
  );
  /* SURFACE */
  Navigation.registerComponent(SurfaceNavigation.default, () =>
    withAppLogic(SurfaceScreen),
  );
  /* SVG */
  Navigation.registerComponent(SvgNavigation.default, () =>
    withAppLogic(SvgShowcaseScreen),
  );
  /* TEXT */
  Navigation.registerComponent(RfxTextNavigation.default, () =>
    withAppLogic(RfxTextScreen),
  );
  /* TOUCHABLE */
  Navigation.registerComponent(TouchableNavigation.default, () =>
    withAppLogic(TouchableScreen),
  );
  /* VIEW */
  Navigation.registerComponent(ViewNavigation.default, () =>
    withAppLogic(ViewScreen),
  );
};

export const AppNavigation = () => {
  registerScreens();

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: SheetNavigation.coplanarBottomSheet,
        },
      },
    });
  });
};
