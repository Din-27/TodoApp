import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabNav from './src/TabNav';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
};

export default RootNavigator;