import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import SFSymbol from 'react-native-sfsymbols';

const TrashIcon: React.FC = () => {
  console.log('SFSymbol:', SFSymbol);

  if (Platform.OS === 'ios' && SFSymbol) {
    return (
      <SFSymbol
        name="trash"
        weight="regular"
        scale="large"
        color="black"
        style={styles.icon}
      />
    );
  }

  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" style={styles.icon}>
      <Path
        d="M3 6h18M10 11v6M14 11v6M5 6h14l-1.5 14h-11L5 6zm3-3h8v3H8V3z"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
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

export default TrashIcon;
