import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TrashIcon from './TrashIcon';
import ArrowIcon from './ArrowIcon';
import CheckboxIcon from './CheckboxIcon';
import {useAppSelector} from '../redux/reduxHook';
import {createAppStyles, lightColors, darkColors} from '../styles/AppStyles';

interface CategoryItemProps {
  title: string;
  content: string;
  isSelected: boolean;
  onPress: () => void;
  onDelete: () => void;
  onSelect: () => void;
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

  const previewContent =
    content.length > 30 ? `${content.slice(0, 30)}...` : content;

  return (
    <View style={styles.rowContainer}>
      {}
      <CheckboxIcon isChecked={isSelected} onPress={onSelect} />
      {}
      <View style={styles.categoryCard}>
        <TouchableOpacity
          style={styles.categoryTextContainer}
          onPress={onPress}>
          <Text style={styles.categoryTitle}>{title}</Text>
          <Text style={styles.categorySubtitle}>{previewContent}</Text>
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
