import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {MainNav} from './src/navigation';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import reducer from './src/redux/reducers';

const store = configureStore({
  reducer,
});

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <MainNav />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
