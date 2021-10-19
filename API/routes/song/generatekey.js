
function generatekey(name, artist){
    const nameTemp = name;
    const artistTemp = artist;
    var aTemp1 = artistTemp.toString().split(' ');
    var nameTemp1  = nameTemp.toString().split(' ');

    var aTemp2 = '';
    var nameTemp2 = '';
    var aTemp3 = '';
    var nameTemp3 = '';
    //var aTemp3 = aTemp1[0].charAt(0).toUpperCase() + aTemp1[0].slice(1);
    //var nameTemp3 = nameTemp1[0].charAt(0).toUpperCase() + nameTemp1[0].slice(1);
    if(aTemp1.length > 1){
        
        for (let i = 0; i < aTemp1.length; i++){  
            aTemp2 = aTemp2 + aTemp1[i].charAt(0).toUpperCase() + aTemp1[i].slice(1);
    
        }
        aTemp3 = aTemp2;
    } else {
        aTemp3 =  aTemp1[0].charAt(0).toUpperCase() + aTemp1[0].slice(1);
    }
    if(nameTemp1.length > 1){
        
        for (let i = 0; i < nameTemp1.length; i++){  
            nameTemp2 = nameTemp2 + nameTemp1[i].charAt(0).toUpperCase() + nameTemp1[i].slice(1);

        }
        nameTemp3 = nameTemp2;
    } else {
        nameTemp3 = nameTemp1[0].charAt(0).toUpperCase() + nameTemp1[0].slice(1);
    }
    
    return [aTemp3, nameTemp3];
    
}



module.exports.generatekey = generatekey;
