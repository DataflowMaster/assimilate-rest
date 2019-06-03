export function renderer(res) {
    return function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    };
}
