import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

const lightColors = {
  primary: '#9b59b6',
  secondary: '#2ecc71',
  background: '#f4f4f4',
  text: '#333',
  error: '#e74c3c',
  border: '#ddd',
  placeholder: '#aaa',
  accent: '#8e44ad',
  card: '#f0ebea',
};

const darkColors = {
  primary: '#9b59b6',
  secondary: '#1abc9c',
  background: '#000',
  text: '#FFF',
  error: '#e74c3c',
  border: '#555',
  placeholder: '#888',
  accent: '#2ecc71',
  card: '#2A2A2A',
};

const Spacing = {
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32,
};

const Typography = {
  h1: {fontSize: 32, fontWeight: '700' as TextStyle['fontWeight']},
  h2: {fontSize: 24, fontWeight: '700' as TextStyle['fontWeight']},
  body: {fontSize: 16, fontWeight: '400' as TextStyle['fontWeight']},
  small: {fontSize: 12, fontWeight: '400' as TextStyle['fontWeight']},
};

interface AppStylesType {
  container: ViewStyle;
  text: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  searchBar: TextStyle;
  taskItem: ViewStyle;
  taskTitle: TextStyle;
  emptyStateText: TextStyle;
  createButton: ViewStyle;
  createButtonText: TextStyle;
  modalContainer: ViewStyle;
  modalTitle: TextStyle;
  modalInput: TextStyle;
  modalButton: ViewStyle;
  modalButtonText: TextStyle;
  modalCloseButton: ViewStyle;
  modalCloseButtonText: TextStyle;
  errorText: TextStyle;
  saveButton: ViewStyle;
  saveButtonText: TextStyle;
  titleInput: TextStyle;
  editor: ViewStyle;
  editorContainer: ViewStyle;
  taskItemContainer: ViewStyle;
  modalOverlay: ViewStyle;
  modalContent: ViewStyle;
  label: TextStyle;
  input: TextStyle;
  categoryContainer: ViewStyle;
  categoryButton: ViewStyle;
  categorySelected: ViewStyle;
  categoryText: TextStyle;
  categoryTextSelected: TextStyle;
  dateButton: ViewStyle;
  dateText: TextStyle;
  buttonGroup: ViewStyle;
  iconSpacing: ViewStyle;
  categoryTrashContainer: ViewStyle;
  categoryCard: ViewStyle;
  categoryTextContainer: TextStyle;
  categoryTitle: TextStyle;
  categorySubtitle: TextStyle;
  iconStyle: ViewStyle;
  checkboxIcon: ViewStyle;
  iconCheckBox: ViewStyle;
  rowContainer: ViewStyle;
  sideMenuOverlay: ViewStyle; 
  sideMenu: ViewStyle; 
  sideMenuTitle: TextStyle; 
  sideMenuItem: ViewStyle; 
  sideMenuText: TextStyle; 
  backButton: TextStyle; 
  dropdown: ViewStyle; 
  dropdownItem: ViewStyle; 
  dropdownItemText: TextStyle;
  selectedText: TextStyle;
}

