import restify from "restify";
import config from "../../config/config";
import rjwt from 'restify-jwt-community';
import jwt from 'jsonwebtoken';
import corsMiddleware from "restify-cors-middleware";

const cors = corsMiddleware({
    origins: ["*"],
    allowHeaders: ["Authorization"],
    exposeHeaders: ["Authorization"]
});
export const server = restify.createServer({
    name    : config.server.name,
    version : config.server.version,
    url : config.server.hostname
});

server.pre(cors.preflight);
server.use(cors.actual);
server.use(rjwt(config.plugins.jwt).unless({ path: ['/auth']}));
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

export function buildServer(path,rep,method){
    switch (method) {
        case 'get':
            return server.get(path,rep);
        case 'post':
            return server.post(path,rep);
        case 'put':
            return server.put(path,rep);
    }
}

export function start(){
    server.listen(config.server.port, function() {
        console.log('%s listening at %s', server.name, server.url);
    });
}

export function generateToken(data){
    let token = jwt.sign(data, config.plugins.jwt.secret, {
        // expiresIn: '15m' // token expires in 15 minutes
    });
    let { iat, exp } = jwt.decode(token);
    return { iat, exp, token };
}
