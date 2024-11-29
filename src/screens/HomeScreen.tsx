import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {AppStyles} from '../styles/AppStyles';
import {useAppDispatch, useAppSelector} from '../redux/reduxHook';
import {RootState} from '../redux/store';
import {fetchTasks, addTask} from '../redux/actions/tasksActions';
import CreateTaskModal from '../components/CreateTasksModal';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';


type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const alltasks = useAppSelector((state: RootState) => state.tasks.allTasks);

  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  
  const handleCreateTask = (title: string) => {
    dispatch(addTask({title}));
  };

  return (
    <View style={AppStyles.container}>
      {}
      <TextInput
        style={AppStyles.searchBar}
        placeholder="Buscar tareas..."
        value={searchText}
        onChangeText={setSearchText}
      />

      {}
      <FlatList
        data={alltasks.filter(task =>
          task.title.toLowerCase().includes(searchText.toLowerCase()),
        )}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('TaskDetail', {taskId: item.id}); 
            }}>
            <View style={AppStyles.taskItem}>
              <Text style={AppStyles.taskTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={AppStyles.noTasks}>No hay tareas</Text>
        }
      />

      {}
      <TouchableOpacity
        style={AppStyles.createButton}
        onPress={() => setIsModalVisible(true)}>
        <Text style={AppStyles.createButtonText}>Crear Nueva Tarea</Text>
      </TouchableOpacity>

      {}
      <CreateTaskModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onCreate={handleCreateTask}
      />
    </View>
  );
};

export default HomeScreen;
