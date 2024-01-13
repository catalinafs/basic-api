const express = require('express');
const bodyParser = require('body-parser');
const valid = require('./middlewares/valid');
const app = express();
const port = 4000;

let array = [];

app.use(bodyParser.json());

// mostrar
app.get('/', (req, res) => {
    res.send(array);
});

// crear
app.post('/', valid, (req, res) => {
    array.push(req.body.msg);

    res.status(200).json(array);
});

// actualizar
app.put('/:number', (req, res) => {
    array[Number(req.params.number)] = req.body.msg;

    res.status(200);
    res.send('se actualizo el mensaje correctamente');
});

// eliminar
app.delete('/:number', (req, res) => {
    array.splice(req.params.number, 1);

    res.status(200);
    res.send('se elimino correctamente');
});

// listener
app.listen(port, () => {
    console.log('Its working');
});