import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux/store';
import {toggleTheme} from '../redux/reducers/themeSlice';
import HomeScreen from '../screens/HomeScreen';
import TaskDetailScreen from '../screens/TaskDetailScreen';
import SideMenu from '../components/SideMenu';
import CustomHeader from '../components/CustomHeader';
import {darkColors, lightColors} from '../styles/AppStyles';
import {useTranslation} from 'react-i18next';

export type RootStackParamList = {
  Home: undefined;
  TaskDetail: {taskId: number; taskTitle: string};
};

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const {t} = useTranslation();

  const currentColors = theme === 'dark' ? darkColors : lightColors;

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const renderHomeHeader = () => (
    <CustomHeader
      theme={theme}
      onToggleTheme={handleToggleTheme}
      onMenuPress={() => setIsMenuVisible(true)}
      menuColor={currentColors.primary}
      title={t('tasks')}
    />
  );

  const renderTaskDetailHeader = (route: any) => (
    <CustomHeader
      theme={theme}
      onToggleTheme={handleToggleTheme}
      onMenuPress={() => setIsMenuVisible(true)}
      menuColor={currentColors.primary}
      title={route.params.taskTitle}
    />
  );

  return (
    <>
      <SideMenu
        visible={isMenuVisible}
        onClose={() => setIsMenuVisible(false)}
      />

      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            header: renderHomeHeader,
          }}
        />
        <Stack.Screen
          name="TaskDetail"
          component={TaskDetailScreen}
          options={({route}) => ({
            header: () => renderTaskDetailHeader(route),
          })}
        />
      </Stack.Navigator>
    </>
  );
};

export default MainNavigator;
