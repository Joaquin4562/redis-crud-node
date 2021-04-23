const express = require('express');
const app = express();
const redis = require('redis');
const client = redis.createClient();

client.on('error', () => {
    console.log(error);
});

app.use(express.json({
    type: '*/*'
}))

app.post('/set-data', (request, response) => {
    const {key, value} = request.body;
    client.set(key,value, (err, reply) => {
        if (err) response.status(200).send({error: true, msg: err});
        response.status(200).send({error: false, msg: 'se inserto con exito'});
    });
    
});

app.get('/get-data/:key', (request, response) => {
    const key = request.params.key;
    client.get(key, (err, reply) => {
        if (err) response.status(200).json({error: true, msg: err});
        response.send({error:false, msg: reply});
    });
});

app.post('/new-user', (request, response) =>{
    const user = request.body;
    client.exists(user.id, (err, reply) => {
        if (reply === 1) {
            return response.json({status: 400, msg: 'El usuario ya existe', usuario});
        }
        client.hmset(user.id, [
            'user_id', user.id,
            'email', user.email,
            'adge', user.adge,
        ], (err, reply) => {
            if (err) return response.json({error: true, msg: err});
            response.json({error: false, msg: reply});
        })
    });
});

app.post('/upadre-user/:userId', (request, response) => {
    const userId = request.params.userId;
    const userData = request.body;
    client.hmset(userId, [
        'userId', userId,
        'email', userData.email,
        'adge', userData.adge,
    ], (err, _) => {
        if (err) response.json({error: false, msg: err});
        response.json({error: false, msg: 'se actualizo correctamente'});
    });
});

app.get('/get-user/:userId', (request, response) => {
    const userId = request.params.userId;
    client.hgetall(userId, (err, reply) => {
        if (err) response.json({error: true, msg: err});
        response.json({error: false, msg: reply});
    });
});

app.get('/delete-user/:userId', (request, response) => {
    const userId = request.params.userId;
    client.del(userId, (err, reply) => {
        if (err) response.json({error: true, msg: err});
        response.json({error: false, msg: 'Se elimino.'})
    });
});

app.listen(3000, () => {
    console.log('Server running in port 3000');
});
