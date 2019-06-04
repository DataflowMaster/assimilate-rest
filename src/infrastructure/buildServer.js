import restify from "restify";
import config from "../../config/config";

const server = restify.createServer({
    name    : config.server.name,
    version : config.server.version,
    url : config.server.hostname
});

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