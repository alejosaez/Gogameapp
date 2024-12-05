import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import SFSymbol from 'react-native-sfsymbols';
import {useAppSelector} from '../redux/reduxHook';
import {lightColors, darkColors} from '../styles/AppStyles';

const ArrowIcon: React.FC = () => {
  const theme = useAppSelector(state => state.theme.theme);
  const currentColors = theme === 'dark' ? darkColors : lightColors;

  const iconColor = currentColors.primary;

  if (Platform.OS === 'ios' && typeof SFSymbol !== 'undefined') {
    return (
      <SFSymbol
        name="chevron.right"
        weight="regular"
        scale="large"
        color={iconColor}
        style={styles.icon}
      />
    );
  }

  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" style={styles.icon}>
      <Path
        d="M9 18l6-6-6-6"
        stroke={iconColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default ArrowIcon;
