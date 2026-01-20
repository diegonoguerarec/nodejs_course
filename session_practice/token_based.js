const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const secretKey = 'mySecretKey';

// POST endpoint for login
app.post('/login', (req, res) => {
    const {user, password} = req.body;

    if (user === 'user' && password === 'pass') {
        const token = jwt.sign({user}, secretKey, {expiresIn: '1h'});
        console.log('Logged in');
        console.log(token);
        res.send({
            user,
            password,
            token,
        });
    } else {
        res.send('Invalid Credentials');
    }
});

app.get('/dashboard', (req, res) => {
    const token = req.headers['authorization'];

    if (token) {
        // Verify JWT token
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                res.send('Invalid token');
            } else {
                res.send('Login Successfull');
            }
        });
    } else {
        res.send('Token missing');
    }
});

app.listen(3000, () => console.log('Server running on port 3000'))