import { getConnection } from "../../db_connection";

export async function getmeetings(){
    const connection = await getConnection();
    const teams = await connection?.execute(`SELECT 
    m.*, t.team_name
    FROM
    meeting_menagement.meetings m
        JOIN
    meeting_menagement.developers_teams t ON m.team_id = t.id;`)
    const result = teams?.[0]
    return result
}