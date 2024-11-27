import express from "express"
import dotenv from "dotenv"
import pg from "pg"
dotenv.config()
import fs from "fs"
import multer from "multer";
import cors from "cors"
const app = express()
app.use(express.json())
app.use(cors())


// Connecting to DATABASE

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

app.get("/images/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const result = await db.query('SELECT * FROM images WHERE id = $1', [id])
        const { image_name, image, mimetype } = result.rows[0];
        res.type(mimetype)
        res.send(image)
    } catch (error) {
        console.log(error)
    }
})


// POST requests API

app.post("/upload/property-details", async (req, res) => {
    const propertyDetails = req.body;
    const objectkeys = Object.keys(propertyDetails);
    const objectValues = Object.values(propertyDetails)
    const columnNames = objectkeys.join(', ') //Converts array of keys into a single string seperated by ", "
    const valuePlaceHolders = objectValues.map((_, index) => `$${index+1}`).join(", ") //Generate placeholders for each value
    const query = `INSERT INTO property (${columnNames}) VALUES (${valuePlaceHolders}) RETURNING *`

    // upload property-details to db
    try {
        const result = await db.query(query, objectValues)
        console.log(result.rows[0])
        res.send("Successfully stored property details in database")
    } catch (error) {
        console.log(error)
        res.send("Error storing property details")
    }

})
app.post("/upload/locality-details", async (req, res) => {
    const localityDetails = req.body
    try {
        const areaResult = await db.query('SELECT * FROM area WHERE area_name=$1', [localityDetails.area_name])
        if(!areaResult.rows[0].area_id) {
            try {
                const insertedResult = await db.query('INSERT INTO area (area_name, city_id) VALUES ($1, $2) RETURNING *', [localityDetails.area_name, localityDetails.city_id])
                console.log(`Area result : ${insertedResult.rows[0]}`)
                try {
                    const result = await db.query('INSERT INTO locality (city_id, area_id, street) VALUES ($1, $2, $3) RETURNING *', [localityDetails.city_id, insertedResult.area_id, localityDetails.street])
                    res.send("Uploaded area detials successfully")
                    console.log(`Locality result : ${result.rows[0]}`)
                } catch (error) {
                    res.status("Error status; 401", error)
                }
            } catch (error) {
                res.status("Error status; 401", error)
                console.log(error)
            }
        } else {
            try {
            const results = await db.query('INSERT INTO locality (city_id, area_id, street) VALUES ($1, $2, $3) RETURNING *', [localityDetails.city_id, areaResult.rows[0].area_id, localityDetails.street])
            res.send("Uploaded area detials successfully")
            console.log(`Locality result : ${results.rows[0]}`)
            } catch(error) {
                res.status("Error status; 401", error)
                console.log(error)
            }
        }
        
    } catch (error) {
        console.log(error)
        res.send(error)
    }
    // console.log("Locality Post request received successfully")
    // console.log(req.body)
    // res.send("Locality Post request received successfully")
})
app.post("/upload/rental-details", async (req, res) => {
    console.log("Rental Post request received successfully")
    console.log(req.body)
    res.send("Rental Post request received successfully")
})
app.post("/upload/amenities-details", async (req, res) => {
    console.log("Amenities Post request received successfully")
    console.log(req.body)
    res.send("Amenities Post request received successfully")
})

const upload = multer({ dest: "./uploads" })

app.post("/upload/gallery-details", upload.single("image"), async (req, res) => {
    try {
        const { originalname, path, mimetype } = req.file;
        const imageData = fs.readFileSync(path)
        try {
            const result = await db.query('INSERT INTO images(image_name, image, mimetype) VALUES ($1, $2, $3) RETURNING id', [originalname, imageData, mimetype])
            console.log(result.rows[0])
            console.log(req.file)
            fs.unlinkSync(path)
            res.status(201).json({ id: result.rows[0].id });
            console.log("Image uploaded:", req.file);
        } catch (error) {
            console.error("Error saving image:", error);
            res.status(500).send("Error saving image");
        }
    } catch (error) {
        console.error("Error handling image upload:", error);
        res.status(500).send("Error handling image upload");
    }
})
app.post("/upload/schedule-detials", async (req, res) => {
    console.log("Schedule Post received successfully")
    console.log(req.body)
    res.send("Schedule Post received successfully")
})


// Server Establishing

const port = process.env.SERVER_PORT
app.listen(port, (req, res) => {
    console.log("Server connection succeeded")
    console.log(`Server running on port ${port}`)
})