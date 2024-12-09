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
    },
  },
  es: {
    translation: {
      welcome: '¡Bienvenido a la aplicación!',
      tasks: 'Tareas',
      create: 'Crear',

      searchPlaceholder: 'Buscar tareas...',
      taskCardPlaceholder: 'Descripción de la tarea aquí...',
      examplePlaceholder: 'Ej: Diseñar página de inicio',
      noTasks: 'No hay tareas disponibles',
    },
  },
};

// Configuración de i18next
i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Idioma por defecto
  fallbackLng: 'en', // Idioma por defecto si no hay coincidencias
  interpolation: {
    escapeValue: false, // React ya hace el escape de las variables
  },
  react: {
    useSuspense: false, // Deshabilita suspense para que no cause problemas si no se carga la traducción
  },
});

// Suscribirse a los cambios de idioma en el store de Redux
store.subscribe(() => {
  const state = store.getState();
  const language = state.language.language; // Obtén el idioma actual desde Redux
  if (i18n.language !== language) {
    i18n.changeLanguage(language); // Cambia el idioma en i18next
  }
});

export default i18n;
