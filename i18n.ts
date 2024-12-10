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
