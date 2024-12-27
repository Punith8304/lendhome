import db from "../config/databaseConfig.js"

export const getUser = async (userName) => {
    try {
        const user = await db.query('SELECT * FROM users WHERE user_email = $1', [userName])
        return user.rows[0]
    } catch (error) {
        return error
    }
}
export const createUser = async (userName, email, password) => {
    try {
        const user = await db.query('INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *', [userName, email, password])
        return user.rows[0]
    } catch (error) {
        return error
    }
}