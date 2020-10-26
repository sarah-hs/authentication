const { jwtSecret } = require('../../config');
const jwt = require('jsonwebtoken');


// >> Here is where login
// and verification functions will be declared

const getToken = (username) => {
    return jwt.sign({
        username,
        exp: Date.now() + (Number(process.env.TOKEN_EXPIRES_IN) * 60), // 30min from that moment
    },
        jwtSecret
    );
}

const getExpiration = (token) => {
    return jwt.decode(token).exp;
}

const verify = (token, user) => {
    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) {
          // Send Forbidden
        }
        
        // Continue the request
    });
}


module.exports = {
    getToken,
    getExpiration,
}
