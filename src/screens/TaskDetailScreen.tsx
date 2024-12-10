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
import {createAppStyles, lightColors, darkColors} from '../styles/AppStyles';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/MainNavigator';
import {useTranslation} from 'react-i18next';

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

  // Selecciona el tema actual y genera estilos dinámicos
  const theme = useAppSelector((state: RootState) => state.theme.theme);
  const currentColors = theme === 'dark' ? darkColors : lightColors;
  const styles = createAppStyles(currentColors);

  // Obtén los datos de la tarea desde Redux
  const taskData = useAppSelector((state: RootState) =>
    state.tasks.allTasks.find(task => task.id === taskId),
  );

  // Traducción
  const {t} = useTranslation();

  // Estados locales para el título y contenido
  const [title, setTitle] = useState(taskData?.title || '');
  const [content, setContent] = useState(taskData?.content || '');

  useEffect(() => {
    if (taskData) {
      setTitle(taskData.title);
      setContent(taskData.content);
    }
  }, [taskData]);

  // Función para guardar cambios
  const handleSave = () => {
    if (taskData) {
      dispatch(updateTask({id: taskData.id, title, content}))
        .unwrap()
        .then(() => {
          console.log(t('taskUpdated')); // Log de éxito traducido
          navigation.goBack();
        })
        .catch(error => {
          console.error(t('taskUpdateError'), error); // Log de error traducido
        });
    }
  };

  // Si no se encuentra la tarea
  if (!taskData) {
    console.error(t('taskNotFound'), taskId); // Log traducido
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{t('taskNotFound')}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Campo de entrada para el título */}
      <TextInput
        style={styles.titleInput}
        value={title}
        onChangeText={setTitle}
        placeholder={t('taskTitlePlaceholder')} // Placeholder traducido
        placeholderTextColor={currentColors.placeholder}
      />

      {/* Campo de entrada para el contenido */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.editorContainer}>
        <TextInput
          style={[styles.editor, {backgroundColor: currentColors.card}]}
          multiline
          value={content}
          onChangeText={setContent}
          placeholder={t('taskContentPlaceholder')} // Placeholder traducido
          placeholderTextColor={currentColors.placeholder}
        />
      </KeyboardAvoidingView>

      {/* Botón para guardar */}
      <TouchableOpacity
        style={[styles.saveButton, {backgroundColor: currentColors.primary}]}
        onPress={handleSave}>
        <Text
          style={[
            styles.saveButtonText,
            {color: currentColors.buttonText || '#fff'},
          ]}>
          {t('saveChanges')} {/* Texto del botón traducido */}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskDetailScreen;
