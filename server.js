const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`o servidor está rodando na porta ${port}`)

});

const index = require('./src/routes/index');
const bandas = require('.src/routes/bandasRoutes');
// middlewhere
// identifica o que precisa fazer e diz para o express o que ele precisa fazer

app.use('/', index);
app.use('/bandas', bandas);


