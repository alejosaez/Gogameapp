import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import SFSymbol from 'react-native-sfsymbols';
import {useAppSelector} from '../redux/reduxHook';
import {lightColors, darkColors} from '../styles/AppStyles';

const TrashIconLarge: React.FC = () => {
  const theme = useAppSelector(state => state.theme.theme);
  const currentColors = theme === 'dark' ? darkColors : lightColors;

  const iconColor = currentColors.primary;

  if (Platform.OS === 'ios' && typeof SFSymbol !== 'undefined') {
    return (
      <SFSymbol
        name="trash"
        weight="regular"
        scale="large"
        color={iconColor}
        style={[styles.icon, {width: 16, height: 16}]}
      />
    );
  }

  return (
    <Svg width={56} height={56} viewBox="0 0 24 24" style={styles.icon}>
      <Path
        d="M3 6h18M10 11v6M14 11v6M5 6h14l-1.5 14h-11L5 6zm3-3h8v3H8V3z"
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
    width: 16,
    height: 16,
  },
});

export default TrashIconLarge;
