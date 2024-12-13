import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {createAppStyles, lightColors, darkColors} from '../styles/AppStyles';
import {useAppSelector} from '../redux/reduxHook';
import {useTranslation} from 'react-i18next';

interface DevelopmentModalProps {
  visible: boolean;
  onClose: () => void;
}

const DevelopmentModal: React.FC<DevelopmentModalProps> = ({
  visible,
  onClose,
}) => {
  const theme = useAppSelector(state => state.theme.theme);
  const currentColors = theme === 'dark' ? darkColors : lightColors;
  const styles = createAppStyles(currentColors);
  const {t} = useTranslation();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <KeyboardAvoidingView
        style={styles.modalOverlay}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.modalContent}>
          <View style={styles.centeredView}>
            <Text style={styles.modalTitle}>{t('developmentMessage')}</Text>
          </View>

          <TouchableOpacity style={styles.modalButton} onPress={onClose}>
            <Text style={styles.modalButtonText}>{t('ok')}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default DevelopmentModal;
