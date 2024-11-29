const fs = require('fs');
const path = require('path');

// Función para eliminar comentarios del contenido del archivo
function removeComments(content) {
  return content
    .replace(/<!--[\s\S]*?-->/g, '') // Eliminar comentarios HTML
    .replace(/\/\/.*$/gm, '') // Eliminar comentarios de línea JS/TS
    .replace(/\/\*[\s\S]*?\*\//g, ''); // Eliminar comentarios multilínea JS/TS
}

// Función recursiva para procesar un directorio
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);

    if (fs.lstatSync(fullPath).isDirectory()) {
      processDirectory(fullPath); // Procesar subdirectorios
    } else if (file.match(/\.(js|jsx|ts|tsx|html|css|scss|json|xml)$/)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const updatedContent = removeComments(content);
      fs.writeFileSync(fullPath, updatedContent, 'utf8');
      console.log(`Comentarios eliminados de: ${fullPath}`);
    }
  });
}

// Cambia la ruta según tu estructura de proyecto
const baseDir = path.resolve(__dirname, '../src');
processDirectory(baseDir);
console.log('🚀 Todos los comentarios han sido eliminados.');
