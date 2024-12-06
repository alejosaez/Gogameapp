import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Switch} from 'react-native';
import {useAppSelector, useAppDispatch} from '../redux/reduxHook';
import {toggleTheme} from '../redux/reducers/themeSlice';
import {lightColors, darkColors} from '../styles/AppStyles';

interface CustomHeaderProps {
  onMenuPress: () => void;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({onMenuPress}) => {
  const theme = useAppSelector(state => state.theme.theme);
  const dispatch = useAppDispatch();
  const currentColors = theme === 'dark' ? darkColors : lightColors;

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      backgroundColor: currentColors.background,
      height: 60,
      borderBottomWidth: 1,
      borderBottomColor: currentColors.border,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: currentColors.text,
    },
    menuButton: {
      fontSize: 24,
      color: currentColors.text,
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onMenuPress}>
        <Text style={styles.menuButton}>☰</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Tasks</Text>
      <View style={styles.switchContainer}>
        <Switch
          value={theme === 'dark'}
          onValueChange={() => dispatch(toggleTheme())}
        />
      </View>
    </View>
  );
};

export default CustomHeader;
