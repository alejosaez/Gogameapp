import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Svg, Rect} from 'react-native-svg';
import SFSymbol from 'react-native-sfsymbols';
import {useAppSelector} from '../redux/reduxHook';
import {lightColors, darkColors} from '../styles/AppStyles';

const MenuIcon: React.FC = () => {
  const theme = useAppSelector(state => state.theme.theme);
  const currentColors = theme === 'dark' ? darkColors : lightColors;

  const iconColor = currentColors.primary;

  if (Platform.OS === 'ios' && typeof SFSymbol !== 'undefined') {
    return (
      <SFSymbol
        name="line.horizontal.3"
        weight="regular"
        scale="large"
        color={iconColor}
        style={styles.icon}
      />
    );
  }

  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" style={styles.icon}>
      <Rect y="4" width="24" height="2" rx="1" fill={iconColor} />
      <Rect y="11" width="24" height="2" rx="1" fill={iconColor} />
      <Rect y="18" width="24" height="2" rx="1" fill={iconColor} />
    </Svg>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default MenuIcon;
