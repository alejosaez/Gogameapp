import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TrashIcon from './TrashIcon';
import {useAppSelector} from '../redux/reduxHook';
import {lightColors, darkColors} from '../styles/AppStyles';

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

  const styles = createStyles(currentColors);
  const previewContent =
    content.length > 30 ? `${content.slice(0, 30)}...` : content;

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.textContainer} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{previewContent}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.trashContainer} onPress={onDelete}>
        <TrashIcon />
      </TouchableOpacity>
    </View>
  );
};

const createStyles = (colors: typeof lightColors) =>
  StyleSheet.create({
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.card,
      padding: 16,
      borderRadius: 12,
      marginBottom: 12,
      shadowColor: colors.text,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    textContainer: {
      flex: 1,
      marginRight: 12,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.text,
    },
    subtitle: {
      fontSize: 14,
      color: colors.placeholder,
      marginTop: 4,
    },
    trashContainer: {
      padding: 8,
    },
  });

export default CategoryItem;
