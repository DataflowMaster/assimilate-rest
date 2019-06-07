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



