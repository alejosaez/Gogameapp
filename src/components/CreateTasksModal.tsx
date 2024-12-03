import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Modal} from 'react-native';
import {useAppSelector} from '../redux/reduxHook';
import {createAppStyles, lightColors, darkColors} from '../styles/AppStyles';

interface CreateTaskModalProps {
  isVisible: boolean;
  onClose: () => void;
  onCreate: (title: string) => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
  isVisible,
  onClose,
  onCreate,
}) => {
  const [taskTitle, setTaskTitle] = useState('');

  const theme = useAppSelector(state => state.theme.theme);
  const currentColors = theme === 'dark' ? darkColors : lightColors;
  const styles = createAppStyles(currentColors);

  const handleCreate = () => {
    if (taskTitle.trim()) {
      onCreate(taskTitle);
      setTaskTitle('');
      onClose();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Crear Tarea</Text>
        <TextInput
          style={styles.modalInput}
          placeholder="Título de la tarea"
          value={taskTitle}
          onChangeText={setTaskTitle}
        />
        <TouchableOpacity style={styles.modalButton} onPress={handleCreate}>
          <Text style={styles.modalButtonText}>Crear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalCloseButton} onPress={onClose}>
          <Text style={styles.modalCloseButtonText}>Cerrar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CreateTaskModal;
