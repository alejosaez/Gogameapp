import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Modal} from 'react-native';
import {useAppSelector} from '../redux/reduxHook';
import {createAppStyles, lightColors, darkColors} from '../styles/AppStyles';
import CalendarIcon from './CalendarIcon'; 

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
      onCreate(taskTitle.trim()); 
      setTaskTitle(''); 
      onClose(); 
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Nueva Tarea</Text>

          {}
          <Text style={styles.label}>Título</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Diseñar página de inicio"
            placeholderTextColor={currentColors.placeholder}
            value={taskTitle}
            onChangeText={setTaskTitle}
          />

          {}
          <Text style={styles.label}>Categoría</Text>
          <View style={styles.categoryContainer}>
            <TouchableOpacity
              style={[styles.categoryButton, styles.categorySelected]}>
              <Text style={[styles.categoryText, styles.categoryTextSelected]}>
                Design
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>Frontend</Text>
            </TouchableOpacity>
          </View>

          {}
          <Text style={styles.label}>Fecha límite</Text>
          <TouchableOpacity style={styles.dateButton}>
            <CalendarIcon
              color={currentColors.text}
              style={styles.iconSpacing}
            />
            <Text style={styles.dateText}>11-06-2020, 17:00</Text>
          </TouchableOpacity>

          {}
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.modalButton} onPress={handleCreate}>
              <Text style={styles.modalButtonText}>Crear</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalCloseButton} onPress={onClose}>
              <Text style={styles.modalCloseButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CreateTaskModal;
