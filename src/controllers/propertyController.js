import * as uploadService from "../services/uploadService.js"
import uploadQueryMaker from "../utils/queryObjectMaker.js"
export const uploadPropertyDetails = async (req, res) => {
    const propertyDetails = req.body;
    try {
        const {queryColumns, queryPlaceHolders, queryValues} = uploadQueryMaker(propertyDetails)
        const query = `INSERT INTO property (${queryColumns}) VALUES (${queryPlaceHolders}) RETURNING *`
        const uploadedresult = await uploadService.createNewProperty(query, queryValues)
        res.send(uploadedresult)
    }catch(error){
        console.log(error)
    }
}
