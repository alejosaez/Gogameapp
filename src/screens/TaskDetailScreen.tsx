// import React, {useEffect, useState} from 'react';
// import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
// import {useRoute} from '@react-navigation/native';
// import {useSelector, useDispatch} from 'react-redux';
// import {fetchTaskById, updateTask} from '../../redux/slices/tasksSlice';

// const TasksDetailScreen = () => {
//   const route = useRoute();
//   const dispatch = useDispatch();
//   const {taskId} = route.params; // Obtener el ID desde los parámetros
//   const task = useSelector(state =>
//     state.tasks.items.find(item => item.id === taskId),
//   );

//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   useEffect(() => {
//     if (!task) {
//       // Fetch del backend si no está en el estado global
//       dispatch(fetchTaskById(taskId));
//     } else {
//       // Cargar los datos de la tarea
//       setTitle(task.title);
//       setContent(task.content);
//     }
//   }, [task, taskId]);

//   const handleSave = () => {
//     dispatch(updateTask({id: taskId, title, content}));
//     // Navegar de regreso o mostrar confirmación
//   };

//   if (!task) {
//     return <Text>Loading...</Text>; // Renderizar un estado de carga
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Título</Text>
//       <TextInput
//         style={styles.input}
//         value={title}
//         onChangeText={setTitle}
//         placeholder="Edita el título"
//       />
//       <Text style={styles.label}>Contenido</Text>
//       <TextInput
//         style={[styles.input, styles.content]}
//         value={content}
//         onChangeText={setContent}
//         placeholder="Edita el contenido"
//         multiline
//       />
//       <Button title="Guardar" onPress={handleSave} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {flex: 1, padding: 16},
//   label: {fontSize: 16, marginBottom: 8},
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 8,
//     marginBottom: 16,
//     borderRadius: 4,
//   },
//   content: {height: 100, textAlignVertical: 'top'},
// });

// export default TasksDetailScreen;
