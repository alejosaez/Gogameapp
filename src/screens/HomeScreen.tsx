import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {AppStyles} from '../styles/AppStyles';
import {useAppDispatch, useAppSelector} from '../redux/reduxHook';
import {RootState} from '../redux/store';
import {fetchTasks, addTask} from '../redux/actions/tasksActions';
import CreateTaskModal from '../components/CreateTasksModal'; // Importa el componente

const HomeScreen = () => {
  const dispatch = useAppDispatch();
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
      <TextInput
        style={AppStyles.searchBar}
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
          <View style={AppStyles.taskItem}>
            <Text style={AppStyles.taskTitle}>{item.title}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={AppStyles.noTasks}>No hay tareas</Text>
        }
      />

      <TouchableOpacity
        style={AppStyles.createButton}
        onPress={() => setIsModalVisible(true)}>
        <Text style={AppStyles.createButtonText}>Crear Nueva Tarea</Text>
      </TouchableOpacity>

      {/* Componente de Modal */}
      <CreateTaskModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onCreate={handleCreateTask}
      />
    </View>
  );
};

export default HomeScreen;
