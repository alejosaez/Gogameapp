import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {AppStyles} from '../styles/AppStyles';
import {useAppDispatch, useAppSelector} from '../redux/reduxHook';
import {RootState} from '../redux/store';
import {fetchTasks, addTask, deleteTask} from '../redux/actions/tasksActions';
import CreateTaskModal from '../components/CreateTasksModal';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import TrashIcon from '../components/TrashIcon'; // Ícono de basura
import AddTaskIcon from '../components/AddTaskIcon';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const alltasks = useAppSelector((state: RootState) => state.tasks.allTasks);

  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Cargar tareas al montar el componente
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
    <View style={AppStyles.container}>
      <TextInput
        style={AppStyles.searchBar}
        placeholder="Buscar tareas..."
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Lista de tareas */}
      <FlatList
        data={alltasks.filter(task =>
          task.title.toLowerCase().includes(searchText.toLowerCase()),
        )}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={AppStyles.taskItemContainer}>
            {/* Navegar a los detalles de la tarea */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('TaskDetail', {taskId: item.id});
              }}
              style={AppStyles.taskItem}>
              <Text style={AppStyles.taskTitle}>{item.title}</Text>
            </TouchableOpacity>

            {/* Ícono de basura para eliminar */}
            <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
              <TrashIcon />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={AppStyles.emptyStateText}>No hay tareas</Text>
        }
      />

      <TouchableOpacity
        style={AppStyles.createButton}
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
