import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {AppStyles} from '../styles/AppStyles';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const [tasks, setTasks] = useState([
    { id: '1', title: 'Comprar leche' },
    { id: '2', title: 'Terminar proyecto' },
    { id: '3', title: 'Leer un libro' },
  ]);
  const handleCreateTask = () => {
    console.log('Crear nueva tarea');
  };

  const filteredTasks = tasks.filter(task =>
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
        keyExtractor={item => item.id}
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
