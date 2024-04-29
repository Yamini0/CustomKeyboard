import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Store } from './src/redux';
import { Provider as ReduxProvider } from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';

function App(): React.JSX.Element {
  return (
    <ReduxProvider store={Store}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </ReduxProvider>
  );
}

export default App;
