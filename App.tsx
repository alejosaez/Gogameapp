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
import {View, Switch, StyleSheet} from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  TaskDetail: {taskId: number; taskTitle: string}; // Agregamos `taskTitle` como parámetro
};

const Stack = createStackNavigator<RootStackParamList>();

const HeaderRightSwitch: React.FC<{theme: string; toggleTheme: () => void}> = ({
  theme,
  toggleTheme,
}) => {
  const styles = StyleSheet.create({
    headerRight: {
      marginRight: 10,
      transform: [{scale: 0.7}], // Escala para reducir el tamaño del Switch
    },
  });

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
        {/* Cambia el título de la pantalla "Home" */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Tasks'}}
        />
        {/* Cambia dinámicamente el título de la pantalla "TaskDetail" */}
        <Stack.Screen
          name="TaskDetail"
          component={TaskDetailScreen}
          options={({route}) => ({
            title: route.params.taskTitle || 'Detalles de la tarea', // Usa el título de la tarea o un valor predeterminado
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