const createAppStyles = (Colors: typeof lightColors): AppStylesType =>
  StyleSheet.create<AppStylesType>({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
      padding: 16,
    },
    searchBar: {
      height: 40,
      borderWidth: 1,
      borderColor: Colors.border,
      borderRadius: 8,
      paddingHorizontal: 10,
      backgroundColor: Colors.card,
      color: Colors.text,
      marginBottom: 16,
    },
    taskItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    taskTimeLabel: {
      fontSize: 14,
      color: Colors.placeholder,
      width: 50,
      textAlign: 'center',
    },
    taskItem: {
      flex: 1,
      backgroundColor: Colors.card,
      borderRadius: 16,
      padding: 16,
      marginLeft: 8,
      marginRight: 8,
    },
    taskTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: Colors.text,
    },
    emptyStateText: {
      textAlign: 'center',
      color: Colors.placeholder,
      fontSize: 16,
      marginTop: 20,
    },
    createButton: {
      position: 'absolute',
      bottom: 16,
      right: 16,
      backgroundColor: Colors.primary,
      borderRadius: 12,
      width: 56,
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    text: {
      ...Typography.body,
      color: Colors.text,
    },
    button: {
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: Spacing.medium,
      backgroundColor: Colors.primary,
      paddingHorizontal: Spacing.large,
    },
    buttonText: {
      ...Typography.body,
      color: '#fff',
      fontWeight: '700',
      textAlign: 'center',
    },
    createButtonText: {
      ...Typography.h2,
      color: '#fff',
      textAlign: 'center',
    },
    errorText: {
      ...Typography.small,
      color: Colors.error,
      marginTop: Spacing.small,
      textAlign: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: Spacing.large,
    },
    modalInput: {
      width: '100%',
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: Spacing.medium,
      marginBottom: Spacing.medium,
      ...Typography.body,
      color: Colors.text,
      borderWidth: 1,
      borderColor: Colors.border,
    },
    titleInput: {
      ...Typography.h2,
      color: Colors.text,
      borderBottomWidth: 1,
      borderBottomColor: Colors.border,
      marginBottom: Spacing.small,
      paddingVertical: 5,
    },
    editor: {
      flex: 1,
      backgroundColor: '#f9f9f9',
      padding: 10,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    editorContainer: {
      flex: 1,
    },
    saveButton: {
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.primary,
      marginTop: Spacing.medium,
      paddingVertical: Spacing.medium,
    },
    saveButtonText: {
      ...Typography.body,
      color: '#fff',
      fontWeight: '700',
    },

    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      width: '90%',
      backgroundColor: Colors.background,
      borderRadius: 20,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: Colors.text,
      marginBottom: 10,
    },
    label: {
      fontSize: 14,
      fontWeight: '600',
      color: Colors.text,
      marginTop: 15,
    },
    input: {
      borderWidth: 1,
      borderColor: Colors.border,
      borderRadius: 10,
      padding: 10,
      marginTop: 10,
      color: Colors.text,
    },
    categoryContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 10,
    },
    categoryButton: {
      padding: 10,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: Colors.border,
      marginRight: 10,
      marginBottom: 10,
    },
    categorySelected: {
      backgroundColor: Colors.primary,
      borderColor: Colors.primary,
    },
    categoryText: {
      fontSize: 12,
      color: Colors.text,
    },
    categoryTextSelected: {
      color: Colors.background,
    },
    dateButton: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: Colors.border,
      marginTop: 10,
    },
    dateText: {
      marginLeft: 10,
      color: Colors.text,
    },
    buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    modalButton: {
      backgroundColor: Colors.primary,
      padding: 15,
      borderRadius: 10,
    },
    modalButtonText: {
      color: Colors.background,
      fontWeight: '600',
      textAlign: 'center',
    },
    modalCloseButton: {
      backgroundColor: Colors.border,
      padding: 15,
      borderRadius: 10,
    },
    modalCloseButtonText: {
      color: Colors.text,
      fontWeight: '600',
      textAlign: 'center',
    },
    iconSpacing: {
      marginRight: 10,
    },
    categoryCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.card,
      padding: Spacing.small,
      borderRadius: Spacing.small,
      flex: 1,
    },
    categoryTextContainer: {
      flex: 1,
      marginRight: Spacing.small,
    },
    categoryTitle: {
      fontSize: Typography.body.fontSize,
      fontWeight: Typography.h2.fontWeight,
      color: Colors.text,
    },
    categorySubtitle: {
      fontSize: Typography.small.fontSize,
      color: Colors.placeholder,
      marginTop: Spacing.small,
    },
    categoryTrashContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: Spacing.small,
    },
    iconStyle: {
      width: 24,
      height: 24,
    },
    checkboxIcon: {
      marginRight: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconCheckBox: {
      width: 24,
      height: 24,
    },
    rowContainer: {
      marginRight: Spacing.small,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: Spacing.small,
    },
    sideMenuOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    sideMenu: {
      width: '75%',
      height: '100%',
      backgroundColor: Colors.background,
      padding: Spacing.medium,
      borderTopRightRadius: Spacing.medium,
      borderBottomRightRadius: Spacing.medium,
    },
    sideMenuTitle: {
      fontSize: Typography.h1.fontSize,
      fontWeight: Typography.h1.fontWeight,
      color: Colors.text,
      marginBottom: Spacing.large,
    },
    sideMenuItem: {
      marginBottom: Spacing.medium,
    },
    sideMenuText: {
      fontSize: Typography.body.fontSize,
      color: Colors.text,
    },
    backButton: {
      fontSize: Typography.h2.fontSize,
      color: Colors.text,
      marginBottom: Spacing.large,
    },
    dropdown: {
      backgroundColor: Colors.card,
      borderRadius: Spacing.small,
      paddingVertical: Spacing.small,
      marginTop: Spacing.medium,
    },
    dropdownItem: {
      padding: Spacing.small,
    },
    dropdownItemText: {
      fontSize: Typography.body.fontSize,
      color: Colors.text,
    },
    selectedText: {
      fontWeight: 'bold',
      color: Colors.accent, 
    },
  });

export {createAppStyles, lightColors, darkColors, Spacing, Typography};
