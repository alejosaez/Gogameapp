import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Switch,
  Platform,
} from 'react-native';

interface CustomHeaderProps {
  theme: string;
  onToggleTheme: () => void;
  onMenuPress: () => void;
  menuColor: string;
  title: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  theme,
  onToggleTheme,
  onMenuPress,
  menuColor,
  title,
}) => {
  const isDarkTheme = theme === 'dark';

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkTheme ? '#333' : '#fff'},
        Platform.OS === 'ios' && {paddingTop: 20},
      ]}>
      <TouchableOpacity onPress={onMenuPress} style={styles.headerLeft}>
        <Text style={[styles.menuText, {color: menuColor}]}>☰</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {color: isDarkTheme ? '#fff' : '#000'}]}>
        {title}
      </Text>
      <Switch
        value={isDarkTheme}
        onValueChange={onToggleTheme}
        style={[
          styles.headerRight,
          Platform.OS === 'ios' && {transform: [{scale: 0.8}]},
        ]}
        trackColor={{
          false: '#767577',
          true: '#9b59b6',
        }}
        thumbColor={isDarkTheme ? '#fff' : '#f4f3f4'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerLeft: {
    marginLeft: 10,
  },
  menuText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRight: {
    marginRight: 10,
  },
});

export default CustomHeader;
