import React, {useState, useRef, useEffect, useCallback} from 'react';
import {Modal, View, Text, TouchableOpacity, Animated} from 'react-native';
import {useAppSelector, useAppDispatch} from '../redux/reduxHook';
import {createAppStyles, lightColors, darkColors} from '../styles/AppStyles';
import {setLanguage} from '../redux/reducers/languageSlice';

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

  const slideAnim = useRef(new Animated.Value(-300)).current;

  const animateMenu = useCallback(
    (toValue: number) => {
      Animated.timing(slideAnim, {
        toValue,
        duration: 300,
        useNativeDriver: false,
      }).start();
    },
    [slideAnim],
  );

  useEffect(() => {
    if (visible) {
      animateMenu(0);
    } else {
      animateMenu(-300);
    }
  }, [visible, animateMenu]);

  const handleLanguageChange = (language: 'en' | 'es') => {
    dispatch(setLanguage(language));
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
            <Text style={styles.sideMenuText}>Language</Text>
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
