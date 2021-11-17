function generatekey(event_name){
    let chars = '0123456789abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for(let i = 6; i>0; i--){
        result += chars[Math.floor(Math.random()*chars.length)];
    } 
    

    return [event_name, result];
}

exports.generatekey = generatekey;