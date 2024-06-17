import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import indexRoutes from './Routes/index.js'

const app = express();

// Obtiene el nombre del archivo actual y el directorio
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuración de las vistas y el motor de plantillas
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(indexRoutes)

app.use(express.static(join(__dirname, 'Public')))

// Ruta para el endpoint raíz




// Inicio del servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`);
});
