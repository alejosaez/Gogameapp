import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux/store';
import {toggleTheme} from '../redux/reducers/themeSlice';
import HomeScreen from '../screens/HomeScreen';
import TaskDetailScreen from '../screens/TaskDetailScreen';
import SideMenu from '../components/SideMenu';
import {darkColors, lightColors} from '../styles/AppStyles';
import {TouchableOpacity, Text, Switch, StyleSheet} from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  TaskDetail: {taskId: number; taskTitle: string};
};

const Stack = createStackNavigator<RootStackParamList>();

const HeaderLeftMenu: React.FC<{onMenuPress: () => void}> = ({onMenuPress}) => (
  <TouchableOpacity onPress={onMenuPress} style={styles.headerLeft}>
    <Text style={styles.menuText}>☰</Text>
  </TouchableOpacity>
);

const HeaderRightSwitch: React.FC<{
  theme: string;
  onToggleTheme: () => void;
}> = ({theme, onToggleTheme}) => (
  <Switch
    value={theme === 'dark'}
    onValueChange={onToggleTheme}
    style={styles.headerRight}
  />
);

const MainNavigator: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const currentColors = theme === 'dark' ? darkColors : lightColors;
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleToggleTheme = (_value: boolean) => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <SideMenu
        visible={isMenuVisible}
        onClose={() => setIsMenuVisible(false)}
      />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: currentColors.background},
          headerTintColor: currentColors.text,
          headerLeft: () => (
            <HeaderLeftMenu onMenuPress={() => setIsMenuVisible(true)} />
          ),
          headerRight: () => (
            <HeaderRightSwitch
              theme={theme}
              onToggleTheme={handleToggleTheme}
            />
          ),
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Tasks'}}
        />
        <Stack.Screen
          name="TaskDetail"
          component={TaskDetailScreen}
          options={({route}) => ({
            title: route.params.taskTitle || 'Detalles de la tarea',
          })}
        />
      </Stack.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  menuText: {
    fontSize: 24,
    color: '#000', // Cambia según el tema
  },
  headerRight: {
    marginRight: 15,
  },
});

export default MainNavigator;
