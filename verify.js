const speakeasy = require('speakeasy')

const verified = speakeasy.totp.verify({
    secret: 'Sqastiq:s@/3a{Z2kP&}N,:%/g>)>dvC',
    encoding: 'ascii',
    token: '870319'
})

console.log(verified);