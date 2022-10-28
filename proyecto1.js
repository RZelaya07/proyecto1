
obj = {b: 2, a:3, c:1};

imprimirObjeto(obj);


function imprimirObjeto(obj) {
    var keys = Object.keys(obj);

    var values = Object.values(obj);
    keys.sort();
    values.sort();

    result = {keys,values};
    console.log(JSON.stringify(result, null, 4));
    return result;
}