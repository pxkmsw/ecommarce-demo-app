const jwt = require("jsonwebtoken");

module.exports = async function isAuthenticated(req, res, next) {
    req.user = {
        name: 'Amit',
        email: 'fsfsd',
        id: "2342352345"
    }
    next();
    const token = req.headers["authorization"].split(" ")[1];

    jwt.verify(token, "secret", (err, user) => {
        if (err) {
            return res.json({ message: err });
        } else {
            req.user = user;
            next();
        }
    });

};
