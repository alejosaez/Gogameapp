import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import MainNavigator from './src/navigation/MainNavigator';


const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
