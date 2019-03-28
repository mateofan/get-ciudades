const express = require('express');
const app = express();



app.set('port', 3000);



app.use(express.json());


app.use(require('./rutas/ciudades.js'));



app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto: ${app.get('port')}`);
});