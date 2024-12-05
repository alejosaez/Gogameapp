import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Svg, Rect, Line} from 'react-native-svg';
import SFSymbol from 'react-native-sfsymbols';

const AddTaskIcon: React.FC = () => {
  if (Platform.OS === 'ios' && SFSymbol) {
    return (
      <SFSymbol
        name="plus.square.fill"
        weight="regular"
        scale="large"
        color="white"
        style={styles.icon}
      />
    );
  }

  return (
    <Svg
      width={56}
      height={56}
      viewBox="0 0 56 56"
      fill="none"
      style={styles.icon}>
      <Rect x="4" y="4" width="48" height="48" rx="12" fill="#9b59b6" />
      <Line
        x1="16"
        y1="28"
        x2="40"
        y2="28"
        stroke="white"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <Line
        x1="28"
        y1="16"
        x2="28"
        y2="40"
        stroke="white"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 56,
    height: 56,
  },
});

export default AddTaskIcon;
