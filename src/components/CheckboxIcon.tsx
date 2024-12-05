import React from 'react';
import {Platform, TouchableOpacity} from 'react-native';
import {Svg, Path, Rect} from 'react-native-svg';
import SFSymbol from 'react-native-sfsymbols';
import {useAppSelector} from '../redux/reduxHook';
import {createAppStyles, lightColors, darkColors} from '../styles/AppStyles';

interface CheckboxIconProps {
  isChecked: boolean;
  onPress: () => void;
}

const CheckboxIcon: React.FC<CheckboxIconProps> = ({isChecked, onPress}) => {
  const theme = useAppSelector(state => state.theme.theme);
  const currentColors = theme === 'dark' ? darkColors : lightColors;
  const styles = createAppStyles(currentColors);

  const iconColor = isChecked
    ? currentColors.primary
    : currentColors.placeholder;

  return (
    <TouchableOpacity onPress={onPress} style={styles.checkboxIcon}>
      {Platform.OS === 'ios' && typeof SFSymbol !== 'undefined' ? (
        <SFSymbol
          name={isChecked ? 'checkmark.square.fill' : 'square'}
          weight="regular"
          scale="large"
          color={iconColor}
          style={styles.iconCheckBox}
        />
      ) : (
        <Svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          style={styles.iconCheckBox}>
          {isChecked ? (
            <Path
              d="M4 12l6 6L20 6"
              stroke={iconColor}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          ) : (
            <Rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="4"
              stroke={iconColor}
              strokeWidth={2}
              fill="none"
            />
          )}
        </Svg>
      )}
    </TouchableOpacity>
  );
};

export default CheckboxIcon;
