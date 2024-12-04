import React, {useEffect, useState} from 'react';
import {View, TextInput, FlatList, TouchableOpacity, Text} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/reduxHook';
import {RootState} from '../redux/store';
import {fetchTasks, addTask, deleteTask} from '../redux/actions/tasksActions';
import CreateTaskModal from '../components/CreateTasksModal';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import AddTaskIcon from '../components/AddTaskIcon';
import CategoryItem from '../components/CategoryItem';
import {createAppStyles, lightColors, darkColors} from '../styles/AppStyles';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const alltasks = useAppSelector((state: RootState) => state.tasks.allTasks);
  const theme = useAppSelector((state: RootState) => state.theme.theme);

  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const currentColors = theme === 'dark' ? darkColors : lightColors;
  const styles = createAppStyles(currentColors);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleCreateTask = (title: string) => {
    dispatch(addTask({title}));
  };

  const handleDeleteTask = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar tareas..."
        placeholderTextColor={currentColors.placeholder}
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={alltasks.filter(task =>
          task.title.toLowerCase().includes(searchText.toLowerCase()),
        )}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <CategoryItem
            title={item.title}
            content={item.content}
            onPress={() => {
              navigation.navigate('TaskDetail', {
                taskId: item.id,
                taskTitle: item.title,
              });
            }}
            onDelete={() => handleDeleteTask(item.id)}
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
