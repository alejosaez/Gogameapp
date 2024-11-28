import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {AppStyles} from '../styles/AppStyles';
import {useAppDispatch, useAppSelector} from '../redux/reduxHook';
import {RootState} from '../redux/store';
import {fetchTasks} from '../redux/actions/tasksActions';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const alltasks = useAppSelector((state: RootState) => state.tasks.allTasks);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleCreateTask = () => {
    console.log('Crear nueva tarea');
  };

  const filteredTasks = alltasks.filter(task =>
    task.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={AppStyles.container}>
      <TextInput
        style={AppStyles.searchBar}
        placeholder="Buscar tareas..."
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList
        data={filteredTasks}
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
        onPress={handleCreateTask}>
        <Text style={AppStyles.createButtonText}>Crear Nueva Tarea</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
