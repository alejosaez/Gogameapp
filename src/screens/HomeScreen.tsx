import React, {useEffect, useState} from 'react';
import {View, TextInput, FlatList, TouchableOpacity, Text} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/reduxHook';
import {RootState} from '../redux/store';
import {fetchTasks, addTask, deleteTask} from '../redux/actions/tasksActions';
import CreateTaskModal from '../components/CreateTasksModal';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/MainNavigator';
import AddTaskIcon from '../components/AddTaskIcon';
import CategoryItem from '../components/CategoryItem';
import {createAppStyles, lightColors, darkColors} from '../styles/AppStyles';
import {Task} from '../types/types';
import {useTranslation} from 'react-i18next';
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const alltasks = useAppSelector((state: RootState) => state.tasks.allTasks);
  const theme = useAppSelector((state: RootState) => state.theme.theme);
  const {t} = useTranslation();

  const [searchText, setSearchText] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);

  const currentColors = theme === 'dark' ? darkColors : lightColors;
  const styles = createAppStyles(currentColors);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleCreateTask = (title: string) => {
    dispatch(addTask({title}));
  };

  const handleDeleteTask = (id: number) => {
    dispatch(deleteTask(id));
  };

  const toggleSelectTask = (id: number) => {
    if (selectedTasks.includes(id)) {
      setSelectedTasks(selectedTasks.filter(selectedId => selectedId !== id));
    } else {
      setSelectedTasks([...selectedTasks, id]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder={t('searchPlaceholder')}
        placeholderTextColor={currentColors.placeholder}
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={alltasks.filter(task =>
          task.title.toLowerCase().includes(searchText.toLowerCase()),
        )}
        keyExtractor={(item: Task) => item.id.toString()}
        renderItem={({item}: {item: Task}) => (
          <CategoryItem
            title={item.title}
            content={item.content}
            isSelected={selectedTasks.includes(item.id)}
            onPress={() => {
              if (!selectedTasks.includes(item.id)) {
                navigation.navigate('TaskDetail', {
                  taskId: item.id,
                  taskTitle: item.title,
                });
              }
            }}
            onDelete={() => handleDeleteTask(item.id)}
            onSelect={() => toggleSelectTask(item.id)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyStateText}>No hay tareas</Text>
        }
      />
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => setIsModalVisible(true)}>
        <AddTaskIcon />
      </TouchableOpacity>
      <CreateTaskModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onCreate={handleCreateTask}
      />
    </View>
  );
};

export default HomeScreen;
