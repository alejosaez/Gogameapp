// import React, {useState} from 'react';
// import {View, Text, TextInput, TouchableOpacity} from 'react-native';
// import {AppStyles} from '../styles/AppStyles';
// import {RouteProp, useNavigation} from '@react-navigation/native';
// import {StackNavigationProp} from '@react-navigation/stack';
// import {RootStackParamList} from '../navigation/RootStackParamList'; // Define tus rutas

// type TaskDetailScreenRouteProp = RouteProp<RootStackParamList, 'TaskDetail'>;
// type TaskDetailScreenNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'TaskDetail'
// >;

// interface TaskDetailScreenProps {
//   route: TaskDetailScreenRouteProp;
//   navigation: TaskDetailScreenNavigationProp;
// }

// const TaskDetailScreen: React.FC<TaskDetailScreenProps> = ({route}) => {
//   const {task} = route.params;
//   const [title, setTitle] = useState(task.title);
//   const [content, setContent] = useState(task.content);

//   const handleSave = () => {
//     console.log('Tarea actualizada:', {id: task.id, title, content});
//     // Aquí podrías disparar una acción Redux para actualizar la tarea
//     // navigation.goBack(); // Vuelve a la pantalla anterior
//   };

//   return (
//     <View style={AppStyles.container}>
//       <Text style={AppStyles.modalTitle}>Editar Tarea</Text>
//       <TextInput
//         style={AppStyles.modalInput}
//         placeholder="Título"
//         value={title}
//         onChangeText={setTitle}
//       />
//       <TextInput
//         style={AppStyles.modalInput}
//         placeholder="Contenido"
//         value={content}
//         onChangeText={setContent}
//         multiline
//       />
//       <TouchableOpacity style={AppStyles.modalButton} onPress={handleSave}>
//         <Text style={AppStyles.modalButtonText}>Guardar Cambios</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={AppStyles.modalCloseButton}
//         onPress={() => navigation.goBack()}>
//         <Text style={AppStyles.modalCloseButtonText}>Cancelar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default TaskDetailScreen;
