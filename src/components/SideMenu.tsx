import React, {useState, useEffect} from 'react';
import {Modal, View, Text, TouchableOpacity, Animated} from 'react-native';
import {useAppSelector, useAppDispatch} from '../redux/reduxHook';
import {createAppStyles, lightColors, darkColors} from '../styles/AppStyles';
import {setLanguage} from '../redux/reducers/languageSlice';
import useSlideAnimation from './hook/ useSlideAnimation';
import i18n from '../../i18n';
interface SideMenuProps {
  visible: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({visible, onClose}) => {
  const theme = useAppSelector(state => state.theme.theme);
  const currentLanguage = useAppSelector(state => state.language.language);
  const dispatch = useAppDispatch();
  const currentColors = theme === 'dark' ? darkColors : lightColors;
  const styles = createAppStyles(currentColors);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const {slideAnim, animate} = useSlideAnimation(-300);

  useEffect(() => {
    if (visible) {
      animate(0);
    } else {
      animate(-300);
    }
  }, [visible, animate]);

  const handleLanguageChange = (language: 'en' | 'es') => {
    dispatch(setLanguage(language)); 
    i18n.changeLanguage(language); 
    setDropdownOpen(false); 
  };

  return (
    <Modal
      transparent
      animationType="none"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.sideMenuOverlay}>
        <Animated.View style={[styles.sideMenu, {left: slideAnim}]}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.backButton}>←</Text>
          </TouchableOpacity>

          <Text style={styles.sideMenuTitle}>Menu</Text>

          <TouchableOpacity
            style={styles.sideMenuItem}
            onPress={() => setDropdownOpen(!isDropdownOpen)}>
            <Text style={styles.sideMenuText}>
              {currentLanguage
                ? currentLanguage === 'en'
                  ? 'English'
                  : 'Español'
                : 'Language'}
            </Text>
          </TouchableOpacity>

          {isDropdownOpen && (
            <View style={styles.dropdown}>
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => handleLanguageChange('en')}>
                <Text
                  style={[
                    styles.dropdownItemText,
                    currentLanguage === 'en' && styles.selectedText,
                  ]}>
                  English
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => handleLanguageChange('es')}>
                <Text
                  style={[
                    styles.dropdownItemText,
                    currentLanguage === 'es' && styles.selectedText,
                  ]}>
                  Español
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default SideMenu;
