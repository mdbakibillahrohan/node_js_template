const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers('auth-token');

    const jwt_secret = process.env.JWT_SECRET;
    if (!token) {
        res.status(401).json({ error: "Please authenticate using valid token" });
    }
    try {
        const data = jwt.verify(token, jwt_secret);
        req.user = data.user;
        next();
    } catch (error) {
        console.log("Auth Middleware error ", error);
        res.status(401).json({ error: "Please authenticate using valid token" })
    }
}