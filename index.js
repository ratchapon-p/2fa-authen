const speakeasy = require('speakeasy')
const qrcode = require('qrcode')

var secret = speakeasy.generateSecret({
    name: "Devs"
})

console.log(secret);

qrcode.toDataURL(secret.otpauth_url, function(err, data){
    // if(err) throw err
    console.log(data);


})