import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/reduxHook';
import {RootState} from '../redux/store';
import {fetchTasks, addTask, deleteTask} from '../redux/actions/tasksActions';
import CreateTaskModal from '../components/CreateTasksModal';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import TrashIcon from '../components/TrashIcon';
import AddTaskIcon from '../components/AddTaskIcon';
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
      {}
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar tareas..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={alltasks.filter(task =>
          task.title.toLowerCase().includes(searchText.toLowerCase()),
        )}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.taskItemContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('TaskDetail', {taskId: item.id});
              }}
              style={styles.taskItem}>
              {}
              <Text style={styles.taskTitle}>{item.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
              <TrashIcon />
            </TouchableOpacity>
          </View>
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
