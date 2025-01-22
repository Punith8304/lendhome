import db from "../config/databaseConfig.js"

export const getUser = async (userName) => {
    try {
        const user = await db.query('SELECT * FROM users WHERE user_email = $1', [userName])
        return user.rows[0]
    } catch (error) {
        return error
    }
}
export const createUser = async (userName, email, mobile, password) => {
    try {
        const user = await db.query('INSERT INTO users (user_name, user_email, user_mobile, user_password) VALUES ($1, $2, $3, $4) RETURNING *', [userName, email, mobile, password])
        console.log("success register")
        return user.rows[0]
    } catch (error) {
        console.log(error)
    }
}

export const getCityId = async (city) => {
    try {
        const cityResult = await db.query('SELECT * FROM city WHERE UPPER(city_name) = $1',[city.toUpperCase()])
        return cityResult.rows[0].city_id;
    } catch(error) {
        console.log(error)
    }
}