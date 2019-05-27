const express = require ('express');
const msgCtrl = require ('./controllers/messages')
const app = express();
app.use(express.static('/../public/build'));
app.use(express.json())

const messagesBaseUrl = '/api/messages';

app.post(messagesBaseUrl, msgCtrl.create);
app.get(messagesBaseUrl, msgCtrl.read);
app.put(`${messagesBaseUrl}/:id`, msgCtrl.update);
app.delete(`${messagesBaseUrl}/:id`, msgCtrl.delete);









const port = 3001;
app.listen(port, () =>{
    console.log('Listening on port', port)
})