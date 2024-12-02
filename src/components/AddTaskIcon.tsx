import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Svg, Path, Rect, Line } from 'react-native-svg'; // Para Android
import SFSymbol from 'react-native-sfsymbols'; // Para iOS

const AddTaskIcon: React.FC = () => {
  if (Platform.OS === 'ios' && SFSymbol) {
    return (
      <SFSymbol
        name="plus.circle.fill"
        weight="regular"
        scale="medium"
        color="white"
        style={styles.icon}
      />
    );
  }

  return (
    <Svg width={36} height={36} viewBox="0 0 48 48" style={styles.icon}>
      {/* Contorno del clipboard */}
      <Rect
        x={8}
        y={4}
        width={32}
        height={40}
        rx={4}
        ry={4}
        stroke="white" // Solo borde, sin fondo
        strokeWidth={2}
        fill="none" // Fondo transparente
      />
      {/* Clip superior */}
      <Rect x={16} y={2} width={16} height={6} rx={2} ry={2} fill="white" />
      {/* Checkbox 1 */}
      <Rect x={12} y={12} width={8} height={8} stroke="white" strokeWidth={2} fill="none" />
      <Path
        d="M14 16l2 2 4-4"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Línea de texto 1 */}
      <Line x1={24} y1={16} x2={36} y2={16} stroke="white" strokeWidth={2} />
      {/* Checkbox 2 */}
      <Rect x={12} y={24} width={8} height={8} stroke="white" strokeWidth={2} fill="none" />
      {/* Línea de texto 2 */}
      <Line x1={24} y1={28} x2={36} y2={28} stroke="white" strokeWidth={2} />
      {/* Checkbox 3 */}
      <Rect x={12} y={36} width={8} height={8} stroke="white" strokeWidth={2} fill="none" />
      {/* Línea de texto 3 */}
      <Line x1={24} y1={40} x2={36} y2={40} stroke="white" strokeWidth={2} />
    </Svg>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 36,
    height: 36,
  },
});

export default AddTaskIcon;