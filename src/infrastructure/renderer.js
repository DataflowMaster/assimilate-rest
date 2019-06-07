
export function renderer(res) {
    return function (error, results) {
        if (error)
            res.end(JSON.stringify(error));
        else
            res.end(JSON.stringify(results));
    };
}

export function renderWhatever(res,result){
    res.end(JSON.stringify(result));
}
