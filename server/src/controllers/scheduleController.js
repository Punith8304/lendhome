import * as uploadService from "../services/uploadService.js"
import uploadQueryMaker from "../utils/queryObjectMaker.js"


export const uploadScheduleDetails = async (req, res) => {
    const scheduleDetails = req.body
    if (scheduleDetails.available_allday === true) {
        scheduleDetails.start_time = "allday"
        scheduleDetails.end_time = "allday"
        console.log(scheduleDetails)
    }
    try {
        const { queryColumns, queryValues, queryPlaceHolders } = uploadQueryMaker(scheduleDetails)
        const query = `INSERT INTO schedule (${queryColumns}) VALUES (${queryPlaceHolders}) RETURNING *`
        const uploadedResult = await uploadService.createNewProperty(query, queryValues)
        res.send(uploadedResult.rows[0])
    } catch (error) {
        console.log(error)
    }
}