import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './src/redux/store';
import {RootState} from './src/redux/store';
import {toggleTheme} from './src/redux/themeSlice';
import HomeScreen from './src/screens/HomeScreen';
import TaskDetailScreen from './src/screens/TaskDetailScreen';
import {lightColors, darkColors} from './src/styles/AppStyles';
import {View, Switch} from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  TaskDetail: {taskId: number};
};

const Stack = createStackNavigator<RootStackParamList>();

const HeaderRightSwitch: React.FC<{theme: string; toggleTheme: () => void}> = ({
  theme,
  toggleTheme,
}) => {
  const styles = {
    headerRight: {
      marginRight: 10,
    },
  };

  return (
    <View style={styles.headerRight}>
      <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
    </View>
  );
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const currentColors = theme === 'dark' ? darkColors : lightColors;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: currentColors.background},
          headerTintColor: currentColors.text,
          headerRight: () => (
            <HeaderRightSwitch
              theme={theme}
              toggleTheme={() => dispatch(toggleTheme())}
            />
          ),
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TaskDetail" component={TaskDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
