import * as uploadService from "../services/uploadService.js"
import uploadQueryMaker from "../utils/queryObjectMaker.js"

export const uploadGalleryDetails = async (req, res) => {
    const imageFiles = req.files
    try {
        const query = 'INSERT INTO images (images_array) VALUES ($1) RETURNING *';
        const uploadedResult = await uploadService.createNewProperty(query, [imageFiles])
        res.send(uploadedResult.rows[0])
    } catch (error) {
        console.log(error)
    }

}