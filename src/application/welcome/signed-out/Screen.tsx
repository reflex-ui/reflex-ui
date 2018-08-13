import * as React from 'react';
import { Text, View } from 'react-native';

import { LabelButton } from '../../../ui/shared/widgets';

const Screen: React.SFC = (): JSX.Element => (
  <View>
    <Text>WelcomeSignedOutScreen 1234567</Text>
    <LabelButton outlined onPress={() => null}>
      Sign In
    </LabelButton>
  </View>
);

export default Screen;
