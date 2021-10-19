function generatename(key){
    const keyTemp = key;
    var akeyTemp = keyTemp.toString().split('_');
    var akeyTemp00 = akeyTemp[0].split('.');
    var akeyTemp10 = akeyTemp[1].split('.');
    akeyTemp10 = akeyTemp10[0];
    var akeyTemp01 = akeyTemp00.toString().match(/[A-Z][a-z]+/g);
    var akeyTemp11 = akeyTemp10.match(/[A-Z][a-z]+/g);
    if (akeyTemp01.length > 1) {
        var akeytemp02 = '';
        for (let i =0; i < akeyTemp01.length; i++){
            akeytemp02 = akeytemp02 + akeyTemp01[i] + ' ';
        }
        
        akeytemp02 = akeytemp02.slice(0,-1);
    } else {
        akeytemp02 = akeyTemp01;
    }
    if (akeyTemp11.length > 1) {
        var akeytemp12 = '';
        for (let i =0; i < akeyTemp11.length; i++){
            akeytemp12 = akeytemp12 + akeyTemp11[i] + ' ';
        }
        akeytemp12 = akeytemp12.slice(0,-1);

    } else {
        akeytemp12 = akeyTemp11;
    }
    var result = akeytemp02 + '-' + akeytemp12;
    return result;
}

module.exports.generatename = generatename;