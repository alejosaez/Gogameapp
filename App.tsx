import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './src/redux/store'; // Asegúrate de que el store esté importado correctamente
import {RootState} from './src/redux/store'; // Asegúrate de que RootState esté importado correctamente
import {toggleTheme} from './src/redux/themeSlice';
import HomeScreen from './src/screens/HomeScreen';
import TaskDetailScreen from './src/screens/TaskDetailScreen';
import {createAppStyles, lightColors, darkColors} from './src/styles/AppStyles';
import {View, Text, Switch} from 'react-native';

// Definir el tipo para los parámetros de la pila de navegación
export type RootStackParamList = {
  Home: undefined;
  TaskDetail: {taskId: number};
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  // Seleccionar los colores según el tema
  const currentColors = theme === 'dark' ? darkColors : lightColors;

  // Crear los estilos con los colores actuales
  const styles = createAppStyles(currentColors);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TaskDetail" component={TaskDetailScreen} />
      </Stack.Navigator>
      {/* Agregar un switch para alternar entre temas */}
      <View style={styles.container}>
        <Text style={styles.text}>Current Theme: {theme}</Text>
        <Switch
          value={theme === 'dark'}
          onValueChange={(_value: boolean) => {
            dispatch(toggleTheme());
          }}
        />
      </View>
    </NavigationContainer>
  );
};

// Mover el Provider aquí para envolver toda la aplicación
export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
