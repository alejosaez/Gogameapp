import React from 'react';
import {Platform, StyleSheet, ViewStyle} from 'react-native';
import {Svg, Path} from 'react-native-svg'; 
import SFSymbol from 'react-native-sfsymbols'; 

interface CalendarIconProps {
  color: string;
  style?: ViewStyle;
}

const CalendarIcon: React.FC<CalendarIconProps> = ({color}) => {
  if (Platform.OS === 'ios' && SFSymbol) {
    return (
      <SFSymbol
        name="calendar"
        weight="regular"
        scale="medium"
        color={color}
        style={styles.icon}
      />
    );
  }

  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" style={styles.icon}>
      <Path
        d="M19 3h-1V1h-2v2H8V1H6v2H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V10h14v9zm0-11H5V5h14v3z"
        fill={color}
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

export default CalendarIcon;
