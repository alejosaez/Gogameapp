import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useAppSelector, useAppDispatch} from '../redux/reduxHook';
import {RootState} from '../redux/store';
import {updateTask} from '../redux/actions/tasksActions';
import {AppStyles} from '../styles/AppStyles';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';

type TaskDetailScreenRouteProp = RouteProp<RootStackParamList, 'TaskDetail'>;
type TaskDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TaskDetail'
>;

interface TaskDetailScreenProps {
  route: TaskDetailScreenRouteProp;
  navigation: TaskDetailScreenNavigationProp;
}

const TaskDetailScreen: React.FC<TaskDetailScreenProps> = ({
  route,
  navigation,
}) => {
  const {taskId} = route.params;
  const dispatch = useAppDispatch();

  const taskData = useAppSelector((state: RootState) =>
    state.tasks.allTasks.find(task => task.id === taskId),
  );

  const [title, setTitle] = useState(taskData?.title || '');
  const [content, setContent] = useState(taskData?.content || '');

  useEffect(() => {
    if (taskData) {
      setTitle(taskData.title);
      setContent(taskData.content);
    }
  }, [taskData]);

  const handleSave = () => {
    if (taskData) {
      dispatch(updateTask({id: taskData.id, title, content}))
        .unwrap()
        .then(() => {
          console.log('Tarea actualizada exitosamente.');
          navigation.goBack();
        })
        .catch(error => {
          console.error('Error al actualizar la tarea:', error);
        });
    }
  };

  if (!taskData) {
    console.error('Tarea no encontrada en Redux. ID:', taskId);
    return (
      <View style={AppStyles.container}>
        <Text style={AppStyles.errorText}>
          La tarea no existe o no se encuentra en el estado.
        </Text>
      </View>
    );
  }

  return (
    <View style={AppStyles.container}>
      <TextInput
        style={AppStyles.titleInput}
        value={title}
        onChangeText={setTitle}
        placeholder="Título de la tarea"
        placeholderTextColor="#999"
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={AppStyles.editorContainer}>
        <TextInput
          style={[AppStyles.editor, {textAlignVertical: 'top'}]}
          multiline
          value={content}
          onChangeText={setContent}
          placeholder="Escribí el detalle de la tarea aquí..."
          placeholderTextColor="#999"
        />
      </KeyboardAvoidingView>

      <TouchableOpacity style={AppStyles.saveButton} onPress={handleSave}>
        <Text style={AppStyles.saveButtonText}>Guardar Cambios</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskDetailScreen;
