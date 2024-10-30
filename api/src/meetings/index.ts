import express, { NextFunction, Request, Response } from "express"
import { getmeetings } from "./handlers/getMeetings"
import { z } from "zod"
import { createMeeting } from "./handlers/createMeeting"
import { filterMeetings } from "./handlers/filterMeeting"


const meetingRouter = express.Router()


//returns all meetings
meetingRouter.get("/", async (req, res, next) => {
    try {
        const data = await getmeetings()
        res.json({ meetings: data })
    } catch (error) {
        res.send("Something went wrong")
    }
})
//returns all filtered meetings
meetingRouter.get("/filter", async (req, res, next) =>{
    try {

        const queryParams = req.query;
        const filteredData = await filterMeetings(queryParams)
        res.json({meetings: filteredData})
    } catch (error) {
        console.log(error)
        res.send("Something went wrong")
    }
})
meetingRouter.post("/", async (req:any, res:any, next:any) => {
    console.log(req.body);


    try {
        newMeetingSchema.parse(req.body)


        const newMeeting: meetingType = extractMeeting(req.body)
        const result = await createMeeting(newMeeting)
        return res.json({ result })
    } catch (error) {
        console.log(error);

        return res.json({ error: "something went wrong" })
    }
})


function extractMeeting(body: any): meetingType {
    const { team_id, starting_time, ending_time, description, meeting_room } = body
    return {  team_id, starting_time, ending_time, description, meeting_room };
}

export type meetingType = {
    team_id: number,
    starting_time: string
    ending_time: string
    description: string
    meeting_room: string
}

const newMeetingSchema = z.object({
    team_id:z.number(),
    description: z.string().min(5).max(100),
    meeting_room: z.string(),
    starting_time: z.string().datetime(),
    ending_time: z.string().datetime()
})

export { meetingRouter }