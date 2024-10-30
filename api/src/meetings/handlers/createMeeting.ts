
// import { getConnection } from "../../database"

import { meetingType } from "..";
import { getConnection } from "../../db_connection";


export async function createMeeting(meeting: meetingType) {
    const query = `INSERT INTO meeting_menagement.meetings (team_id, description, meeting_room, starting_time, ending_time) VALUES (?,?,?,?,?)`
    const connection = await getConnection()
    const result = await connection?.execute(query, [meeting.team_id, meeting.description, meeting.meeting_room, new Date(meeting.starting_time), new Date(meeting.ending_time)])
    console.log(result)
    return result?.[0]

}

