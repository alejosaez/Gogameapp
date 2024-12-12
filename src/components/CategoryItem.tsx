import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TrashIcon from './TrashIcon';
import ArrowIcon from './ArrowIcon';
import CheckboxIcon from './CheckboxIcon';
import {useAppSelector} from '../redux/reduxHook';
import {createAppStyles, lightColors, darkColors} from '../styles/AppStyles';
import { useTranslation } from 'react-i18next';

interface CategoryItemProps {
  title: string;
  content: string;
  isSelected: boolean;
  onPress: () => void;
  onDelete: () => void;
  onSelect: () => void;
  lockedBy?: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  title,
  content,
  isSelected,
  onPress,
  onDelete,
  onSelect,
}) => {
  const theme = useAppSelector(state => state.theme.theme);
  const currentColors = theme === 'dark' ? darkColors : lightColors;
  const styles = createAppStyles(currentColors);
  const {t} = useTranslation();
  const displayContent = content.trim()
  ? content.length > 20
    ? `${content.slice(0, 20)}...`
    : content
  : t('noNotes');

  return (
    <View style={styles.rowContainer}>
      <CheckboxIcon isChecked={isSelected} onPress={onSelect} />
      <View style={styles.categoryCard}>
        <TouchableOpacity
          style={styles.categoryTextContainer}
          onPress={onPress}>
          <Text style={styles.categoryTitle}>{title}</Text>
          <Text style={styles.categorySubtitle}>{displayContent}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryTrashContainer}
          onPress={isSelected ? onDelete : onPress}>
          {isSelected ? <TrashIcon /> : <ArrowIcon />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryItem;
