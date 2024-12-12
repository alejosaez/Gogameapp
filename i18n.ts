import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {store} from './src/redux/store';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to the app!',
      tasks: 'Tasks',
      create: 'Create',
      searchPlaceholder: 'Search tasks...',
      taskCardPlaceholder: 'Task description here...',
      examplePlaceholder: 'e.g. Design the homepage',
      noTasks: 'No tasks available',
      cancel: 'Cancel',
      newTask: 'New Task',
      titleLabel: 'Title',
      taskUpdated: 'Task updated successfully.',
      taskUpdateError: 'Error updating the task.',
      taskNotFound: 'Task not found or missing in state.',
      taskTitlePlaceholder: 'Enter task title',
      taskContentPlaceholder: 'Write task details here...',
      saveChanges: 'Save Changes',
      contentLabel: 'Task Content',
      contentPlaceholder: 'Write task details here...',
      exitWithoutSave: 'Exit Without Save',
      areYouSure: 'Are you sure?',
      deleteConfirmationMessage: 'This action cannot be undone.',
      deleteAll: 'Delete All',
      noNotes: 'You have no notes',
    },
  },
  es: {
    translation: {
      welcome: '¡Bienvenido a la aplicación!',
      tasks: 'Tareas',
      create: 'Crear',
      cancel: 'Cancelar',
      searchPlaceholder: 'Buscar tareas...',
      taskCardPlaceholder: 'Descripción de la tarea aquí...',
      examplePlaceholder: 'Ej: Diseñar página de inicio',
      noTasks: 'No hay tareas disponibles',
      newTask: 'Nueva Tarea',
      titleLabel: 'Título',
      taskUpdated: 'Tarea actualizada exitosamente.',
      taskUpdateError: 'Error al actualizar la tarea.',
      taskNotFound: 'La tarea no existe o no se encuentra en el estado.',
      taskTitlePlaceholder: 'Introduce el título de la tarea',
      taskContentPlaceholder: 'Escribe los detalles de la tarea aquí...',
      saveChanges: 'Guardar Cambios',
      exitWithoutSave: 'Salir sin guardar',
      contentPlaceholder: 'Contenido de la tarea',
      contentLabel: 'Contenido de la tarea',
      areYouSure: '¿Estás seguro?',
      deleteConfirmationMessage: 'Esta acción no se puede deshacer.',
      noNotes: 'No tiene ninguna nota',
      deleteAll: 'Eliminar todo',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

store.subscribe(() => {
  const state = store.getState();
  const language = state.language.language;
  if (i18n.language !== language) {
    i18n.changeLanguage(language);
  }
});

export default i18n;
