import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useAppSelector} from '../redux/reduxHook';
import {createAppStyles, darkColors, lightColors} from '../styles/AppStyles';

const ConfirmDeleteModal: React.FC<{
  isVisible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}> = ({isVisible, onClose, onConfirm}) => {
  const theme = useAppSelector(state => state.theme.theme);
  const currentColors = theme === 'dark' ? darkColors : lightColors;
  const styles = createAppStyles(currentColors);
  const {t} = useTranslation();

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContentDelete}>
          <Text style={styles.modalTitle}>{t('areYouSure')}</Text>
          <Text style={styles.modalMessage}>
            {t('deleteConfirmationMessage')}
          </Text>

          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.modalCloseButton} onPress={onClose}>
              <Text style={styles.modalCloseButtonText}>{t('cancel')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.confirmButton]}
              onPress={onConfirm}>
              <Text style={styles.buttonText}>{t('deleteAll')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmDeleteModal;
