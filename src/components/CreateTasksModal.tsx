import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Modal} from 'react-native';
import {AppStyles} from '../styles/AppStyles';

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
      <View style={AppStyles.modalContainer}>
        <Text style={AppStyles.modalTitle}>Crear Tarea</Text>
        <TextInput
          style={AppStyles.modalInput}
          placeholder="Título de la tarea"
          value={taskTitle}
          onChangeText={setTaskTitle}
        />
        <TouchableOpacity style={AppStyles.modalButton} onPress={handleCreate}>
          <Text style={AppStyles.modalButtonText}>Crear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={AppStyles.modalCloseButton} onPress={onClose}>
          <Text style={AppStyles.modalCloseButtonText}>Cerrar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CreateTaskModal;
