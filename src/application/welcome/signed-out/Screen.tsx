import * as React from 'react';
import { Text, View } from 'react-native';

import { LabelButton } from '../../../ui/shared/widgets';

export default () => (
  <View>
    <Text>WelcomeSignedOutScreen 1234567</Text>
    <LabelButton outlined onPress={() => null}>
      Sign In
    </LabelButton>
  </View>
);
