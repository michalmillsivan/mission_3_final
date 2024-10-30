import { getConnection } from "../../db_connection";

type SearchQuery = {
    team_id?: number,
}

export async function filterMeetings(query: SearchQuery) {
    const connection = await getConnection();
    console.log(query);

    const filter = query?.team_id
    console.log(filter);

    const meetings = await connection?.execute(`SELECT * FROM meeting_menagement.meetings where team_id = ?`, [filter])
    const result = meetings?.[0]
    return result
}