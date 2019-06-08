import jwt from 'jsonwebtoken';
import config from '../../config/config'





// const server = restify.createServer({
//     name    : config.server.name,
//     version : config.server.version,
//     url : config.server.hostname
// });
//
// server.use(rjwt(config.plugins.jwt).unless({ path: ['/auth']}));
// server.use(restify.plugins.acceptParser(server.acceptable));
// server.use(restify.plugins.queryParser());
// server.use(restify.plugins.bodyParser());
//
// server.listen(config.server.port, () => {
//     console.log('%s listening at %s', server.name, server.url);
// });
//
// server.post('/auth', (req, res, next) => {
//     let { username, password } = req.body;
//     authenticate(username, password).then(data => {
//         // creating jsonwebtoken using the secret from mysqlConfig.json
//         let token = jwt.sign(data, config.plugins.jwt.secret, {
//             expiresIn: '15m' // token expires in 15 minutes
//         });
//
//         // retrieve issue and expiration times
//         let { iat, exp } = jwt.decode(token);
//         res.send({ iat, exp, token });
//     }, reason => {
//         res.send(reason)
//     })
// });
//
//
// const connection = mysql.createConnection(config.db);
//
// server.get('/user', (req, res, next) => {
//     res.send(req.user);
// });



fetch("http://localhost:8080/user", {
    method: 'GET',
    withCredentials: true,
    credentials: 'include',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZHByb2ZmZXNvciI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiYWRtaW4iLCJpYXQiOjE1NTk5ODc2NTQsImV4cCI6MTU1OTk4ODU1NH0.vuVEv3sdIPFP2qUppZrLl7Er3b84mD_28ZrlavujxS8',
        'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
        'Content-Type': 'application/json'
    }})