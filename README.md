# Task Management Application Documentation

## **Application Name**
**GoGameApp**

## **Description**
GoGameApp is a task management application designed to help users efficiently organize and manage their activities. It offers functionalities such as task creation, editing, searching, and deletion.

---

## **Key Features**
- **Task Management**: Create, edit, and delete tasks.
- **Multi-selection**: Select multiple tasks for batch actions (e.g., deletion).
- **Search**: Search bar with filtering functionality.
- **Internationalization**: Support for multiple languages using `i18next` (Spanish and English).
- **Dark/Light Mode**: Dynamic theming for a better visual experience.
- **Modern Interface**: Responsive and accessible design implemented with `React Native`.

---

## **Technologies Used**

### **Frontend**
- **React Native**: The primary framework for building the mobile application.
- **React Navigation**: Navigation management within the application.
- **React Native Vector Icons**: Custom icons for the UI.

### **Global State Management**
- **Redux Toolkit**: Handles global state management.
- **React Redux**: Integrates Redux with React Native.

### **Internationalization**
- **i18next**: Implements multilingual support.

### **Development Libraries**
- **Typescript**: Static typing for improved code robustness and maintainability.
- **ESLint and Prettier**: Tools for maintaining clean and styled code.

---

## **System Requirements**
- **Node.js**: `>= 18`
- **React Native CLI**
- **Android Studio** or **Xcode** for device emulation and testing.

---

## **Project Structure**

```plaintext
src/
├── components/         # Reusable components (CheckboxIcon, SearchBarIcon, etc.)
├── redux/              # Redux configuration and logic
│   ├── actions/        # Redux actions
│   ├── reducers/       # Reducers to handle global state
│   ├── store.ts        # Redux store configuration
├── screens/            # Main screens (HomeScreen, TaskDetail, etc.)
├── styles/             # Global styles
├── navigation/         # Navigation configuration
├── types/              # TypeScript type definitions
├── hooks/              # Custom hooks (e.g., for animations)

---

## **Installation**

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/your-repository.git
cd gogameapp

yarn install

## ** iOS **

cd ios
pod install
cd ..

## **Dependencies**

| Package                     | Version  | Description                                 |
|-----------------------------|----------|---------------------------------------------|
| `@react-navigation/native`  | `^7.0.7` | Navigation management                      |
| `@reduxjs/toolkit`          | `^2.3.0` | Global state management                    |
| `i18next`                   | `^24.0.5`| Internationalization                       |
| `react-native-vector-icons` | `^10.2.0`| Custom icons for UI                        |


## **Development Tools**

| Package                     | Version  | Description                                 |
|-----------------------------|----------|---------------------------------------------|
| `typescript`                | `5.0.4`  | Static typing                               |
| `eslint`                    | `^8.19.0`| Code analysis                               |
| `prettier`                  | `^3.4.1` | Code formatter                              |




# Documentación de la Aplicación de Tareas

## **Nombre de la Aplicación**
**GoGameApp**

## **Descripción**
GoGameApp es una aplicación de gestión de tareas diseñada para ayudar a los usuarios a organizar y administrar sus actividades de manera eficiente. Ofrece funcionalidades como la creación, edición, búsqueda y eliminación de tareas.

---

## **Características Principales**
- **Gestión de tareas**: Crear, editar y eliminar tareas.
- **Selección múltiple**: Selección de múltiples tareas para acciones masivas (como eliminar).
- **Búsqueda**: Barra de búsqueda con funcionalidad de filtro.
- **Internacionalización**: Soporte para múltiples idiomas utilizando `i18next` (español e inglés).
- **Modo oscuro/claro**: Tema dinámico para mejorar la experiencia visual.
- **Interfaz moderna**: Diseño responsivo y accesible, implementado con `React Native`.

---

## **Tecnologías Utilizadas**

### **Frontend**
- **React Native**: Framework principal para la construcción de la aplicación móvil.
- **React Navigation**: Manejo de la navegación en la aplicación.
- **React Native Vector Icons**: Íconos personalizados para la UI.

### **Estado Global**
- **Redux Toolkit**: Manejo del estado global de la aplicación.
- **React Redux**: Integración de Redux con React Native.

### **Internacionalización**
- **i18next**: Implementación de soporte multilingüe.

### **Librerías de Desarrollo**
- **Typescript**: Tipado estático para mejorar la robustez y mantenibilidad del código.
- **ESLint y Prettier**: Herramientas para mantener un código limpio y estilizado.

---

## **Requisitos del Sistema**
- **Node.js**: `>= 18`
- **React Native CLI**
- **Android Studio** o **Xcode** para emulación y pruebas en dispositivos.

---

## **Estructura del Proyecto**


src/
├── components/         # Componentes reutilizables (CheckboxIcon, SearchBarIcon, etc.)
├── redux/              # Configuración y lógica de Redux
│   ├── actions/        # Acciones de Redux
│   ├── reducers/       # Reducers para manejar el estado global
│   ├── store.ts        # Configuración del store
├── screens/            # Pantallas principales (HomeScreen, TaskDetail, etc.)
├── styles/             # Estilos globales
├── navigation/         # Configuración de navegación
├── types/              # Definición de tipos para TypeScript
├── hooks/              # Custom hooks (por ejemplo, para animaciones)




---

## **Instalación**

### **1. Clonar el Repositorio**
```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd gogameapp

yarn install

## ** IOS **

cd ios
pod install
cd ..

Dependencias

| Paquete                      | Versión  | Descripción                                  |
|------------------------------|----------|----------------------------------------------|
| `@react-navigation/native`   | `^7.0.7` | Manejo de navegación                        |
| `@reduxjs/toolkit`           | `^2.3.0` | Manejo del estado global                    |
| `i18next`                    | `^24.0.5`| Internacionalización                        |
| `react-native-vector-icons`  | `^10.2.0`| Íconos personalizados                       |


Herramientas de Desarrollo

| Paquete                      | Versión  | Descripción                                  |
|------------------------------|----------|----------------------------------------------|
| `typescript`                 | `5.0.4`  | Tipado estático                              |
| `eslint`                     | `^8.19.0`| Análisis de código                           |
| `prettier`                   | `^3.4.1` | Formateador de código                        |


