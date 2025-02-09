const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require("../utils/config");

const auth = {
    verifyToken: (request, response, next) => {
        try {
            // get the token from the cookie
            const token = request.cookies.token;

            //if the token does not exists, return ana error
            if(!token) {
                return response.status(401).send({ message: 'Acess denied' });
            }
            
            //verify the token
            try {
                const decodedToken  = jwt.verify(token, SECRET_KEY);
                
                // set the user id in the request object
                request.userId = decodedToken.id;

                // call the next middleware
                next();

            } catch (error) {
                response.status(401).send({ message: 'Invalid token' });
            }
            
        } catch (error) {
            response.status(500).send({ message: error.message });
        }
    }
}

module.exports = auth;