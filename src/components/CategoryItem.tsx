import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TrashIcon from './TrashIcon';
import {useAppSelector} from '../redux/reduxHook';
import {createAppStyles, lightColors, darkColors} from '../styles/AppStyles';

interface CategoryItemProps {
  title: string;
  content: string;
  onPress: () => void;
  onDelete: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  title,
  content,
  onPress,
  onDelete,
}) => {
  const theme = useAppSelector(state => state.theme.theme);
  const currentColors = theme === 'dark' ? darkColors : lightColors;
  const styles = createAppStyles(currentColors);

  const previewContent =
    content.length > 30 ? `${content.slice(0, 30)}...` : content;

  return (
    <View style={styles.categoryCard}>
      <TouchableOpacity style={styles.categoryTextContainer} onPress={onPress}>
        <Text style={styles.categoryTitle}>{title}</Text>
        <Text style={styles.categorySubtitle}>{previewContent}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.categoryTrashContainer}
        onPress={onDelete}>
        <TrashIcon />
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
