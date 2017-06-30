const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');

//Middleware
const checkForSession = require('./middleware/checkForSession')

//Controllers
const swag_controller = require('./controllers/swag_controller')
const auth_controller = require('./controllers/auth_controller')

app.use(bodyParser.json());
app.use(session({
  secret: 'asdfq;dkfjkd',
  resave: false,
  saveUninitialized: false
}));
app.use(checkForSession)

// Routes
app.get('/api/swag', swag_controller.read );
app.get('/api/user', auth_controller.getUser);
app.post('/api/login', auth_controller.login);
app.post('/api/register', auth_controller.register);
app.post('/api/signout', auth_controller.signout);







// Bind to a port
const port = 3005;
app.listen(port, () =>{console.log(`App Listening on port: ${port}`)})
