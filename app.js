import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import pg from "pg"
dotenv.config()
import fs from "fs"
import multer from "multer";
import bufferImage from "buffer-image"
const app = express()
const db = new pg.Client({
    user: process.env.PG_USER,
    server: process.env.PG_SERVER,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD
})
async function connectDatabase() {
    try {
        await db.connect()
        console.log("Database connection succeeded")
    } catch (err) {
        console.log(err)
    }
}
connectDatabase()

const upload = multer({dest: "./uploads"})

app.post("/property-details", async (req, res) => {
    try {
        await db.query("INSERT INTO area(area_name, city_id) VALUES ($1, $2)", ['Gachibowli', 1])
    } catch (error) {
        console.log(error)
    }
})

app.post("/upload/images", upload.single("image"), async (req, res) => {
    try {
        const {originalname, path, mimetype} = req.file;
        const imageData = fs.readFileSync(path)
        try {
            const result = await db.query('INSERT INTO images(image_name, image, mimetype) VALUES ($1, $2, $3) RETURNING id', [originalname, imageData, mimetype])
            console.log(result.rows[0])
            console.log(req.file)
            fs.unlinkSync(path)
        } catch (error) {
            console.log(error)
        }
        
    } catch (error) {
        console.log(error)
    }
})
app.get("/images/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const result = await db.query('SELECT * FROM images WHERE id = $1', [id])
        const {image_name, image, mimetype} = result.rows[0];
        res.type(mimetype)
        res.send(image)
    } catch (error) {
        console.log(error)
    }
})
app.use(bodyParser.urlencoded({extended: true}))
const port = process.env.SERVER_PORT
app.listen(port, (req, res) => {
    console.log("Server connection succeeded")
    console.log(`Server running on port ${port}`)
})