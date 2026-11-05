const express = require('express');
const path = require('path');

const alunoRoutes = require('./routes/alunoRoutes');

const salaRoutes = require('./routes/salaRoutes');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('index'));


app.use('/aluno', alunoRoutes);

app.use('/sala', salaRoutes);

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
