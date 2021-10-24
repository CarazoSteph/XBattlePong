
function generatekey(event_name){
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz';
    var result = '';
    for(var i = 6; i>0; i--) result += chars[Math.floor(Math.random*chars.length)];
    return [event_name, result];
}



module.exports.generatekey = generatekey;
