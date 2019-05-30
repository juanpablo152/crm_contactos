const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/'));
app.listen(port);

app.get(/.*/, function(req, res){
  const fullPath = path.join(__dirname + '/dist/crm-ub/index.html');
  console.log('Server ready...');
    res.sendFile(fullPath);
})

console.log('Server started running..');

// Servidor funcionando