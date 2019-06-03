export function renderRequest(res) {
    return function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    };
}