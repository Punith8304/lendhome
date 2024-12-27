import * as uploadService from "../services/uploadService.js"
import uploadQueryMaker from "../utils/queryObjectMaker.js"

export const uploadAmenitiesDetails = async (req, res) => {
    const amenitiesDetails = req.body
    try {
        const {queryColumns, queryPlaceHolders, queryValues} = uploadQueryMaker(amenitiesDetails.additional_amenities)
        const additionalAmenitiesQuery = `INSERT INTO additional_amenities (${queryColumns}) VALUES (${queryPlaceHolders}) RETURNING id`
        const additionAmenitiesResult = await uploadService.createNewProperty(additionalAmenitiesQuery, queryValues)
        const additionalAmenitiesId = additionAmenitiesResult.rows[0].id;
        const amenitiesDetailsCopy = {...amenitiesDetails, additional_amenities: additionalAmenitiesId}
        try {
            const {queryColumns : columns, queryPlaceHolders : placeHolders, queryValues : values} = uploadQueryMaker(amenitiesDetailsCopy)
            const query = `INSERT INTO amenities (${columns}) VALUES (${placeHolders}) RETURNING *`
            const uploadedResult = await uploadService.createNewProperty(query, values)
            res.send(uploadedResult)
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        console.log(errror)
    }
}