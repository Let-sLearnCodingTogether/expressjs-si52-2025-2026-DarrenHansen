import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

export const jwtSignUtil = (user) => {
    const payload = {
        username: user.username,
        email: user.email
    }
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' })
}