function geoFigure(type, parameters, num1){
    parameters = Number(parameters);
    num1 = Number(num1);
    area = 0;

    if(type === 'square'){
        area = parameters*parameters;
    } else if (type === 'rectangle'){
        area = parameters*num1;
    } else if (type === 'circle'){
        area = Math.PI*(parameters*parameters);
    } else if (type === 'triangle'){
        area = (parameters*num1)/2;
    }
    console.log(area.toFixed(3))
}