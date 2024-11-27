import {StyleSheet} from 'react-native';

const Colors = {
  primary: '#3498db',
  secondary: '#2ecc71',
  background: '#f4f4f4',
  text: '#333',
  error: '#e74c3c',
  border: '#ddd',
  placeholder: '#aaa',
  accent: '#8e44ad',
};

const Spacing = {
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32,
};

const FontSize = {
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
};

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.medium,
  },
  text: {
    fontSize: FontSize.medium,
    color: Colors.text,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.medium,
    paddingHorizontal: Spacing.large,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: FontSize.medium,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  searchBar: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: Spacing.medium,
    fontSize: FontSize.medium,
    borderColor: Colors.border,
    borderWidth: 1,
    marginBottom: Spacing.medium,
    color: Colors.text,
  },
  taskItem: {
    backgroundColor: '#fff',
    padding: Spacing.medium,
    borderRadius: 8,
    marginBottom: Spacing.small,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  taskTitle: {
    fontSize: FontSize.medium,
    color: Colors.text,
  },
  noTasks: {
    textAlign: 'center',
    color: Colors.placeholder,
    fontSize: FontSize.medium,
    marginTop: Spacing.medium,
  },
  createButton: {
    position: 'absolute',
    bottom: Spacing.large,
    right: Spacing.large,
    backgroundColor: Colors.accent,
    borderRadius: 50,
    padding: Spacing.medium,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  createButtonText: {
    color: '#fff',
    fontSize: FontSize.large,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  errorText: {
    color: Colors.error,
    fontSize: FontSize.small,
    marginTop: Spacing.small,
    textAlign: 'center',
  },
});

export {Colors, Spacing, FontSize, AppStyles};
