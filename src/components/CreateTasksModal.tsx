import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useAppSelector} from '../redux/reduxHook';
import {createAppStyles, lightColors, darkColors} from '../styles/AppStyles';
import {useTranslation} from 'react-i18next';

interface CreateTaskModalProps {
  isVisible: boolean;
  onClose: () => void;
  onCreate: (title: string, content: string) => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
  isVisible,
  onClose,
  onCreate,
}) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskContent, setTaskContent] = useState('');
  const [titleError, setTitleError] = useState(false); 

  const theme = useAppSelector(state => state.theme.theme);
  const currentColors = theme === 'dark' ? darkColors : lightColors;
  const styles = createAppStyles(currentColors);
  const {t} = useTranslation();

  const handleCreate = () => {
    if (taskTitle.trim()) {
      setTitleError(false);
      onCreate(taskTitle.trim(), taskContent.trim());
      setTaskTitle('');
      setTaskContent('');
      onClose();
    } else {
      setTitleError(true); 
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <KeyboardAvoidingView
        style={styles.modalOverlay}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{t('newTask')}</Text>

          <Text style={styles.label}>{t('titleLabel')}</Text>
          <TextInput
            style={[
              styles.input,
              {color: currentColors.text},
              titleError && {borderColor: 'red', borderWidth: 1},
            ]}
            placeholder={t('examplePlaceholder')}
            placeholderTextColor={currentColors.placeholder}
            value={taskTitle}
            onChangeText={text => {
              setTaskTitle(text);
              if (text.trim()) setTitleError(false);
            }}
          />
          {titleError && (
            <Text style={{color: 'red', marginTop: 5}}>
              {t('titleRequired')}
            </Text>
          )}

          <Text style={styles.label}>{t('contentLabel')}</Text>
          <TextInput
            style={[styles.input, {color: currentColors.text, height: 100}]}
            placeholder={t('contentPlaceholder')}
            placeholderTextColor={currentColors.placeholder}
            value={taskContent}
            onChangeText={setTaskContent}
            multiline={true}
          />

          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.modalButton} onPress={handleCreate}>
              <Text style={styles.modalButtonText}>{t('create')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalCloseButton} onPress={onClose}>
              <Text style={styles.modalCloseButtonText}>{t('cancel')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default CreateTaskModal;
